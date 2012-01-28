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
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        // Call parent
        me.callParent(arguments);
    },

    addLauncher: function(launcherBtn) {
        var me = this;

        if (!me.getDock().items.get(launcherBtn.id))
            me.getDock().add(launcherBtn);

        return me.getDock().items.get(launcherBtn.id);
    },

    removeLauncher: function(appId) {
        var me = this,
            launcherBtn = me.getDock().items.get(appId + '-launcher');

        if (!launcherBtn.launcher.pinned && launcherBtn) {
            me.getDock().remove(launcherBtn);
        }
    },

    getLauncher: function(appId) {
        var me = this;
        return me.getDock().items.get(appId + '-launcher');
    },

    findLauncher: function(key, value) {
        var me = this;
        return me.getDock().items.filter(key, value);
    }
});
