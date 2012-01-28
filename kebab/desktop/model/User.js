Ext.define('Kebab.desktop.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id',   type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'locale', type: 'string'}
    ],

    hasMany: [{
        model: 'Kebab.desktop.model.Application',
        name: 'applications'
    },{
        model: 'Kebab.desktop.model.Privilege',
        name: 'privileges'
    }]
});