/**
 * Kebab Desktop Application
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
     * @type Boolean
     */
    autoCreateViewport: false,

    /**
     * Application requires
     * @type {Array}
     */
    requires: [
        'Kebab.config.Desktop',
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
        'Session',
        'System',
        'desktop.Index',
        'desktop.Menu',
        'desktop.Dock',
        'desktop.Application',
        'desktop.Launchpad',
        'desktop.User'
    ],

    /**
     * Application constructor
     */
    constructor: function() {
        var me = this;

        // User authorization control
        if (!Kebab.getBootstrap('user')) {
            Kebab.URLHelper.redirect('index.html?authorization_required');
        }

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
        Kebab.AssetHelper.loadWallpaper(Kebab.DesktopConfig.getWallpaper());

        // Create viewport
        Ext.widget('viewport', {
            items: [{
                xtype: 'desktop_index'
            }]
        });

        // Share app for Kebab
        Kebab.setApplication(me);

        console.log('Kebab.Desktop was launched...');
    }
});
