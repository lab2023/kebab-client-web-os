/**
 * @class TenantInfo
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.view.login.menu.TenantInfo', {
    extend: 'Ext.Component',
    alias: 'widget.login_menu_tenantInfo',

    id: 'login-menu-tenantInfo',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            html: 'Kebab WebOS'
        });

        me.callParent(arguments);
    }
});