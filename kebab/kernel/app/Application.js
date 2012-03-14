/**
 * @class Application
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel Application class
 */
Ext.define('Kebab.kernel.app.Application', {
    extend: 'Ext.app.Application',

    /**
     * Application Config
     */
    config: {
        runningMode: 'single',
        constrainTo: null,
        animateTarget: null
    },

    /**
     * Application config class auto create property
     */
    autoCreateConfig: true,

    /**
     * Application viewport auto create property
     * @type Boolean
     */
    autoCreateViewport: false,

    /**
     * Application constructor
     * @param config
     */
    constructor: function(config) {
        var me = this,
            appNamespace = me.id;

        me.initConfig(config);

        // Base required classes
        var classes = [
            'Apps.' + appNamespace + '.view.Viewport'
        ];
        if (me.autoCreateConfig) {
            classes.push('Apps.' + appNamespace + '.config.Config')
        }
        Ext.require(classes);

        Ext.apply(me, {
            name: 'Apps.' + appNamespace,
            appNamespace: appNamespace,
            appFolder: Kebab.getRoot('apps/' + appNamespace)
        });

        var cssFiles = [];
        // Load application css resources if exist
        if (me.cssFiles && me.cssFiles.length > 0) {
            Ext.each(me.cssFiles, function(cssFile) {
                cssFiles.push('apps/' + appNamespace + '/resources/css/' + cssFile)

            });
            Kebab.AssetHelper.loadCSS(cssFiles);
        }

        me.callParent(arguments);

        // Set EventBus id
        this.eventbus.appId = me.id;
    },

    /**
     * Application after launch method
     * @return void
     */
    launch: function() {
        var me = this;

        Ext.create(me.name + '.view.Viewport', {
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
                tooltip: Kebab.I18nHelper.t(me.appNamespace + '.title'),
                launcher: {
                    appId: me.id
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

        console.log('Apps.' + me.id + '.Application was launched...');
    },

    /**
     * Remove all events and destroy all views
     */
    destroy: function() {
        var me = this;

        // Remove all listeners
        var bus = Kebab.EventBusManager.getBusManager().filter('appId', me.id).first();
        Kebab.EventBusManager.getBusManager().remove(bus);

        // Destroy viewport
        me.getViewport().destroy();
    }
});