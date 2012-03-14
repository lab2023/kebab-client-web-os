Ext.define('Kebab.model.Password', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'password', type: 'string'},
        {name: 'new_password', type: 'string'},
        {name: 'new_password_confirmation', type: 'string'}
    ],

    validations: [
        {type: 'presence', field: 'id'},
        {type: 'presence', field: 'password'},
        {type: 'presence', field: 'new_password'},
        {type: 'presence', field: 'new_password_confirmation'}
    ],

    proxy: {
        type: 'rest',
        url : 'passwords'
    }
});