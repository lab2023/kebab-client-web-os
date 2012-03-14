Ext.define('Apps.accountManager.store.PaymentHistories', {
    extend: 'Ext.data.Store',
    model: 'Apps.accountManager.model.Payment',

    autoDestroy: true,
    autoLoad: true,

    sorters: [{
        property: 'id',
        direction: 'DESC'
    }],

    proxy: {
        type: 'rest',
        url: 'subscriptions/payments',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});