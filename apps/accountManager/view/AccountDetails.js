/**
 * @class AccountDetails
 * @extends Ext.container.Viewport
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * AccountDetails viewport widget
 */
Ext.define('Apps.accountManager.view.AccountDetails', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.accountManager_accountDetails',

    initComponent: function() {
        var me = this,
            paypalImg = Kebab.getRoot('apps/accountManager/resources/images/paypal.gif'),
            tpl = Ext.create('Ext.XTemplate',
                '<h1>Plan Details</h1>',
                '<p><strong>Current Plan: </strong>{plan_name}</p>',
                '<p><strong>User Limit: </strong>{user_limit}</p>',
                '<p><strong>Machine Limit: </strong>{machine_limit}</p><br />',
                '<h1>Payment Details</h1>',
                '<p><strong>Price: </strong>{price:usMoney}</p>',
                '<tpl if="plan_id != 1">',
                    '<p><strong>Next Payment Date: </strong>{next_payment_date:date("Y-m-d")}</p><br />',
                    '<h1>Paypal Status</h1>',
                    '<div class="paypal">',
                        '<p><img src="' + paypalImg + '" alt="PayPal"/></p>',
                        '<p class="paypalStatus">',
                            '<a ref="{[!values.paypal_active ? \'getPaypalCredential\' : \'noAction\']}" class="{[values.paypal_active ? "green": "red"]}-button">',
                                '<em class="icon-paypal" ref="{[!values.paypal_active ? \'getPaypalCredential\': \'noAction\']}">{[values.paypal_active ? "Paypal is active": "Passive. Activate Now!"]}</em>',
                            '</a>',
                        '</p>',
                    '</div>',
                '</tpl>'
            );

        Ext.apply(me, {
            cls: 'account-details',
            autoScroll: true,
            bodyStyle: 'padding: 10px;',
            title: 'Account Details',
            tpl: tpl,
            tbar: me.buildTbar(),
            buttonAlign: 'center',
            buttons: me.buildButtons()
        });

        me.callParent(arguments);
    },

    listeners: {
        body: {
            click: function(e, el) {
                var me = Ext.ComponentQuery.query('accountManager_accountDetails')[0];
                if (el.getAttribute('ref') == 'getPaypalCredential') {
                    me.fireEvent('getPaypalCredential');
                }
            }
        }
    },

    buildTbar: function() {
        var me = this,
            plansCombo = Ext.create('Ext.form.ComboBox', {
                width: 215,
                emptyText: 'Upgrade or downgrade your plan',
                store:  Ext.data.StoreManager.lookup('Plans'),
                listConfig: {
                    getInnerTpl: function() {
                        var currentPlanId = plansCombo.currentPlanId;

                        return '<p class="{[values.id === ' + currentPlanId+ ' ? "disabled" : "normal"]}">' +
                                    '{name}, {price:usMoney}' +
                                    '{[values.id === ' + currentPlanId+ ' ? " (Current)" : ""]}' +
                                '</p>';
                    }
                },
                queryMode: 'local',
                displayField: 'name',
                forceSelection: true,
                typeAhead: false,
                valueField: 'id',
                ref: 'plans'
            });

        plansCombo.getStore().on('load', function(store) {
            plansCombo.currentPlanId = store.getProxy().getReader().jsonData.current_plan;
        });

        return [plansCombo]
    },

    buildButtons: function() {
        var me = this;
        return [{
            text: 'Cancel Account',
            handler: function(btn) {
                me.fireEvent('cancelAccount', btn);
            },
            iconCls: 'icon-cancel'
        }];
    }
});
