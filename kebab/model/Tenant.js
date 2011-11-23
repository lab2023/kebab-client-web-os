/**
 * @class Tenant
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Tenant model
 */
Ext.define('Kebab.model.Tenant', {
    extend: 'Ext.data.Model',

    /**
     * Model fields
     */
    fields: [
        {name: 'tenant', type: 'object'},
        {name: 'authenticity_token', type: 'string'}
    ],

    /**
     * Model proxy (This proxy allows sends cross-domain jsonp request)
     */
    proxy: {
        type: 'jsonp',
        url : Kebab.Kernel.getRestAPI() + '/tenants/register'
    }
});