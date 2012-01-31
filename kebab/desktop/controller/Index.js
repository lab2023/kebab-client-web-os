/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.desktop.controller.Index', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.menu.Menu'
    ],

    config: {
        desktopContextMenu: null
    },
    /**
     * Controller view widgets
     */
    views: [
        'Index'
    ],

    refs: [{
        ref: 'index',
        selector: 'desktop_index'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        me.initConfig();

        me.buildDesktopMenu();

        me.control({
            // Listener launcher components
            'desktop_index': {
                bodycontextmenu: me.showDesktopMenu
            }
        });

        // Call parent
        me.callParent(arguments);
    },

    buildDesktopMenu: function() {
        var me = this,
            menuItems = {
                items: []
            };

        if (menuItems.items.length) {
            menuItems.items.push('-');
        }

        menuItems.items.push({
            text: 'Cascade Apps',
            handler: function() {
                me.getController('Application').cascadeApplicationViewports();
            }
        },{
            text: 'Minimize Apps',
            handler: function() {
                me.getController('Application').hideAllApplicationViewports();
            }
        });

        me.setDesktopContextMenu(Ext.create('Ext.menu.Menu', menuItems));
    },

    showDesktopMenu: function (e) {
        var me = this, menu =
            me.getDesktopContextMenu();

        e.stopEvent();
        menu.showAt(e.getXY());
        menu.doConstrain();
    }
});
