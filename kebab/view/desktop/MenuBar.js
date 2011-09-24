/**
 * @class MenuBar
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop menu bar widget
 */
Ext.define('Kebab.view.desktop.MenuBar', {
    extend: 'Ext.toolbar.Toolbar',

    alias: 'widget.desktop_menuBar',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
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

        return [{
            iconCls: 'icon-home menu-icon',
            text: '<b>Kebab Project</b>',
            menu: []
        }, {
            text: 'Settings'
        }, {
            text: 'Help'
        }, '->', {
            iconCls: 'icon-session menu-icon',
            text: 'Tayfun Öziş ERİKAN'
        }];
        
    }
});