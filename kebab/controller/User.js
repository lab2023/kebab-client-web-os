/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.controller.User', {
    extend: 'Ext.app.Controller',

    /**
     * User Models
     * @type Array
     */
    models: [
        'User'
    ],

    /**
     * User Stores
     * @type Array
     */
    stores: [
        'Users'
    ],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        // Call parent
        me.callParent(arguments);
    }
});
