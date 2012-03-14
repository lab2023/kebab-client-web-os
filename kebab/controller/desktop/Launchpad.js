/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.controller.desktop.Launchpad', {
    extend: 'Ext.app.Controller',

    views: [
        'desktop.Launchpad',
        'desktop.launchpad.Launchers',
        'desktop.launchpad.Departments'
    ],

    refs: [{
        ref: 'launchpad',
        selector: 'desktop_launchpad'
    },{
        ref: 'launchersView',
        selector: 'desktop_launchpad_launchers'
    },{
        ref: 'departmentsView',
        selector: 'desktop_launchpad_departments'
    }],

    init: function() {
        var me = this;

        me.control({
            // Listener desktop launchpad component
            'desktop_launchpad': {
                beforerender: me.launchpadBeforeRender, // TODO desktop index constrain
                show: me.afterShowLaunchpad,
                hide: me.afterHideLaunchpad
            },
            // Listener launcher showLaunchpad component
            'component[action="showLaunchpad"]': {
                click: me.openLaunchpad // TODO solve fast double click errors (event is suspended!)
            },
            // Listener launcher components
            'desktop_launchpad_launchers': {
                render: me.loadLaunchers,
                itemclick: me.selectLauncher
            },
            // Listener launcher components
            'desktop_launchpad_departments': {
                render: me.loadDepartments,
                itemclick: me.selectDepartment,
                containerclick: me.clearSelections
            }
        });

        me.callParent(arguments);
    },

    launchpadBeforeRender: function(win) {
        var me = this;
        me.getController('desktop.Index').getIndex().add(win);
    },

    openLaunchpad: function(cp, e){
        var me = this;

        e.stopEvent();

        if (!me.getLaunchpad()) {

            Ext.create(this.getView('desktop.Launchpad'), {
                x: 0,
                y: 0,
                //animateTarget: cp.id,
                listeners: {
                    render: function() {
                        cp.addClsWithUI('active');
                    }
                }
            });

        } else {

            if (!me.getLaunchpad().isVisible()) {
                me.getLaunchpad().show();
            } else {
                me.getLaunchpad().hide();
            }
        }
    },

    afterShowLaunchpad: function() {
        var me = this;
        me.getController('desktop.Dock').getLaunchpadButton().addClsWithUI('active');
    },

    afterHideLaunchpad: function() {
        var me = this;
        me.getController('desktop.Dock').getLaunchpadButton().removeClsWithUI('active');
        me.clearSelections();
    },

    loadLaunchers: function() {
        var me = this,
            appsStore = me.getController('desktop.User').getApplicationsStore();

        appsStore.each(function(record) {
            me.getLaunchersView().getStore().add(record.data);
        });
    },

    loadDepartments: function() {
        var me = this,
            appsStore = me.getController('desktop.User').getApplicationsStore(),
            departments = [];

        Ext.each(appsStore.collect('sys_department'), function(department) {
            var record = appsStore.findRecord('sys_department', department);
            if (record) {
                departments.push(record.data);
            }
        });

        if (departments.length > 0) {
            me.getDepartmentsView().getStore().add(departments);
        }
    },

    selectLauncher: function(dv, rec, n, i, e) {
        var me = this,
            cp = Ext.apply(dv, {
                launcher: {
                    appId: rec.data.sys_name
                }
            });

        me.getController('desktop.Application').launchApplication(cp, e);
        dv.ownerCt.hide();
        /*
        if (dv.ownerCt.maximized == true) {
            Ext.defer(function() {
                dv.ownerCt.restore();
            }, 300);
        }*/
    },

    selectDepartment: function(dv, rec, n, i, e) {
        var me = this,
            store = me.getLaunchersView().getStore();

        store.clearFilter();
        store.filter('sys_department', rec.data.sys_department);
    },

    clearSelections: function() {
        var me = this;

        me.getDepartmentsView().getSelectionModel().deselectAll(); // TODO clear selected nodes
        me.getLaunchersView().getStore().clearFilter();
    }
});
