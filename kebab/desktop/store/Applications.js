Ext.define('Kebab.desktop.store.Applications', {
    extend: 'Ext.data.Store',

    model: 'Kebab.desktop.model.Application',

    // Core applications
    // TODO Move user preferences data for keepDock parameter
    data: [
        {"id": 9991, "sys_name": "Profile", "sys_department": "system", "keepDock": true},
        {"id": 9993, "sys_name": "UserManager", "sys_department": "administration", "keepDock": true},
        {"id": 9992, "sys_name": "Feedback", "sys_department": "system", "keepDock": true}
    ]
});