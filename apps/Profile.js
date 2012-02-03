/**
 * @class Desktop
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop
 */
Ext.define('Apps.Profile', {
    extend: 'Ext.app.Application',

    /**
     * Application Id
     */
    id: 'Profile',

    /**
     * Application namespace
     */
    name: 'Apps.profile',

    /**
     * Application root folder
     */
    appFolder: Kebab.helper.root('apps/profile'),

    /**
     * Application Config
     */
    config: {
        runningMode: 'single',
        constrainTo: null,
        animateTarget: null
    },

    /**
     * Application viewport auto create property
     * @type Boolean
     */
    autoCreateViewport: false,

    /**
     * Application references and selectors
     * @type Array
     */
    refs: [{
        ref: 'viewport',
        selector: 'profile_viewport'
    }],

    /**
     * Application Controllers
     * @type Array
     */
    controllers: [
        'Test'
    ],

    /**
     * Application locales
     * @type {Array}
     */
    requires: [
        'Apps.profile.config.Config',
        'Apps.profile.locale.I18n',
        'Apps.profile.view.Viewport',  // TODO change load xhr to dom
    ],

    /**
     * Application constructor
     */
    constructor: function(config) {
        var me = this;

        me.initConfig(config);

        // Load application resources if single mode
        Kebab.helper.loadCSS([me.appFolder + '/resources/css/style.css']);

        // Call parent constructor
        me.callParent(arguments);
    },

    /**
     * Application after launch method
     * @return void
     */
    launch: function() {
        var me = this;

        Ext.create('Apps.profile.view.Viewport', {
            closeAction: 'hide',
            animateTarget: me.getAnimateTarget() ? me.getAnimateTarget() : Ext.getBody(),
            constrainTo: me.getConstrainTo() ? me.getConstrainTo() : Ext.getBody(),
            application: me
        });

        if (me.getRunningMode() == 'single') {
            Ext.create('Kebab.Launcher', {
                style: 'cursor: pointer;',
                renderTo: Ext.getBody(),
                margin: 10,
                size: 96,
                tooltip: Apps.profile.I18n.t('appTitle'),
                launcher: {
                    appId: 'Profile'
                },
                listeners: {
                    render: function(cp) {
                        var vp = me.getViewport();
                        vp.animateTarget = cp.id;
                        vp.doClose = function ()  {
                            vp.hide();
                        };
                        cp.getEl().on('click', function() {
                            var vp = me.getViewport();
                            vp.show();
                        });
                    }
                }
            });
        }

        console.log('Apps.Profile was launched...');
    }
});
