Ext.define('Kebab.desktop.store.Applications', {
    extend: 'Ext.data.Store',

    model: 'Kebab.desktop.model.Application',

    // Core applications
    data: [
        {"id": 9991, "sys_name": "profile", "sys_department": "system"} // TODO auto id
    ]
});