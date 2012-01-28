Ext.define('Kebab.desktop.model.Privilege', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'user_id', type: 'int'},
        {name: 'sys_name', type: 'string'}
    ],

    belongsTo: 'Kebab.desktop.model.User'
});