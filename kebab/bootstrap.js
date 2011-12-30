/* -----------------------------------------------------------------------------
 Kebab Project 2.x (Kebab Revolution) - Web OS Client Platform for Ext JS 4.x
 http://kebab-project.com
 Copyright (c) 2011-2012 lab2023 - internet technologies TURKEY Inc.
 http://www.lab2023.com
----------------------------------------------------------------------------- */

/**
 * Prepare environment, enable loader an boot kebab automatically
 *
 * @singleton
 */
(function() {

    /**
     * Kebab base variables
     */
    var global      = this,                           // DOM root
        bootData    = {                               // Current tenant data. IF not use tenant setup this object manually
            authenticity_token : '1q2w3e4r5t6y7u8i9o0p!^+%&/',
            tenant: {
                id: 0,
                name: 'lab2023 - internet technologies',
                host: 'default.kebab.local'
            },
            locale: {
               default_locale: 'true',
               available_locales: ['en', 'tr', 'ru']
            }
        },
        root        = '',                           // Kebab cdn & root path, Eg : http://static.kebab.local
        baseURL     = window.location.origin;       // Kebab Base URL (Auto detected)

    // Kebab is not defined!
    if (typeof Kebab === 'undefined') {

        /**
         * Kebab global object
         * @class Kebab
         * @singleton
         */
        global.Kebab = {

            /**
             * Kebab boot loader
             *
             * Example:
             *      Kebab.boot(
             *          'Kebab.desktop.Application',
             *          'http://static.kebab.local'
             *      );
             *
             * @param {String} application To load the Kebab's application name
             * @param {String} path The kebab's root path. The kebab root path. You can use the content delivery network (CDN)
             */
            boot: function(application, path) {
                var me = this;

                console.log(application + ' was booting...');

                me.setRoot(path || root);

                /**
                 * Ext loader configuration
                 */
                Ext.Loader.setConfig({
                    enabled: true,
                    paths: {
                        'Kebab'     : me.helper.root('kebab'),
                        'Ext.ux'    : me.helper.root('vendors/ext-4.0.7-gpl/examples/ux')
                    }
                });

                me.loadApplication(application);
                /**
                 * Get bootstrap data from server & check tenant
                 *
                 * If dont use multi-tenant support. Remove this request lines and run Kebab.loadApplication() method

                Ext.Ajax.request({
                    url: me.helper.url('tenants/bootstrap'),
                    method: 'GET',
                    success: function(response) {
                        var bootData = Ext.decode(response.responseText);

                        if (bootData.success && bootData.authenticity_token) {

                            me.setBootData(bootData);
                            me.loadApplication(application);

                        } else {
                            window.location.href = Kebab.getBaseURL() + '/404.html?not_registered';
                        }
                    },
                    failure: function() {
                        window.location.href = Kebab.getBaseURL() + '/404.html?not_registered';
                    }
                });*/
            },

            /**
             * Load & launch application
             *
             * @param {String} application To load the Kebab's application name
             */
            loadApplication: function(application) {
                var me = this;

                Ext.require(application);
                me.setApplication(application);

                console.log(application + ' was loaded...');
            },

            /**
             * Get kebab environment
             * @return {String} Current kebab environment
             */
            getEnvironment: function() {
                return (window.location.search.match('(\\?|&)dev') !== null)
                    ? 'development' : 'production';
            },

            /**
             * Set kebab root path
             * @param {String} path The kebab's root path. The kebab root path. You can use the content delivery network (CDN)
             */
            setRoot: function(path) {
                root = path;
            },

            /**
             * Get kebab root path
             * @return {String} Return value is kebab's root path.
             */
            getRoot: function() {
                return root;
            },

            /**
             * Get kebab base url
             */
            getBaseURL: function() {
                return baseURL;
            },

            /**
             * Set boot data
             * @param {Object} data
             */
            setBootData: function(data) {
                bootData = data || {};
            },

            /**
             * Get boot data
             * @return bootData
             */
            getBootData: function() {
                return bootData;
            },

            /**
             * Set application instance
             * @param {Ext.app.Application} application
             */
            setApplication: function(application) {
                var me = this;
                me.application = application;
            },

            /**
             * Get the application instance or name value
             *
             * @param {Boolean} instance
             */
            getApplication: function(instance) {
                var me = this;
                return instance ? me.application : eval(me.application);
            },

            helper: {

                /**
                 * Root path helper
                 * @param path
                 */
                root: function(path) {
                    return path ? Kebab.getRoot() + '/' + path : Kebab.getRoot();
                },

                /**
                 * Generate full url
                 * @param url
                 */
                url: function(url) {
                    return Kebab.getBaseURL() + '/' + url;
                },

                /**
                 * Redirector helper
                 * @param url
                 */
                redirect: function(url) {
                    window.location.href = Kebab.helper.url(url);
                }
            },

            /**
             * Initialize test suite & execute all specs
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
        };
    }
})();