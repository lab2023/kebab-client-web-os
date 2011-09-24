/**
 * @class OS
 * @extends Ext.app.Application
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Main application class for Kebab OS
 */
Ext.define('Kebab.OS', {
    extend: 'Ext.app.Application',

    name: 'Kebab',
    appFolder: 'kebab',

    autoCreateViewport: true,

    refs: [{
            ref: 'viewport',
            selector: 'viewport'
        }
    ],
    
    controllers: [
        'Login',
        'Desktop'
    ],

    /**
     * @constructor
     * Creates new OS from config options
     */
    constructor: function(config) {
        var me = this;

        // Call parent constructor
        me.callParent(arguments);

        Kebab.helper.log('Kebab.OS initialized...');
    },

    /**
     * Launch the Kebab.OS application
     * @return void
     */
    launch: function() {
        var me = this;

        // TODO check user is online
        me.getController('Login').indexAction();

        Kebab.helper.log('Kebab.OS launched...');
    }
});
