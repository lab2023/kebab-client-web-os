/**
 * @class Kebab
 * @singleton
 */
var Kebab = Kebab || {};
(function() {
    var me = Kebab,
        bootstrap = {
            root:  "os"
        },
        extJs = {
            version: "4.1.0-beta-2",
            path: "ext-4.1.0-beta-2",
            theme: "ext-all-gray"
        };

    // Build kebab methods
    Ext.apply(Kebab, {

        /**
         * Kebab Version
         * @type {String}
         */
        version: '1.0.0.dev',

        /**
         * Kebab Translations
         * @type {Object}
         */
        translations: {},

        /**
         * Active application
         * @type {Ext.app.Application/Kebab.kernel.app.Application}
         */
        application: {},

        /**
         * Set bootstrap data
         * @param {Object} config
         */
        setBootstrap: function(config) {
            Ext.apply(bootstrap, config || {});
        },

        /**
         * Set translations data
         * @param {Object} data
         */
        setTranslations: function(data) {
            Ext.apply(me.translations, data);
        },

        /**
         * Set application instance
         * @param {String} application
         */
        setApplication: function(application) {
            me.application = application;
        },

        /**
         * Get application instance
         *
         * @return {Object} Ext.app.Application
         */
        getApplication: function() {
            return me.application
        },

        /**
         * Get bootstrap data
         * @param {String}key
         */
        getBootstrap: function(key) {
            return key ? bootstrap[key] : bootstrap;
        },

        /**
         * Get system translations
         * @return {Object}
         */
        getTranslations: function() {
            return me.translations;
        },

        /**
         * Get current locale
         * Priority order: url > server > default
         *
         * @return {String}
         */
        getLocale: function() {
            return Ext.urlDecode(window.location.search).locale || Kebab.getBootstrap('locale')['default_locale'] || "en";
        },

        /**
         * Get system environment
         * @return {String} Current client/server environment
         */
        getEnv: function() {
            if ((window.location.search.match('(\\?|&)dev') !== null)) { // Client env
                return 'development';
            } else {
                return Kebab.getBootstrap('env'); // Server env
            }
        },

        /**
         * Get system root
         * @param {String} path
         */
        getRoot: function(path) {
            var root = Kebab.getBootstrap('root') || '',
                ps = root == '' ? '' : '/'; // Path separator

            return path ? Ext.String.format('{0}{1}{2}', root, ps, path) : root;
        },

        /**
         * Get system base url
         */
        getBaseURL: function() {
            return me.getBootstrap('baseURL') ?
                me.getBootstrap('baseURL') : Ext.String.format('{0}//{1}', window.location.protocol, window.location.hostname)
        },

        /**
         * Get ExtJS configurations
         * @param {String} key
         */
        getExtJs: function(key) {
            return key ? extJs[key] : extJs;
        },

        /**
         * Initialize test suite & execute all specs
         *
         * @private
         */
        _runTests: function() {

            // Load jasmine js files
            Kebab.AssetHelper.loadJS(
                'vendors/jasmine-1.1.0/jasmine.js',
                'vendors/jasmine-1.1.0/jasmine-html.js'
            );

            // TODO load specs

            // Load jasmine css file
            Kebab.AssetHelper.loadCSS('vendors/jasmine-1.1.0/jasmine.css');

            Ext.defer(function() {

                // Dependency check
                if (typeof jasmine === 'undefined') {
                    Kebab.AssetHelper.redirect('500.html?jasmine_required');
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
    });

    // Ext Loader configuration
    Ext.Loader.setConfig({
        enabled: true,
        paths: {
            'Kebab' : Kebab.getRoot('kebab'),
            'Apps' : Kebab.getRoot('apps'),
            'Ext.ux' : Kebab.getRoot('vendors/ext-ux')
        }
    });

    // Require kebab kernel initializer
    Ext.require('Kebab.kernel.Initializer');

    console.log('Kebab ready!');
})();