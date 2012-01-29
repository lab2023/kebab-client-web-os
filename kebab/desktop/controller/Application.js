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
                close: me.closeApplication, // Exit
                render: me.applicationViewportRender, // Ready
                activate: me.applicationViewportActivate // Bring to front
            }
        });

        // Call parent
        me.callParent(arguments);
    },

    /**
     * Launch  application
     * @param cp
     */
    launchApplication: function(cp) {
        var me = this,
            appId = cp.launcher.appId,
            appClassName = 'Apps.' + cp.launcher.appId,
            appManager = me.getAppManager(),
            appZIndexManager = me.getAppZIndexManager(),
            activeApp = appManager.get(appId);

        if(!activeApp) {

            console.warn('NEW');

            // Add launcher button to dock
            var launcher = me.getController('Dock').addLauncher({
                text: 'Loading...',
                disabled: true,
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
                appManager.add(application);

                application.on('launch', function() {
                    console.log('launch event fired: ' + appId);
                });
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
     * @param appName
     */
    getApplication: function(appName) {
        var me = this;
        return me.getAppManager().get(appName);
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
            me.getAppZIndexManager().unregister(vp);
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
        me.getAppZIndexManager().register(vp);

        if (launcher) {
            launcher.enable();
            launcher.setText(vp.title);
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

        Kebab.helper.notify('Application launched...', vp.title);
    },

    /**
     * applicationViewportActivate
     * @param vp
     */
    applicationViewportActivate: function(vp) {
        var me = this;
        console.log('activated=' + vp.title);
        me.getController('Dock').populateLaunchers(vp.application.id);
        me.getController('Menu').getInfo().items.getAt(1).show().setText(vp.title);
    },

    /**
     *
     */
    hideAll: function() {
        var me = this;
        me.getAppManager().hideAll();
    }
});
