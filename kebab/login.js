/**
 * Kebab Login Application
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 */
Ext.application({
    /**
     * Application namespace
     */
    name: 'Kebab',

    /**
     * Application root folder
     */
    appFolder: Kebab.getRoot('kebab'),

    /**
     * Application viewport auto create property
     * @type {Boolean}
     */
    autoCreateViewport: false,

    /**
     * Application requires
     * @type {Array}
     */
    requires: [
        'Kebab.config.Login',
        'Kebab.view.Viewport'
    ],

    /**
     * Application references and selectors
     * @type Array
     */
    refs: [{
        ref: 'viewport',
        selector: 'viewport'
    }],

    /**
     * Application Controllers
     * @type Array
     */
    controllers: [
        'System',
        'login.Index',
        'login.PasswordReset',
        'login.SignIn'
    ],

    /**
     * Application constructor
     */
    constructor: function() {
        var me = this;

        // Call parent constructor
        me.callParent(arguments);
    },

    /**
     * Application after launch method
     * @return void
     */
    launch: function() {
        var me = this;

        // Load wallpaper
        Kebab.AssetHelper.loadWallpaper(Kebab.LoginConfig.getWallpaper());

        // Create viewport
        Ext.widget('viewport', {
            items: [{
                xtype: 'login_index'
            }]
        });

        // Share app for Kebab
        Kebab.setApplication(me);

        console.log('Kebab.Login was launched...');
    }
});
