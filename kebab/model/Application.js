Ext.define('Kebab.model.Application', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'sys_name', type: 'string'},
        {name: 'sys_department', type: 'string'},
        {name: 'appTitle', type: 'string'},
        {name: 'appDepartment', type: 'string'},
        {name: 'keepDock', type: 'boolean'}
    ]
});