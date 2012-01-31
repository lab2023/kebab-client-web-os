/**
 * @class Desktop
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop
 */
Ext.define('Kebab.Desktop', {
    extend: 'Ext.app.Application',

    /**
     * Application namespace
     */
    name: 'Kebab.desktop',

    /**
     * Application root folder
     */
    appFolder: Kebab.helper.root('kebab/desktop'),

    /**
     * Application viewport auto create property
     * @type Boolean
     */
    autoCreateViewport: true,

    /**
     * Application locales
     * @type {Array}
     */
    requires: [
        'Kebab.desktop.locale.I18n'
    ],

    /**
     * Application references and selectors
     * @type Array
     */
    refs: [{
        ref: 'viewport',
        selector: 'desktop_viewport'
    }],

    /**
     * Application Controllers
     * @type Array
     */
    controllers: [
        'Index',
        'Menu',
        'Dock',
        'Application',
        'Launchpad',
        'User'
    ],

    /**
     * Application constructor
     */
    constructor: function() {
        var me = this;

        // Init application config
        me.initConfig(arguments);

        // User authorization control
        if (!Kebab.helper.config('user')) {
            Kebab.helper.redirect('login.html?authorization_required');
        }

        // Load application resources
        Kebab.helper.loadCSS(['resources/css/desktop.css']);

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
        var me = this;

        Kebab.helper.notify(
            Kebab.desktop.I18n.t('welcome'),
            Kebab.desktop.I18n.t('hello', Kebab.helper.config('user').name)
        );

        console.log('Kebab.Desktop was launched...');
    }
});
