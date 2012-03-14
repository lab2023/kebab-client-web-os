/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.controller.desktop.Index', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.menu.Menu'
    ],

    config: {
        desktopContextMenu: Ext.create('Ext.menu.Menu')
    },

    /**
     * Application Models
     * @type Array
     */
    models: [
        'User',
        'Password',
        'Application',
        'Privilege',
        'TimeZone'
    ],

    /**
     * Controller view widgets
     */
    views: [
        'desktop.Index'
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
        var me = this;
        me.getDesktopContextMenu().add(me.getDesktopMenu());
    },

    getDesktopMenu: function() {
        return [{
            iconCls: 'icon-application_cascade',
            text: Kebab.I18nHelper.t('kebab.texts.cascade'),
            action: 'cascadeApps'
        },{
            iconCls: 'icon-application_put',
            text: Kebab.I18nHelper.t('kebab.texts.minimize'),
            action: 'showDesktop'
        }];
    },

    showDesktopMenu: function (e) {
        var me = this, menu =
            me.getDesktopContextMenu();
        e.stopEvent();
        menu.showAt(e.getXY());
    }
});
