Ext.define('Apps.userManager.store.Users', {
    extend: 'Ext.data.Store',

    model: 'Apps.userManager.model.User',

    proxy: {
        type: 'rest',
        url: 'seeds/users-all.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});