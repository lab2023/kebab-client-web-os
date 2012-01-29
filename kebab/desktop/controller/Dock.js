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

        // Call parent
        me.callParent(arguments);
    },

    /**
     *
     * @param data
     */
    addLauncher: function(data) {
        var me = this,
            launcher = Ext.apply(data, {
                id: me.generateId(data.launcher.appId)
            });

        if (!me.getDock().items.get(launcher.id))
            me.getDock().add(launcher);

        return me.getDock().items.get(launcher.id);
    },

    /**
     *
     * @param appId
     */
    removeLauncher: function(appId) {
        var me = this,
            launcher = me.getDock().items.get(me.generateId(appId));

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
    populateLaunchers: function(appId) {
        var me = this;

        // Each launchers
        me.getLaunchers().each(function(launcher) {
            if (launcher.id == me.generateId(appId)) {
                me.activateLauncher(launcher);
            } else {
                me.deactivateLauncher(launcher);
            }
        });
    },

    /**
     *
     * @param appId
     */
    activateLauncher: function(launcher) {
        launcher.addClsWithUI(launcher.overCls);
        launcher.onMouseLeave = function(e) {
            launcher.fireEvent('mouseout', launcher, e);
        };
    },

    /**
     *
     * @param appId
     */
    deactivateLauncher: function(launcher) {
        launcher.removeClsWithUI(launcher.overCls);
    },

    /**
     * getLauncher
     * @param appId
     */
    getLauncher: function(appId) {
        var me = this;
        return me.getDock().items.get(me.generateId(appId));
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
     * generateId
     * @param id
     */
    generateId: function(id) {
        return id.toLowerCase() + '-launcher';
    }
});
