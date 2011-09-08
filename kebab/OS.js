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

    requires: [
        'Kebab.config.OS'
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
        console.log('Kebab.OS initialized...');

        // Merge configurations
        this.initConfig(
            Ext.apply(config, Kebab.config.OS.getOptions())
        );

        // Call parent constructor
        this.callParent(arguments);

        console.log(this);
    },

    /**
     * Launch the Kebab.OS application
     * @return void
     */
    launch: function() {
        console.log('Kebab launched...');
        // TODO check user is online
        //this.getController('Login').indexAction();
    }
});