/**
 * @class Tenant
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Tenant model
 */
Ext.define('Kebab.model.User', {
    extend: 'Ext.data.Model',

    /**
     * Model fields
     */
    fields: [
        {name: 'id', type: 'integer'},
        {name: 'email', type: 'string'},
        {name: 'password', type: 'string'},
        {name: 'locale', type: 'string', defaultValue: 'en'},
        {name: 'applications', type: 'object'},
        {name: 'privileges', type: 'object'}
    ],

    proxy: {
        type: 'memory'
    }
});