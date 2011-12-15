/**
 * @class OS
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel
 */
Ext.define('Kebab.Kernel', {
    singleton: true,
    extend: 'Ext.app.Application',

    /**
     * Kernel root folder
     * @type String
     */
    appFolder: 'kebab',

    /**
     * Kernel name and namespace
     * @type String
     */
    name: 'Kebab',

    /**
     * Kernel Viewport auto create property
     * @type Boolean
     */
    autoCreateViewport: true,

    /**
     * Kernel Configurations
     * Reference to KEBAB CONFIG constant
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
         * Kebab System Paths
         * @type Object
         */
        paths: {

            /**
             * Kebab root folder
             * @type String
             */
            root: '',

            /**
             * Kernel root folder
             * @type String
             * @see Kebab.Kernel.appFolder
             */
            kebab: 'kebab',

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
        baseURL: window.location.origin,

        /**
         * Kebab RESTful service API URL
         * @type String
         */
        restAPI: 'http://localhost:4567',

        /**
         * Testing suite status (unit testing)
         * @type Boolean
         */
        testing: false
    },

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
     * Kernel Controllers
     * @type Array
     */
    controllers: [
        'System',
        'Loader',
        'Tenant',
        'login.Index',
        'login.Menu'
    ],
    
    /**
     * @constructor
     * Creates new Kernel from config options
     * @return void
     */
    constructor: function() {
        var me = this;

        // Init the config
        me.initConfig(arguments);

        // Call parent constructor
        me.callParent(arguments);

        // Add OS events
        me.addEvents({
            'prepared': true,
            'booted': true
        });

        // Prepare the OS
        me._prepare();

        console.log('Kebab.Kernel has been initialized...');
    },

    /**
     * Kernel after launch method
     * @return void
     */
    launch: function() {
        var me = this;

        // Fires boot event
        me.fireEvent('booted');

        // Test suite is enabled
        if (me.getTesting()) {
            me._runTests();
        }

        console.log('Kebab.Kernel has been booted...');
    },

    /**
     * Prepare Kebab Kernel
     * @private
     * @return void
     */
    _prepare: function() {
        var me = this, environment, restAPI, theme;

        // URL parameter detector. ?dev = development mode
        environment = (window.location.search.match('(\\?|&)dev') !== null)
            ? 'development' : 'production';
        me.setEnvironment(environment);

        // IF value is blank, REST_API value is equal for BASE_URL value
        restAPI = me.getRestAPI() || me.getBaseURL();
        me.setRestAPI(restAPI);

        // Testing suite detector. run-tests.html
        var testing = (window.location.pathname.match(RegExp('run-tests')) !== null) ? true : false;
        me.setTesting(testing);

        // Fires prepared event
        me.fireEvent('prepared');
    },

    /**
     * Initialize test suite & excecute all specs
     */
    _runTests: function() {
        var me = this;

        // Jasmine Initializer
        jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
        jasmine.getEnv().execute();

        // Override Jasmine styles
        Ext.select('.jasmine_reporter').setStyle({
            'z-index': '100000',
            'background': 'rgba(0, 0, 0, .6)',
            'position': 'fixed',
            'width': '100%',
            'bottom': '0',
            'padding': '15px',
            'margin': 'auto'
        });

        console.log('Testing suite has been initialized...');
    }
});
