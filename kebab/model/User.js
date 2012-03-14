Ext.define('Kebab.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id',   type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'locale', type: 'string'},
        {name: 'time_zone', type: 'string'},
        {name: 'disabled', type: 'boolean', defaultValue: false}
    ],

    validations: [
        {type: 'email', field: 'email'},
        {type: 'presence', field: 'name'},
        {type: 'presence', field: 'time_zone'},
        {type: 'presence', field: 'locale'},
        {type: 'length', field: 'locale', min: 2, max: 2},
        {type: 'inclusion', field: 'locale', list: [Kebab.getBootstrap('locale')['available_locales']]}
    ],

    proxy: {
        type: 'rest',
        url : 'users'
    }
});