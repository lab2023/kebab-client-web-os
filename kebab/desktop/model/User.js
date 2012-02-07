Ext.define('Kebab.desktop.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id',   type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'locale', type: 'string'},
        {name: 'time_zone', type: 'string'},
        {name: 'active', type: 'boolean',  defaultValue: true}
    ],

    validations: [
        {type: 'email', field: 'email'},
        {type: 'presence', field: 'name'},
        {type: 'presence', field: 'time_zone'},
        {type: 'presence', field: 'locale'},
        {type: 'length', field: 'locale', min: 2, max: 2},
        {type: 'inclusion', field: 'locale', list: [Kebab.helper.config('locale')['available_locales']]}
    ],

    proxy: {
        type: 'rest',
        url : 'users'
    }
});