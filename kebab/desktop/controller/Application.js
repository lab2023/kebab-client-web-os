/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.desktop.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        appManager: Ext.create('Ext.util.MixedCollection'),
        appZIndexManager: Ext.create('Ext.ZIndexManager')
    },

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        // Init application config
        me.initConfig(arguments);

        me.control({
            // Listener launcher components
            'component[launcher]': {
                click: me.launchApplication
            },
            // Listener application viewports
            'component[appViewport]': {
                destroy: me.exitApplication,
                beforerender: me.applicationViewportBeforeRender,
                render: me.applicationViewportRender,
                show: function(vp) {
                    console.log('App window show');
                },
                hide: function(vp) {
                    var launcherBtn = me.getController('Dock').getLauncher(vp.application.id);

                    if (launcherBtn) {
                        launcherBtn.getEl().setStyle('font-weight', '400');
                    }
                    console.log('App window hide');
                }
            }
        });

        // Call parent
        me.callParent(arguments);
    },

    launchApplication: function(cp) {
        var me = this,
            appId = cp.launcher.appId,
            appClassName = 'Apps.' + cp.launcher.appId,
            appTitle = cp.text,
            appManager = me.getAppManager(),
            appZIndexManager = me.getAppZIndexManager(),
            activeApp = appManager.get(appId);

        if(!Ext.isDefined(activeApp)) {

            // Add launcher button to dock
            var launcherBtn = me.getController('Dock').addLauncher({
                id: appId + '-launcher',
                text: appTitle,
                disabled: true,
                launcher: {
                    appId: appId
                }
            });

            try { // Create and auto launch application
                Ext.create(appClassName, {
                    params: cp.launcher.params,
                    runningMode:'multi',
                    animateTarget:launcherBtn.id,
                    constrainTo:'desktop-index-body',
                    listeners:{
                        launch:function (app) {
                            // Add managers after launch
                            appManager.add(app);
                            launcherBtn.enable();
                            Kebab.helper.notify('Application launched...', appTitle);
                        }
                    }
                });
            } catch (e) {
                Kebab.helper.notify('Application not launched...', appTitle, true);
                me.getController('Dock').removeLauncher(appId);
            }

        } else {
            activeApp.getViewport().show();
        }

    },

    getApplication: function(appName) {
        var me = this;
        return me.getAppManager().get(appName);
    },

    exitApplication: function(wp) {
        var me = this,
            appId = wp.application.id,
            appManager = me.getAppManager(),
            appZIndexManager = me.getAppZIndexManager(),
            app = appManager.get(appId);

        if (app) {
            me.getController('Dock').removeLauncher(appId);
            appZIndexManager.unregister(wp);
            appManager.remove(app);
            app.destroy();
            delete(app);
        }
    },

    applicationViewportRender: function(vp) {
        var me = this,
            launcherBtn = me.getController('Dock').getLauncher(vp.application.id);

        if (launcherBtn) {
            launcherBtn.getEl().highlight();
        }

        // replace normal window close fadeOut animation:
        vp.doClose = function ()  {
            vp.doClose = Ext.emptyFn; // dblclick can call again...
            vp.getEl().disableShadow();
            vp.getEl().fadeOut({
                callback: function() {
                    vp.destroy();
                }
            });
        };
    },

    applicationViewportBeforeRender: function(vp) {
        var me = this;
        me.getAppZIndexManager().register(vp);
    },

    hideAll: function() {
        var me = this;
        me.getAppManager().hideAll();
    }
});
