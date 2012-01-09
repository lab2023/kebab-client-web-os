/**
 * @class Desktop
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop
 */
Ext.define('Kebab.Login', {
    extend: 'Ext.app.Application',

    /**
     * Application mixins
     *
     * @type {Object}
     */
    mixins: {
        i18n: 'Kebab.kernel.I18n'
    },

    /**
     * Application namespace
     */
    name: 'Kebab.login',

    /**
     * Application root folder
     */
    appFolder: Kebab.helper.root('kebab/login'),

    /**
     * Application viewport auto create property
     * @type {Boolean}
     */
    autoCreateViewport: true,

    /**
    * Application locales
    * @type {Array}
    */
    requires: [
        'Kebab.login.locale.I18n'
    ],

    /**
     * Application References and selectors
     * @type {Array}
     */
    refs: [{
        ref: 'viewport',
        selector: 'login_viewport'
    }],

    /**
     * Application Controllers
     * @type {Array}
     */
    controllers: [
        'Index',
        'SignIn',
        'PasswordReset'
    ],

    /**
     * Application constructor
     */
    constructor: function() {
        var me = this;

        // Load application resources
        Kebab.helper.loadCSS('resources/css/login.css');

        // TODO: Set default wallpaper
        // Kebab.helper.loadWallpaper('');

        // Call parent constructor
        me.callParent(arguments);
    },

    /**
     * Application after launch method
     * @return void
     */
    launch: function() {
        console.log('Kebab.Login was launched...');
    }
});
