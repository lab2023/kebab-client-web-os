Ext.define('Kebab.store.Applications', {
    extend: 'Ext.data.Store',
    model: 'Kebab.model.Application',

    // Core applications
    // TODO Move user preferences data for keepDock parameter
    data: [
        {"id": 9991, "sys_name": "profile", "sys_department": "system", "keepDock": true}
    ]
});