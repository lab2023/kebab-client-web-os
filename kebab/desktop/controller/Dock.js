/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.desktop.controller.Dock', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'Dock'
    ],

    refs: [{
        ref: 'dock',
        selector: 'desktop_dock'
    },{
        ref: 'applicationsLauncher',
        selector: 'desktop_dock button[applicationsLauncher]'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        me.control({
            // Listener launcher components
            'button[showDesktop]': {
                click: function() {
                    me.getController('Application').hideAllApplicationViewports();
                }
            },
        });

        // Call parent
        me.callParent(arguments);
    },

    /**
     *
     * @param data
     */
    addLauncher: function(data) {
        var me = this,
            launcherData = Ext.apply(data, {
                id: me.generateLauncherId(data.launcher.appId)
            });

        if (!me.getDock().items.get(launcherData.id))
            me.getDock().add(launcherData);

        return me.getDock().items.get(launcherData.id);
    },

    /**
     *
     * @param appId
     */
    removeLauncher: function(appId) {
        var me = this,
            launcher = me.getDock().items.get(me.generateLauncherId(appId));

        if (!launcher.pinned && launcher) {
            me.getDock().remove(launcher);
        } else {
            me.deactivateLauncher(launcher);
        }
    },

    /**
     *
     * @param appId
     */
    activateLauncher: function(appId) {
        var me = this,
            launcher = me.getLauncher(appId);

        me.getLaunchers().each(function(launcher) {
            if (!launcher.applicationsLauncher) {
                me.deactivateLauncher(launcher);
            }
        });
        launcher.addClsWithUI('dock-launcher-activated');
    },

    /**
     *
     * @param launcher
     */
    deactivateLauncher: function(launcher) {
        launcher.removeClsWithUI('dock-launcher-activated');
    },

    /**
     * getLauncher
     * @param appId
     */
    getLauncher: function(appId) {
        var me = this;
        return me.getDock().items.get(me.generateLauncherId(appId));
    },

    /**
     * getLaunchers
     */
    getLaunchers: function() {
        var me = this;
        return me.getDock().items;
    },

    /**
     * findLauncher
     * @param key
     * @param value
     */
    findLauncher: function(key, value) {
        var me = this;
        return me.getDock().items.filter(key, value);
    },

    /**
     * generateLauncherId
     * @param id
     */
    generateLauncherId: function(id) {
        return id.toLowerCase() + '-launcher';
    }
});
