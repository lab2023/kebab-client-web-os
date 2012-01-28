Ext.define('Kebab.desktop.store.Users', {
    extend: 'Ext.data.Store',

    model: 'Kebab.desktop.model.User',

    data: [Kebab.helper.config('user')]
});