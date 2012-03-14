Ext.define('Kebab.model.TimeZone', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'value',   type: 'string'},
        {name: 'name', type: 'string'}
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});