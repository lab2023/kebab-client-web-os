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
     * Kebab base settings
     * TODO jsdoc
     */
var global   = this,        // DOM root
        bootData = {        // Current tenant data. IF not use tenant setup this object manually
            authenticity_token : 'your_token_here',
            tenant: {
                id: 0,
                name: 'lab2023 - internet technologies',
                host: 'default.kebab.local'
            },
            locale: {
               default_locale: 'tr',
               available_locales: ['en', 'tr', 'ru']
            }
        },
        root    = '',       // Cdn & root path, for example: http://static.kebab.local
        baseURL = '';       // Base URL (if blank: Auto detected)

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
             * Load
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

                // Set root path
                me.setRoot(path || root);

                // Load core resources
                me.helper.loadCSS('resources/css/kernel.css');

                /**
                 * Ext loader configuration
                 */
                Ext.Loader.setConfig({
                    enabled: true,
                    paths: {
                        'Kebab' : me.helper.root('kebab'),
                        'Apps' : me.helper.root('apps'),
                        'Ext.ux' : me.helper.root('vendors/ext-ux')
                    }
                });

                // Require kebab kernel classes
                Ext.require('Kebab.kernel.Base');

                me.loadApplication(application);
                return;

                /**
                 * Get bootstrap data from server & check tenant
                 *
                 * If dont use multi-tenant support.
                 * Remove this request lines and run direct Kebab.loadApplication(application) method
                 */
                Ext.Ajax.request({
                    url: me.helper.url('tenants/bootstrap'),
                    method: 'GET',
                    success: function(response) {
                        var bootData = Ext.decode(response.responseText);

                        if (bootData.success && bootData.authenticity_token) {

                            me.setBootData(bootData);
                            me.loadApplication(application);

                        } else {
                            me.helper.redirect('404.html?not_registered')
                        }
                    },
                    failure: function() {
                        me.helper.redirect('500.html');
                    }
                });

            },

            /**
             * Load & launch application
             *
             * @param {String} application To load the Kebab's application name
             */
            loadApplication: function(application) {
                var me = this;

                // Set all data proxy requests global token parameter eg: &authenticity_token=123456
                Ext.Ajax.extraParams = {
                    authenticity_token: me.helper.bootData('authenticity_token')
                };

                // Require applicatiom
                Ext.require(application);

                // Set application
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
             * @return {String} Return value is kebab's root path
             */
            getRoot: function() {
                return root;
            },

            /**
             * Get kebab base url
             */
            getBaseURL: function() {
                return baseURL ?
                    baseURL : window.location.protocol + '//' + window.location.hostname;
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
             *
             * @param {String} key Get the boot data key
             * @return {Object/String} bootData
             */
            getBootData: function(key) {
                return key ? bootData[key] : bootData;
            },

            /**
             * Set application instance
             * @param {String} application
             */
            setApplication: function(application) {
                var me = this;
                me.application = application;
            },

            /**
             * Get the application instance or name value
             *
             * @param {Boolean} instance
             * @return {String/Ext.app.Application}
             */
            getApplication: function(instance) {
                var me = this;
                return instance ? me.application : eval(me.application);
            },

            /**
             * Kebab helpers
             */
            helper: {

                /**
                 * Root path helper
                 * Get the generated full root path
                 *
                 * @param path
                 * @return {String} Generated full root path
                 */
                root: function(path) {
                    var ps = Kebab.getRoot() == '' ? '' : '/'; // Path seperator
                    return path ? Kebab.getRoot() + ps + path : Kebab.getRoot();
                },

                /**
                 * Generate full url
                 * Get the generated full url (baseUrl + url)
                 *
                 * @param url
                 * @return {String} Generated full url
                 */
                url: function(url) {
                    return url ? Kebab.getBaseURL() + '/' + url : Kebab.getBaseURL();
                },

                /**
                 * Redirector helper
                 * Redirect page any url
                 *
                 * @param url
                 */
                redirect: function(url) {
                    window.location.href = Kebab.helper.url(url);
                },

                /**
                 * Application helper
                 * Get application name or instance
                 *d
                 * @param {Boolean} instance If set true return the application name
                 * @return {String/Ext.app.Application}
                 */
                application: function(instance) {
                    return Kebab.getApplication(instance);
                },

                /**
                 * Bootdata helper
                 * Get bootData object or value
                 *
                 * @param {String} key Get the boot data key
                 * @return {Object/String} bootData
                 */
                bootData: function(key) {
                    return Kebab.getBootData(key);
                },

                notify: function(title, msg, type) {

                    Ext.create('Ext.ux.window.Notification', {
                        corner: 'tr',
                        paddingX: 15,
                        paddingY: 50,
                        slideInDelay: 800,
                        slideDownDelay: 1500,
                        autoDestroyDelay: 4000,
                        resizable: false,
                        slideInAnimation: 'elasticIn',
                        slideDownAnimation: 'elasticIn',
                        cls: 'kebab-notification',
                        autoShow: true,
                        iconCls: !Ext.isDefined(type) ? 'icon-info' : 'icon-' + type,
                        title: title || 'Notification',
                        html: msg || 'Lorem ipsum dolor sit amet'
                    });
                },

                /**
                 * Stylesheet loader helper
                 * Load css file(s) from document head
                 *
                 * @param {String} arguments
                 */
                loadCSS: function() {
                    var docHead = Ext.getHead();

                    for(var css in arguments) {
                        Ext.DomHelper.append(
                            docHead, {
                                tag: 'link',
                                type: 'text/css',
                                rel: 'stylesheet',
                                href: Kebab.helper.root(arguments[css])
                            }
                        );
                    }
                },

                /**
                 * Wallpaper helper
                 * Change the body wallpaper
                 *
                 * @param {String} img
                 */
                loadWallpaper: function(img) {
                    var imgUrl = Kebab.helper.root('resources/wallpapers/' + img);
                    Ext.getBody().setStyle({
                        backgroundImage: 'url( ' + imgUrl + ')',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed'
                    });
                }
            },

            /**
             * Initialize test suite & execute all specs
             *
             * @private
             */
            _runTests: function() {
                var me = this;

                // TODO: Load jasmine javsacript files

                // Load jasmine css file
                me.helper.loadCSS('vendors/jasmine-1.1.0/jasmine.css');

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