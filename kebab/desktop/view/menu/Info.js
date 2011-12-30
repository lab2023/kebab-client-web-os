/**
 * @class TenantInfo
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.desktop.view.menu.Info', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.desktop_menu_info',

    id: 'desktop-menu-info',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            style: 'background:transparent !important; border:0 !important;', // TODO move css
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

        return [{
            xtype: 'tbtext',
            text: Kebab.helper.bootData('tenant').name
        }, '-', {
            xtype: 'tbtext',
            text: ' Hello ' + Kebab.helper.bootData('user').name
        }];
    }
});