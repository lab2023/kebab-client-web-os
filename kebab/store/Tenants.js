/**
 * @class Tenants
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop controller
 */
Ext.define('Kebab.store.Tenants', {
    extend: 'Ext.data.Store',

    /**
     * Store model
     */
    model: 'Kebab.model.Tenant',

    /**
     * Default data
     */
    data: [{
        tenant: 'Kebab Web OS',
        token: null
    }]
});