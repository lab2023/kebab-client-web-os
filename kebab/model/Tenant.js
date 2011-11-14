/**
 * @class Tenant
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop controller
 */
Ext.define('Kebab.model.Tenant', {
    extend: 'Ext.data.Model',

    /**
     * Model fields
     */
    fields: [
        'tenant',
        'token'
    ],

    /**
     * Model proxy (This proxy allows send cross-domain jsonp request)
     */
    proxy: {
        type: 'jsonp',
        url : 'http://localhost:4567/tenant'
    }
});