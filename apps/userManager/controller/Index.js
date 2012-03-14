/**
 * @class Index
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * UserManager app index controller
 */
Ext.define('Apps.userManager.controller.Index', {
    extend: 'Ext.app.Controller',

    /**
     * Controller models
     */
    models: [
        'User'
    ],

    /**
     * Controller models
     */
    stores: [
        'Users'
    ],

    /**
     * Controller views
     */
    views: [
        'UserList',
        'UserInvitationForm'
    ],

    /**
     * Controller refs
     */
    refs: [{
        ref: 'userList',
        selector: 'userManager_userList'
    },{
        ref: 'userInvitationForm',
        selector: 'userManager_userInvitationForm'
    },{
        ref: 'limitsIndicator',
        selector: 'userManager_viewport button[action="showLimits"]'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        me.control({
            'userManager_viewport button[action="showLimits"]': {
                click: me.updateUserLimits,
                render: me.updateUserLimits
            },
            // Sign-in form textfield items
            'userManager_userInvitationForm > textfield': {
                specialkey: me.sendUserInvitation
            },
            // Listen sendUserInvitation button events
            'userManager_userInvitationForm button[action="sendUserInvitation"]': {
                click: me.sendUserInvitation
            },
            // Listen launcher component events
            'userManager_userList': {
                itemclick: me.clickUserItem
            }
       });

        // Call parent
        me.callParent(arguments);
    },

    clickUserItem: function(dv, r, n, i, e) {
        e.stopEvent();
        var me = this,
            target = e.getTarget('a', 0, true);

        if (target && (target.getAttribute('href') == '#disable' || target.getAttribute('href') == '#enable')) {
            me.enableDisableUser(r, target);
        }
    },

    /**
     * Send sendUserInvitation message
     *
     * @param cp Ext.form.field.Text Fired component
     * @param cp Ext.button.Button Fired component
     * @param e Ext.EventObject
     */
    sendUserInvitation: function(cp, e) {
        var me = this;

        // Just enter key is pressed or submit button clicked
        if (e.getKey() == e.ENTER || cp.action == 'sendUserInvitation') {
            e.stopEvent();

            // Accessors
            var formPanel = me.getUserInvitationForm(),
                form = formPanel.getForm();

            // Validation
            if (form.isValid()) {

                // Create new user model instance
                var User = Ext.create(
                    me.getUserModel(),
                    form.getValues()
                );

                // Mask
                formPanel.getEl().mask('Please wait...');

                // Sync server
                User.save({
                    success: function() {
                        // Add new user to store
                        me.getUserList().getStore().load();
                        Kebab.NotifyHelper.msg('OK', Kebab.I18nHelper.t('kebab.messages.success'));
                        formPanel.getEl().unmask();
                        me.updateUserLimits();
                        form.reset();
                    },
                    failure: function() {
                        Kebab.NotifyHelper.msg('ERR', Kebab.I18nHelper.t('kebab.messages.failure'));
                        formPanel.getEl().unmask();
                    }
                });

            }
        }
    },

    enableDisableUser: function(record, target) {
        var me = this;

        // Are u sure ?
        Ext.Msg.show({
            title:'Are you sure ?',
            msg: record.data.disabled ?
                'The user will be <strong>enabled</strong> again' :
                'User no longer <strong>not be able to sign-in</strong>',
            buttons:Ext.Msg.OKCANCEL,
            modal: false,
            animateTarget: target,
            fn: function(button) {
                if (button == 'ok') {

                    // Req action
                    var reqAction = record.data.disabled ? 'enable' : 'disable';

                    // Mask
                    me.getUserList().ownerCt.getEl().mask('Please wait');

                    // Post server
                    Ext.Ajax.request({
                        method: 'POST',
                        url: 'users/' + reqAction,
                        params: {
                            id: record.data.id
                        },
                        success: function() {
                            me.getUserList().ownerCt.getEl().unmask();
                            record.set('disabled', !record.data.disabled);
                            me.updateUserLimits();
                            Kebab.NotifyHelper.msg('OK', Kebab.I18nHelper.t('kebab.messages.success'));
                        },
                        failure: function() {
                            // Rollback
                            record.reject();
                            me.getUserList().ownerCt.getEl().unmask();
                            Kebab.NotifyHelper.msg('ERR', Kebab.I18nHelper.t('kebab.messages.failure'));
                        }
                    });
                }
            },
            icon:Ext.Msg.WARNING
        });
    },

    updateUserLimits: function() {
        var me = this,
            btn = me.getLimitsIndicator();

        btn.setText(Kebab.I18nHelper.t('kebab.texts.checking'));
        btn.disable();
        Ext.Ajax.request({
            url: 'subscriptions/limits',
            method: 'GET',
            success: function(response) {
                var obj = Ext.decode(response.responseText);
                btn.removeCls('x-masked');
                btn.enable();
                btn.setText(Ext.String.format(Kebab.I18nHelper.t('userManager.texts.userLimits') + ': {1} / {0}', obj.data.user.limit, obj.data.user.total));


                if (obj.data.user.limit <= obj.data.user.total) {
                    me.getUserInvitationForm().disable();
                } else {
                    me.getUserInvitationForm().enable();
                }

            } ,
            failure: function() {
                btn.setText(Kebab.I18nHelper.t('kebab.texts.failure'));
                btn.enable();
            }
        });
    }
});
