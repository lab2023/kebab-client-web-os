/**
 * @class OS
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * OS class for Kebab
 */
Ext.define('Kebab.OS', {
    extend: 'Ext.app.Application',

    /**
     * Required classes
     */
    requires: [
        'Kebab.store.Tenants'
    ],

    /**
     * OS name and namespace
     * @type String
     */
    name: 'Kebab',

    /**
     * OS Viewport auto create property
     * @type Boolean
     */
    autoCreateViewport: true,

    /**
     * OS References and selectors
     * @type Array
     */
    refs: [{
            ref: 'viewport',
            selector: 'viewport'
        }
    ],

    /**
     * OS Controllers
     * @type Array
     */
    controllers: [
        'Loader',
        'Tenant'
    ],
    
    /**
     * @constructor
     * Creates new OS from config options
     * @return void
     */
    constructor: function(config) {
        var me = this;

        // Call parent constructor
        me.callParent(arguments);

        // Add OS events
        me.addEvents({
            'launched': true
        });

        console.log('Kebab.OS has been initialized...');
    },

    /**
     * OS after launch method
     * @return void
     */
    launch: function() {
        var me = this;

        // Fires launched event
        me.fireEvent('launched');

        me.getController('Loader').onMsg('Kebab Web OS starting');

        console.log('Kebab.OS has been started...');
    }
});
