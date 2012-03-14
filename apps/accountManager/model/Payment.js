Ext.define('Apps.accountManager.model.Payment', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id',   type: 'int'},
        {name: 'payment_date',   type: 'date'},
        {name: 'price',   type: 'float'},
        {name: 'invoice_no',   type: 'string'}
    ],

    proxy: {
        type: 'rest',
        url : 'subscriptions',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});