/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.controller.desktop.Dock', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'desktop.Dock'
    ],

    refs: [{
        ref: 'dock',
        selector: 'desktop_dock'
    },{
        ref: 'launchpadButton',
        selector: 'desktop_dock component[action="showLaunchpad"]'
    },{
        ref: 'applicationsLauncher',
        selector: 'desktop_dock button[applicationsLauncher]'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

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

        if (!me.getDock().items.get(launcherData.id)) {
            me.getDock().add(launcherData);
        }

        return me.getDock().items.get(launcherData.id);
    },

    /**
     *
     * @param appId
     */
    removeLauncher: function(appId) {
        var me = this,
            launcherCp = me.getDock().items.get(me.generateLauncherId(appId));

        if (!launcherCp.keepDock && launcherCp) {
            launcherCp.getEl().fadeOut({
                duration: 200,
                callback: function() {
                    me.getDock().remove(launcherCp);
                }
            });
        } else {
            me.deactivateLauncher(launcherCp);
        }
    },

    /**
     *
     * @param appId
     */
    activateLauncher: function(appId) {
        var me = this,
            launcherCp = me.getLauncher(appId);

        me.getLaunchers().each(function(launcher) {
            if (!launcher.applicationsLauncher) {
                me.deactivateLauncher(launcher);
            }
        });
        launcherCp.addClsWithUI('active');
    },

    /**
     *
     * @param launcherCp
     */
    deactivateLauncher: function(launcherCp) {
        launcherCp.removeClsWithUI('active');
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
        return id + '-launcher';
    }
});
