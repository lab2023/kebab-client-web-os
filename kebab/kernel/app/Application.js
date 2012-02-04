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
     * Application viewport auto create property
     * @type Boolean
     */
    autoCreateViewport: false,

    autoLoadCssFile: true,

    /**
     * Application constructor
     * @param config
     */
    constructor: function(config) {
        var me = this;

        me.initConfig(config);

        // Base required classes
        Ext.require([
            'Apps.' + me.id.toLowerCase() + '.config.Config',
            'Apps.' + me.id.toLowerCase() + '.locale.I18n',
            'Apps.' + me.id.toLowerCase() + '.view.Viewport'
        ]);

        Ext.apply(me, {
            name: 'Apps.' + me.id.toLowerCase(),
            appFolder: Kebab.helper.root('apps/' + me.id.toLowerCase())
        });

        var cssFiles = [];
        // Load application css resources if exist
        if (me.cssFiles && me.cssFiles.length > 0) {
            Ext.each(me.cssFiles, function(cssFile) {
                cssFiles.push('apps/' + me.id.toLowerCase() + '/resources/css/' + cssFile)

            });
            Kebab.helper.loadCSS(cssFiles);
        }

        me.callParent(arguments);
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
                tooltip: eval("Apps." + me.id.toLowerCase() + ".I18n.t('appTitle')"),
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

        console.log('Apps. ' + me.id + ' was launched...');
    }
});