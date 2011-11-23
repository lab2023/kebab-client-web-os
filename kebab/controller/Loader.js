/**
 * @class Loader
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Loader controller
 */
Ext.define('Kebab.controller.Loader', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'loader.Mask'
    ],

    /**
     * Refs and selectors
     */
    refs: [{
            ref: 'loaderMask',
            selector: 'loader_mask'
        }
    ],
    
    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        // Create loader.Mask view component
        me.getView('loader.Mask').create();

        me.control({
            'loader_mask': {}
        });

        // Call parent
        me.callParent(arguments);
    },

    /**
     * Show load mask and set msg
     */
    onShow: function() {
        var me = this;

        // Fade in element
        me.getLoaderMask().onShow();

        return me;
    },

    /**
    * Hide load mask
    */
    onHide: function() {
        var me = this;

        // Fade out element
        me.getLoaderMask().onHide();

        return me;
    },

    /**
     * Set the loader message
     * @param msg String
     */
    onMsg: function(msg) {
        var me = this;

        // Set loader msg
        me.getLoaderMask().onMsg(msg);

        return me;
    },

    onDisable: function() {
        var me = this;

        // Disable loader component
        me.getLoaderMask().onDisable();
    }
});
