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
     *
     * @param {Object} global The DOM object
     * @param {String} booting Boot data registering flag. Set "remote" or "local". Default "remote"
     * @param {Object} bootData Current boot data. Set for after registering request.
     * @param {String} global Cdn & root path, for example: http://static.kebab.local
     * @param {String} global Base URL (if blank: Auto detected)
     */
    var global          = this,
        defaultBootType = "remote",
        bootData        = {},
        root            = "",
        baseURL         = "";

    // Kebab is not defined!
    if (typeof Kebab === 'undefined') {

        /**
         * Kebab global object
         * @class Kebab
         * @singleton
         */
        global.Kebab = {

            /**
             * System boot flag
             *
             * @type {Boolean}
             */
            bootStatus: false,

            /**
             * Kebab boot loader
             *
             * Load
             *
             * Example:
             *  Kebab.boot(
             *      'Kebab.desktop.Application',
             *      'http://static.kebab.local'
             *  );
             *
             * @param {String} application To load the Kebab's application name
             * @param {String} path The kebab's root path. The kebab root path. You can use the content delivery network (CDN)
             * @param {String} bootType The kebab's booting type. Set "remote" or "local". Default "remote"
             */
            boot: function(application, path, bootType) {
                var me = this;

                // Set kebab booting type
                me.setBootType(bootType || defaultBootType);

                // Check booting status
                if (!me.bootStatus) {

                    // Dependency check
                    if (typeof Ext === 'undefined') {
                        me.helper.redirect('500.html?extjs_required');
                    }

                    console.log(application + ' was booting...');

                    // Set root path
                    me.setRoot(path || root);

                    // Load core resources
                    me.helper.loadCSS('resources/css/kernel.css');

                    // Ext loader configuration
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

                    // Get bootstrap data
                    me.requestBootstrap(application);

                } else {
                    console.warn('System already booted...');
                }

            },

            /**
             * Get bootstrap data from server & check tenant.
             * If dont use multi-tenant support. set bootType is "local"
             * @param {String} application Application name
             */
            requestBootstrap: function(application) {
                var me = this,
                    requestURL = Kebab.helper.bootType('remote')
                                    ? me.helper.url('tenants/bootstrap') : me.helper.root('seeds/boot-data.json');

                Ext.Ajax.request({
                    url: requestURL,
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
                        //me.helper.redirect('500.html');
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

                // Check booting status
                if (!me.bootStatus) {

                    // Set all data proxy requests global token parameter eg: &authenticity_token=123456
                    Ext.Ajax.extraParams = {
                        authenticity_token: me.helper.bootData('authenticity_token')
                    };

                    // Load Ext JS focale file
                    me.helper.loadJS(Ext.util.Format.format(
                        'vendors/ext-4.0.7-gpl/locale/ext-lang-{0}.js',
                        me.helper.bootData('locale').default_locale || 'en' // Default en
                    ));

                    // Require applicatiom
                    Ext.require(application);

                    // Set application
                    me.setApplication(application);

                    // Set boot status flag
                    me.bootStatus = true;

                    console.log(application + ' was loaded...');
                } else {
                    console.warn(me.getApplication(true) + ' already loaded...');
                }
            },

            /**
             * Set kebab boot type
             * @param {String} type The kebab boot type.
             */
            setBootType: function(type) {
                bootType = type;
            },

            /**
             * Get kebab boot type
             * @return {String} Return value is kebab's boot type
             */
            getBootType: function() {
                return bootType;
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

                /**
                 * Boot type helper
                 * Get boot type value
                 *
                 * @param {String} type Boot type "remote" or "local"
                 * @return {String/Boolean} bootData Remote or local or true/false
                 */
                bootType: function(type) {
                    return type ? (Kebab.getBootType() == type) : Kebab.getBootType();
                },

                /**
                 * Notification helper
                 *
                 * @param {String} title
                 * @param {String} msg
                 * @param {String} type
                 */
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
                 * Javascript loader helper
                 * Load js file(s) from document head
                 *
                 * @param {String} arguments
                 */
                loadJS: function() {
                    var docHead = Ext.getHead(),
                        scriptCount = arguments.length,
                        loadedCount = 0;

                    for(var js in arguments) {
                        var scriptTag = document.createElement('script');
                        scriptTag.type = 'text/javascript';
                        scriptTag.src = Kebab.helper.root(arguments[js]);
                        docHead.appendChild(scriptTag);
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

                // Load jasmine js files
                me.helper.loadJS(
                    'vendors/jasmine-1.1.0/jasmine.js',
                    'vendors/jasmine-1.1.0/jasmine-html.js'
                );

                // TODO load specs

                // Load jasmine css file
                me.helper.loadCSS('vendors/jasmine-1.1.0/jasmine.css');

                Ext.defer(function() {

                    // Dependency check
                    if (typeof jasmine === 'undefined') {
                        //me.helper.redirect('500.html?jasmine_required');
                    } else {

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

                }, 200);
            }
        };
    }
})();