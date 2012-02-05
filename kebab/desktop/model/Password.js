Ext.define('Kebab.desktop.model.Password', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id',   type: 'int'},
        {name: 'password', type: 'string'},
        {name: 'password_confirmation', type: 'string'}
    ],

    validations: [
        {type: 'presence', field: 'id'},
        {type: 'presence', field: 'password'},
        {type: 'presence', field: 'password_confirmation'}
    ],

    proxy: {
        type: 'rest',
        url : 'passwords'
    }
});