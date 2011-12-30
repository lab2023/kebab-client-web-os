/**
 * @class Index
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.desktop.view.Menu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.desktop_menu',

    id: 'desktop-menu',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            dock: 'top',
            bodyStyle: 'background: #eee !important; border-bottom:1px solid #ccc !important;', // TODO move css
            height: 32,
            defaults: {
                border:false
            },
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'stretch'
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
            xtype: 'desktop_menu_info',
            flex: 1
        }, {
            xtype: 'desktop_menu_indicators',
            flex: 1
        }];
        
    }
});