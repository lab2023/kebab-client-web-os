/**
 * @class Tenants
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Tenants store
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
        tenant: {
            id: 0,
            name: 'Kebab Web OS'
        },
        authenticity_token: null
    }]
});