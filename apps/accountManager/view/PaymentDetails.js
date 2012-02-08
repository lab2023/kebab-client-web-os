Ext.define('Apps.accountManager.view.PaymentDetails', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.accountManager_paymentDetails',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            title: 'Account Details'
        });

        me.callParent(arguments);
    }

});