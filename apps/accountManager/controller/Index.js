/**
 * @class Index
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * accountManager Index controller
 */
Ext.define('Apps.accountManager.controller.Index', {
    extend: 'Ext.app.Controller',

    /**
     * Controller views
     */
    views: [
        'AccountDetails',
        'PaymentHistoryList'
    ],

    /**
     * Application models
     */
    models: [
        'Plan',
        'Payment'
    ],

    /**
     * Application models
     */
    stores: [
        'Plans',
        'PaymentHistories'
    ],

    /**
     * Controller refs
     */
    refs: [{
        ref: 'accountDetails',
        selector: 'accountManager_accountDetails'
    },{
        ref: 'paymentHistoryList',
        selector: 'accountManager_paymentHistoryList'
    }],

    init: function() {
        var me = this;

        me.control({
            'accountManager_accountDetails': {
                render: me.loadAccountDetails,
                getPaypalCredential: me.getPaypalCredential,
                cancelAccount: me.cancelAccountAsk
            },
            'accountManager_accountDetails combo[ref="plans"]': {
                select: function(cmb, r) {
                    if (r[0].get('id') !== cmb.currentPlanId) {
                        me.changePlan(cmb.getValue(), cmb);
                    }
                },
                beforeselect: function(cmb, record) {
                    if(record.get('id') == cmb.currentPlanId) {
                        return false;
                    }
                }
            }
        });
    },

    loadAccountDetails: function() {
        var me = this,
            accountDetailsPanel = me.getAccountDetails();

        // Mask
        accountDetailsPanel.getEl().mask('Please wait...');

        // Request server
        Ext.Ajax.request({
            method: 'GET',
            url: 'subscriptions/next_subscription',
            success: function(response) {
                var data = Ext.decode(response.responseText);
                accountDetailsPanel.update(data);
                accountDetailsPanel.getEl().unmask();
            },
            failure: function() {
                accountDetailsPanel.getEl().unmask();
            }
        });
    },

    getPaypalCredential: function() {
        var me = this,
            accountManagerWin = me.application.getViewport(),
            beforePaypal = function() {
                Ext.defer(function() {
                    Ext.fly('afterPaypal').on('click', function() {
                        afterPaypal();
                    });
                }, 100);
            },
            afterPaypal = function() {
                me.loadAccountDetails();
                accountManagerWin.body.unmask();
            };

        // Mask
        accountManagerWin.body.mask('Connecting <strong>PayPal</strong>. Please wait...' +
            '<a id="afterPaypal" href="#afterPaypal">Click to cancel</a>');

        // Post server
        Ext.Ajax.request({
            method: 'GET',
            url: 'subscriptions/paypal_credential',
            success: function(response) {
                var data = Ext.decode(response.responseText);
                    paypalWin = window.open(data.checkout_url);
                accountManagerWin.body.mask(
                    'If PayPal window is not open, <a target="_blank" href="' + data.checkout_url + '">please click here.</a><br />' +
                    'If your paypal activation is completed, <a id="afterPaypal" href="#afterPaypal">click to return.</a>'
                );
                beforePaypal();
            },
            failure: function() {
                Kebab.NotifyHelper.msg('ERR', 'PayPal connecting error.<br />Please try again.', true, {
                    xtype: 'button',
                    text: 'Try again now!',
                    handler: function() {
                        me.getPaypalCredential();
                    }
                });
            }
        });
    },

    changePlan: function(newPlanId, cmb) {
        var me = this,
            msg = cmb.currentPlanId < newPlanId ? 'upgraded' : 'downgraded';

        // Are u sure ?
        Ext.Msg.show({
            title:'Are you sure ?',
            msg: 'Your account is <br /><strong>' + msg +
                '</strong> for <strong>' + cmb.getRawValue().toLowerCase() + '</strong> plan',
            buttons: Ext.Msg.OKCANCEL,
            animateTarget: cmb.getEl(),
            fn: function(button) {
                if (button == 'ok') {

                    // Mask
                    me.getAccountDetails().getEl().mask('Please wait');

                    // Post server
                    Ext.Ajax.request({
                        method: 'PUT',
                        url: 'subscriptions/' + newPlanId,
                        params: {
                            new_plan_id: newPlanId
                        },
                        success: function(response) {
                            var data = Ext.decode(response.responseText);

                            me.getAccountDetails().getEl().unmask();

                            if (data.success) {
                                switch(data.change_plan_type) {
                                    case 'free_to_commercial':
                                        me.getPaypalCredential();
                                        break;
                                    case 'commercial_to_free':
                                        console.warn('commercial_to_free');
                                        break;
                                    case 'downgrade':
                                        console.warn('downgrade');
                                        break;
                                    case 'upgrade':
                                        me.getPaypalCredential();
                                        break;
                                    default:
                                        console.warn('no action');
                                        break;
                                }

                                // RESPONSE change_plan_type SWITCH
                                me.loadAccountDetails();

                                // TODO Update combo
                                cmb.getStore().load();

                                Kebab.NotifyHelper.msg('OK', Kebab.I18nHelper.t('kebab.messages.success'));
                            } else {
                                cmb.reset();
                            }
                        },
                        failure: function() {
                            cmb.reset();
                            me.getAccountDetails().unmask();
                            Kebab.NotifyHelper.msg('ERR', Kebab.I18nHelper.t('kebab.messages.failure'));
                        }
                    });
                } else {
                    cmb.reset();
                }
            },
            icon:Ext.Msg.WARNING
        });
    },

    /**
     * Ask are you sure ?
     *
     * @param btn
     */
    cancelAccountAsk: function(btn) {
        var me = this;

        if (Kebab.getBootstrap('user')['is_owner']) {
             Ext.Msg.show({
                 cls: 'cancel-account-message-box',
                 title:'Need to cancel your account ?',
                 msg:'We\'ll be sorry to see you go. ' +
                     '<strong>Once your account is cancelled, all your project information will be immediately and permanently deleted. </strong>' +
                     'If you have a paying account you won\'t be charged again after your official cancellation date.',
                 buttonText: {
                     ok: '<strong>Please cancel and delete my account (I understand this is irreversible)</strong>',
                     cancel: 'Cancel'
                 },
                 buttons:Ext.Msg.OKCANCEL,
                 animateTarget:btn.getEl(),
                 fn: function(button) {
                     if (button == 'ok') {
                         me.cancelAccount();
                     }
                 },
                 icon: 'icon-cancel-account'
            });
        } else {
            Kebab.NotifyHelper.msg('ERR', Kebab.I18nHelper.t('kebab.messages.failure'));
        }
    },

    /**
     * Destroy user from server
     */
    cancelAccount: function() {
        var loadMask = Kebab.LoaderHelper().getMask(),
            tenantId = Kebab.getBootstrap('tenant').id;

        loadMask.show();

        Ext.Ajax.request({
            method: 'DELETE',
            url: 'tenants/' + tenantId,
            success: function() {
                Kebab.URLHelper.redirect('login.html');
            },
            failure: function() {
                loadMask.hide();
                Kebab.NotifyHelper.msg('ERR', Kebab.I18nHelper.t('kebab.messages.failure'));
            }
        });
    }
});
