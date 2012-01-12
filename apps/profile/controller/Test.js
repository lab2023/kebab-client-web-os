/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Apps.profile.controller.Test', {
    extend: 'Ext.app.Controller',

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

         me.control({
             'profile_viewport': {
                 drag: function() {
                      console.log('Apps.Profile viewport dragged');
                 }
             }
         });

        // Call parent
        me.callParent(arguments);
    }
});
