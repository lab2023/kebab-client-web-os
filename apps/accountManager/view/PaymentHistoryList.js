Ext.define('Apps.accountManager.view.PaymentHistoryList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.accountManager_paymentHistoryList',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            title:'Payment History',
            store: Ext.data.StoreManager.lookup('PaymentHistories'),
            viewConfig: {
                emptyText: 'No payment to display'
            },
            columns: me.buildColumns()
        });

        me.callParent(arguments);
    },

    buildColumns: function() {

        return [{
            xtype: 'rownumberer'
        },{
            text: 'Invoice No',
            flex: 34,
            dataIndex: 'invoice_no'
        },{
            text: 'Payment Date',
            xtype: 'datecolumn',
            align: 'right',
            format: 'Y-m-d H:i:s',
            flex: 33,
            dataIndex: 'payment_date'
        },{
            text: 'Price',
            dataIndex: 'price',
            renderer: Ext.util.Format.usMoney,
            align: 'right',
            flex: 33
        }];

    }

});