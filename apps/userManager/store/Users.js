Ext.define('Apps.userManager.store.Users', {
    extend: 'Ext.data.Store',
    model: 'Kebab.model.User',

    autoDestroy: true,
    autoLoad: true,
    autoSync: true,

    sorters: [{
        property: 'disabled',
        direction: 'DESC'
    }],

    proxy: {
        type: 'rest',
        url: 'users',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});