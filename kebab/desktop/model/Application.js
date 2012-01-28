Ext.define('Kebab.desktop.model.Application', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'user_id', type: 'int'},
        {name: 'sys_name', type: 'string'},
        {name: 'sys_department', type: 'string'}
    ],

    belongsTo: 'Kebab.desktop.model.User'
});