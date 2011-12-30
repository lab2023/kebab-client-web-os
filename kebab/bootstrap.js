/* -----------------------------------------------------------------------------
 Kebab Project 2.x (Kebab Revolution) - Web OS Client Platform for Ext JS 4.x
 http://kebab-project.com
 Copyright (c) 2011-2012 lab2023 - internet technologies TURKEY Inc.
 http://www.lab2023.com
----------------------------------------------------------------------------- */

/**
 * Prepare environment, enable loader an boot kebab automatically
 *
 * @class Kebab
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
         */
        global.Kebab = {

            /**
             * Kebab boot loader
             */
            boot: function(application, cdn) {
                var me = this;

                console.log(application + ' was booting...');

                me.setRoot(cdn || root);

                /**
                 * Ext loader configuration
                 */
                Ext.Loader.setConfig({
                    enabled: true,
                    paths: {
                        'Kebab' : me.getRoot() + 'kebab',
                        'Ext.ux' : me.getRoot() + 'vendors/ext-4.0.7-gpl/examples/ux'
                    }
                });

                /**
                 * Get bootstrap data from server & check tenant
                 *
                 * If dont use multi-tenant support. Remove this request lines and run Kebab.loadApplication() method
                 */
                Ext.Ajax.request({
                    url: 'tenants/register',
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
                });
            },

            /**
             * Load & launch application
             */
            loadApplication: function(application) {
                var me = this;

                Ext.require(application);
                me.setApplication(application);

                console.log(application + ' was loaded...');
            },

            /**
             * Get kebab environment
             */
            getEnvironment: function() {
                return (window.location.search.match('(\\?|&)dev') !== null)
                    ? 'development' : 'production';
            },

            /**
             * Set kebab root path
             */
            setRoot: function(cdn) {
                root = cdn;
            },

            /**
             * Get kebab root path
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
             * @param data Object
             */
            setBootData: function(data) {
                bootData = data || {};
            },

            /**
             * Get boot data
             */
            getBootData: function() {
                return bootData;
            },

            /**
             * Set application instance
             * @param application Ext.app.Application
             */
            setApplication: function(application) {
                var me = this;
                me.application = application;
            },

            /**
             * Get the application instance or name value
             *
             * @param instance Boolean
             */
            getApplication: function(instance) {
                var me = this;
                return instance ? me.application : eval(me.application);
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