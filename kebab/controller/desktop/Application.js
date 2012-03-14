/**
 * @class Application
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Application controller
 */
Ext.define('Kebab.controller.desktop.Application', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.util.MixedCollection'
    ],

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
            'component[action="showDesktop"]': {
                click: me.hideAllApplicationViewports
            },
            'component[action="cascadeApps"]': {
                click: me.cascadeApplicationViewports
            },
            // Listener for application viewports
            'component[appViewport]': {
                beforerender: me.applicationViewportBeforeRender,
                close: me.closeApplication, // App viewport close and exit
                render: me.applicationViewportRender, // App viewport Ready
                activate: me.applicationViewportActivate, // Bring to front app viewport
                minimize: me.applicationViewportMinimize // Minimize app viewport
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
            appClassName = Ext.String.format('Apps.{0}.Application', appId),
            activeApp = me.getApplication(appId);

        // TODO solve dblClick can call again...
        e.stopEvent();

        if (!cp.isDisabled()) { // dblClick can call again...

            if(!activeApp) { // TODO improve Ext.ClassManager.get

                cp.disable();

                // Add launcher button to dock
                me.getController('desktop.Dock').addLauncher({
                    xtype: 'kebab_launcher',
                    tooltip: 'Loading...',
                    launcher: {
                        appId: appId
                    }
                });

                try {
                    // Create and auto launch application
                    var application = Ext.create(appClassName, {
                        params: cp.launcher.params,
                        runningMode: 'multi',
                        animateTarget: cp.getEl(),
                        constrainTo:'desktop-index-body'
                    });

                    // Add managers after launch
                    me.getAppManager().add(application);

                    // Enable launcher component
                    Ext.defer(function(){
                        cp.enable()
                    }, 150);

                } catch (e) {
                    Kebab.NotifyHelper.msg('Application not launched...', 'Error');
                    me.getController('desktop.Dock').removeLauncher(appId);
                    if (cp.isDisabled()) {
                        cp.enable();
                    }
                }

            } else {
                activeApp.getViewport().show();
                if (cp.isDisabled()) {
                    cp.enable();
                }
            }
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
            me.getController('desktop.Dock').removeLauncher(app.id);
            me.getController('desktop.Menu').getInfo().items.getAt(1).hide(); // TODO move menu controller
            me.getAppManager().remove(app);
            app.destroy();
    },

    /**
     * desktop body constrain
     * App viewports is added to desktop body items
     *
     * @param vp {Ext.window.Window}
     */
    applicationViewportBeforeRender: function(vp) {
        var me = this;
        me.getController('desktop.Index').getIndex().add(vp);
    },

    /**
     * applicationViewportRender
     * @param vp
     */
    applicationViewportRender: function(vp) {
        var me = this,
            launcher = me.getController('desktop.Dock').getLauncher(vp.application.id);

        if (launcher) {
            launcher.setTooltip(Kebab.I18nHelper.t(vp.application.id + '.title')); // Set tooltip
            launcher.getEl().frame(); // Blink
            launcher.addCls('shakeIt'); // Shake it baby!
            Ext.defer(function() {
                launcher.removeCls('shakeIt'); // Stop shake fx
            },1200);
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

        vp.onEsc = function ()  {
            vp.onEsc = Ext.emptyFn; // dblclick can call again...
            vp.fireEvent('minimize', vp);
        };
    },

    /**
     * applicationViewportActivate
     * @param vp
     */
    applicationViewportActivate: function(vp) {
        var me = this;

        me.getController('desktop.Dock').activateLauncher(vp.application.id);

        // TODO move menu controller
        me.getController('desktop.Menu').getInfo().items.getAt(1).show().setText(vp.title);
    },

    /**
     * applicationViewportActivate
     * @param vp
     */
    applicationViewportMinimize: function(vp) {
        var me = this;
        vp.animateTarget = me.getController('desktop.Dock').generateLauncherId(vp.application.id);
        vp.minimized = true;
        vp.hide();
    },

    /**
     *
     * // TODO convert hideAll and change method name showDesktop and move Index controller
     */
    hideAllApplicationViewports: function() {
        var me = this;

        Ext.each(me.getApplicationViewports(), function(viewport) {
            me.applicationViewportMinimize(viewport);
        });

        // TODO move launchpad controller
        try {
            me.getController('desktop.Launchpad').getLaunchpad().hide();
        } catch (e) {
        }
    },

    cascadeApplicationViewports: function() {
        var me = this,
            x = 0,
            y = 0;

        me.getAppZIndexManager().eachBottomUp(function(vp) {
            if (vp.appViewport && vp.isWindow && vp.isVisible() && !vp.maximized) {
                vp.setPosition(x, y);
                x += 20;
                y += 20;
            }
        });
    }
});
