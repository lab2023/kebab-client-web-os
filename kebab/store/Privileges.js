Ext.define('Kebab.store.Privileges', {
    extend: 'Ext.data.Store',
    model: 'Kebab.model.Privilege',

    data: Kebab.getBootstrap('user')['privileges']
});