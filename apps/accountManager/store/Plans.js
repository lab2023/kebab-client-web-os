Ext.define('Apps.accountManager.store.Plans', {
    extend: 'Ext.data.Store',
    model: 'Apps.accountManager.model.Plan',

    autoDestroy:true,
    autoLoad: true,

    sorters: [{
        property: 'id',
        direction: 'ASC'
    }]
});