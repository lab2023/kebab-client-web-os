Ext.define('Apps.accountManager.view.PaymentHistoryList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.accountManager_paymentHistoryList',

    initComponent: function() {
        var me = this;

        var store = Ext.create('Ext.data.Store', {
            model: 'Apps.accountManager.model.Subscription',
            autoLoad: true,
            proxy: {
                type: 'rest',
                url: 'subscription/payments',
                reader: {
                    type: 'json',
                    root: 'images'
                }
            }
        });

        Ext.apply(me, {
            title:'Payment History',
            store: store,
            viewConfig: {
                emptyText: 'No payment to display'
            },
            columns: me.buildColumns()
        });

        me.callParent(arguments);
    },

    buildColumns: function() {

        return [{
            text: 'Plan Name',
            dataIndex: 'plan_name',
            flex: 50
        },{
            text: 'Date',
            xtype: 'datecolumn',
            format: 'm-d-',
            flex: 35,
            dataIndex: 'date'
        },{
            text: 'Price',
            dataIndex: 'size',
            tpl: '{format:usMoney}',
            align: 'right',
            flex: 15
        }];

    }

});