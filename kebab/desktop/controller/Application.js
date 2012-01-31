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
        appZIndexManager: Ext.WindowManager
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
                close: me.closeApplication, // App viewport close and exit
                render: me.applicationViewportRender, // App viewport Ready
                activate: me.applicationViewportActivate, // Bring to front app viewport
                minimize: me.applicationViewportMinimize, // Minimize app viewport
                deactivate: function() {
                    console.log('deactivated'); // TODO
                }
            }
        });

        // Call parent
        me.callParent(arguments);
    },

    /**
     * Launch  application
     * @param cp
     */
    launchApplication: function(cp, e) {
        var me = this,
            appId = cp.launcher.appId,
            appClassName = 'Apps.' + cp.launcher.appId,
            activeApp = me.getApplication(appId);

        // dblclick can call again...
        e.stopEvent();

        if(!activeApp) {

            console.warn('NEW');

            // Add launcher button to dock
            var launcher = me.getController('Dock').addLauncher({
                tooltip: 'Loading...',
                disabled: true,
                iconCls: appId.toLowerCase() + '-launcher',
                cls: 'x-over',
                launcher: {
                    appId: appId
                }
            });

            try {
                // Create and auto launch application
                var application = Ext.create(appClassName, {
                    params: cp.launcher.params,
                    runningMode: 'multi',
                    animateTarget: cp.id,
                    constrainTo:'desktop-index-body'
                });

                // Add managers after launch
                me.getAppManager().add(application);
            } catch (e) {
                Kebab.helper.notify('Application not launched...', 'Error', true);
                me.getController('Dock').removeLauncher(appId);
            }

        } else {
            console.warn('SHOW: ' + activeApp.getViewport().title);
            activeApp.getViewport().show();
        }

    },

    /**
     * Get application
     * @param appId
     */
    getApplication: function(appId) {
        var me = this;
        return me.getAppManager().get(appId);
    },

    /**
     * Get application viewports
     * @param appId
     */
    getApplicationViewports: function() {
        var me = this,
            appViewports = [];
        me.getAppZIndexManager().each(function(viewport) {
            if (viewport.appViewport) {
                appViewports.push(viewport)
            }
        });

        return appViewports;
    },

    /**
     * Exit application
     * @param vp
     */
    closeApplication: function(vp) {
        var me = this,
            app = vp.application;
            me.getController('Dock').removeLauncher(app.id);
            me.getController('Menu').getInfo().items.getAt(1).hide();
            vp.destroy();
            me.getAppManager().remove(app);
            console.warn('App destroyed');
    },

    /**
     * applicationViewportRender
     * @param vp
     */
    applicationViewportRender: function(vp) {
        var me = this,
            launcher = me.getController('Dock').getLauncher(vp.application.id);

        if (launcher) {
            launcher.enable();
            launcher.setTooltip(vp.title);
            launcher.getEl().highlight();
        }

        // replace normal window close fadeOut animation:
        vp.doClose = function ()  {
            vp.doClose = Ext.emptyFn; // dblclick can call again...
            vp.getEl().disableShadow();
            vp.getEl().fadeOut({
                callback: function() {
                    vp.fireEvent('close', vp);
                }
            });
        };

        // TODO animation bug
        Ext.defer(function() {
            Kebab.helper.notify('Application launched...', vp.title);
        }, 200);
    },

    /**
     * applicationViewportActivate
     * @param vp
     */
    applicationViewportActivate: function(vp) {
        var me = this;
        console.log('activated=' + vp.title);
        me.getController('Dock').activateLauncher(vp.application.id);
        me.getController('Menu').getInfo().items.getAt(1).show().setText(vp.title);
    },

    /**
     * applicationViewportActivate
     * @param vp
     */
    applicationViewportMinimize: function(vp) {
        var me = this,
            launcherId = me.getController('Dock').generateLauncherId(vp.application.id);
        vp.animateTarget = launcherId;
        vp.minimized = true;
        vp.hide();
    },

    /**
     *
     */
    hideAllApplicationViewports: function() {
        var me = this;

        Ext.each(me.getApplicationViewports(), function(viewport) {
            me.applicationViewportMinimize(viewport);
        });
    },

    cascadeApplicationViewports: function() {
        var me = this,
            x = 0, y = 0;

        me.getAppZIndexManager().eachBottomUp(function(vp) {
            if (vp.appViewport && vp.isWindow && vp.isVisible() && !vp.maximized) {
                vp.setPosition(x, y);
                x += 20;
                y += 20;
            }
        });
    },
});
