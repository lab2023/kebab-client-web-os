/**
 * @class MenuBar
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.view.login.Menu', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.login_menu',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            id: 'login-menu',
            dock: 'top',
            defaults: {
                scale: 'small'
            },
            items: me.buildItems()
        });

        me.callParent(arguments);
    },

    /**
     * Build the dock items
     */
    buildItems: function() {

        var tenant = Kebab.Kernel.getController('Tenant').getTenantsStore().getAt(0).data.tenant;

        return [{
            xtype: 'tbtext',
            text: tenant.name
        },'->',{
            xtype: 'tbtext',
            text: Ext.Date.format(new Date(), 'F j, Y, H:i:s')
        }, {
            text: 'X'
        }];
        
    }
});