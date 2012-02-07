Ext.define('Apps.userManager.store.Users', {
    extend: 'Ext.data.Store',
    model: 'Apps.userManager.model.User',

    sorters: [{
        property: 'active',
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