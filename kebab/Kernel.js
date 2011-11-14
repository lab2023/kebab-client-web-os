/**
 * @class Kernel
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kernel class of the Kebab
 */
Ext.define('Kebab.Kernel', {
    singleton: true,

    /**
     * Class mixins
     */
    mixins: [
        'Ext.util.Observable'
    ],

    /**
     * Required classes
     */
    requires: [
        'Kebab.OS'
    ],

    /**
     * Kernel Configurations
     * @type Object
     */
    config: {

        /**
         * Kebab Kernel Version
         * @type Object
         */
        version: {
            build: 0,
            major: 2,
            minor: 0,
            patch: 0,
            shortVersion: "200",
            version: "2.0.0"
        },

        /**
         * Kebab OS property
         * @type Kebab.OS
         */
        OS: null,

        /**
         * Kebab System Paths
         * @type Object
         */
        paths: {

            /**
             * OS root folder
             * @type String
             */
            root: 'kebab',

            /**
             * Kebab Assets and resources folder
             * @type String
             */
            resources: 'resources',

            /**
             * Kebab Vendors and 3rd. party libraries folder
             * @type String
             */
            vendors: 'vendors'
        },

        /**
         * Kebab Environment
         * @type String
         */
        environment: 'development',

        /**
         * Kebab Base URL (Auto detected)
         * @type String
         */
        baseURL: window.location.origin + window.location.pathname,

        /**
         * Kebab RESTful Service API URL
         * @type String
         */
        restAPI: 'http://localhost:4567'
    },

    /**
     * Kebab constructor
     * @param config
     */
    constructor: function(config) {
        var me = this;
        
        // Init the config
        me.initConfig(config);

        // Add booted event
        me.addEvents('booted');

        // Build the basics
        me._buildBasics();

        // Log message
        console.log('Kebab.Kernel has been initialized for "' + me.getEnvironment() + '" environment...');

        // Boot the kernel
        me.boot();
    },

    /**
     * Boot the Kebab.Kernel and Create new Kebab OS
     * @return void
     */
    boot: function() {
        var me = this, OSInstance;

        // Check OS instance already exist
        if (!me.getOS()) {

            // Create new Kebab.OS instance
            OSInstance = Ext.create('Kebab.OS', {
                appFolder: me.getPaths().root,
            });

            // Listen Kebab.OS launched event
            OSInstance.on('launched', function() {

                // Setup Kernel.config.OS parameter Kebab.OS
                me.setOS(OSInstance);

                //Merging Kebab and Kebab.Kernel classes
                Ext.apply(Kebab, me);
            });

            // Fires self for booted event
            me.fireEvent('booted', me);

            // Log message
            console.log('Kebab.Kernel has been boot up...');
            
        } else {

            // Throw error
            throw new Error(Ext.getDisplayName(me.self) + ' OS has already booted!');
        }

    },

    /**
     * Build the Kebab basics
     * @private
     * @return void
     */
    _buildBasics: function() {
        var me = this, environment, restAPI;

        // URL parameter detector. ?dev = development mode
        environment = (window.location.search.match('(\\?|&)dev') !== null)
            ? 'development' : 'production';
        me.setEnvironment(environment);

        // IF value is blank, REST_API value is equal for BASE_URL value
        restAPI = me.getRestAPI() || me.getBaseURL();
        me.setRestAPI(restAPI);
    }
});