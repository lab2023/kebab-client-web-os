/**
 * @class TenantInfo
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.view.desktop.menu.Info', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.desktop_menu_info',

    id: 'desktop-menu-info',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: me.buildItems()
        }, null);

        me.callParent(arguments);
    },

    /**
     * Build the dock items
     */
    buildItems: function() {
        var me = this;

        return [{
            xtype: 'tbtext',
            style: 'font-size: 110%; font-weight: 800 !important',
            text: Kebab.getBootstrap('tenant')['name']
        },{
            xtype: 'tbtext',
            hidden: true
        }];
    }
});