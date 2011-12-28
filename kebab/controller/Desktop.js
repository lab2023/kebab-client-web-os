/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.controller.Desktop', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'desktop.Index',
        'desktop.Menu',
        'desktop.menu.Indicators',
        'desktop.menu.Info',
        'desktop.Dock'
    ],

    refs: [{
        ref: 'indicators',
        selector: 'desktop_menu_indicators'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        // Call parent
        me.callParent(arguments);
    },

    onIndex: function() {
        var me = this;
    }
});
