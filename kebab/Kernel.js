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
    appFolder: Kebab.getRoot() + '/kebab',

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
            root: Kebab.getRoot(),

            /**
             * Kernel root folder
             * @type String
             * @see Kebab.Kernel.appFolder
             */
            kebab: Kebab.getRoot() + '/kebab',

            /**
             * Kebab Assets and resources folder
             * @type String
             */
            resources: Kebab.getRoot() + '/resources',

            /**
             * Kebab Vendors and 3rd. party libraries folder
             * @type String
             */
            vendors: Kebab.getRoot() + '/vendors'
        },

        /**
         * Kebab Environment
         * @type String
         */
        environment: Kebab.getEnvironment(),

        /**
         * Kebab Base URL (Auto detected)
         * @type String
         */
        baseURL: Kebab.getBaseURL(),
        /**
         * Current theme name
         * @type String
         */
        theme: 'gray',

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
    }],

    /**
     * Kernel Controllers
     * @type Array
     */
    controllers: [
        'Loader',
        'Login',
        'Desktop',
        'User'
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

        // Check user login status and show index or desktop views
        me.getController('Login').index();

        me.getController('Loader').hide();

        console.log('Kebab.Kernel has been launched...');
    },

    /**
     * Prepare Kebab Kernel
     * @private
     * @return void
     */
    _prepare: function() {
        var me = this, environment, restAPI, theme;

        // Add Ext.ux path from ext loader
        Ext.Loader.setPath(
            'Ext.ux',
            me.getPaths().vendors + '/ext-4.0.7-gpl/examples/ux'
        );

        // URL parameter detector. ?dev = development mode
        environment = (window.location.search.match('(\\?|&)dev') !== null)
            ? 'development' : 'production';
        me.setEnvironment(environment);

        // Testing suite detector. run-tests.html
        var testing = (window.location.pathname.match(RegExp('run-tests')) !== null) ? true : false;
        me.setTesting(testing);

        // Fires prepared event
        me.fireEvent('prepared');

        console.log('Kebab.Kernel has been prepared...');
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
