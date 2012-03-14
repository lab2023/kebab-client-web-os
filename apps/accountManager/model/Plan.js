Ext.define('Apps.accountManager.model.Plan', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id',   type: 'int'},
        {name: 'name',   type: 'string'},
        {name: 'price',   type: 'float'},
        {name: 'user_limit',   type: 'int'},
        {name: 'machine_limit',   type: 'int'},
        {name: 'recommended',   type: 'boolean'}
    ],

    proxy: {
        type: 'rest',
        url : 'subscriptions/plans',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});