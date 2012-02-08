Ext.define('Apps.accountManager.model.Subscription', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id',   type: 'int'}
    ],

    validations: [
    ],

    proxy: {
        type: 'rest',
        url : 'subscription'
    }
});