Ext.define('Kebab.model.Application', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'sys_name', type: 'string'},
        {name: 'sys_department', type: 'string'},
        {name: 'title', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'department', type: 'string'},
        {name: 'keepDock', type: 'boolean'}
    ]
});