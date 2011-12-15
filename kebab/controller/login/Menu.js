/**
 * @class Login
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login controller
 */
Ext.define('Kebab.controller.login.Menu', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'login.Menu',
        'login.menu.Indicators',
        'login.menu.TenantInfo'
    ],

    /**
     * Controller initializer
     */
    init: function() {

        var me = this;

        /**
         * Control events
         */
        me.control({
            'login_menu_tenantInfo': {
                beforerender: me.onSetTenantInfo
            }
        });
    },

    onSetTenantInfo: function(cp)  {
        var me = this;

        var tenantData = me.getController('Tenant').getTenantsStore().getAt(0).data.tenant;

        if (tenantData) {
            cp.update(tenantData.name);
        }
    }
});
