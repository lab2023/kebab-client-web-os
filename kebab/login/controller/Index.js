/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.login.controller.Index', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'Logo',
        'Menu',
    ],

    refs: [{
        ref: 'menu',
        selector: 'login_menu'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

         me.control({

         });

        // Call parent
        me.callParent(arguments);
    }
});
