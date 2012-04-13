Ext.define('Kebab.model.Privilege', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'info', type: 'string'},
        {name: 'sys_name', type: 'string'}
    ]
});