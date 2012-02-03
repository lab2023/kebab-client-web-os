/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.desktop.controller.Launchpad', {
    extend: 'Ext.app.Controller',

    views: [
        'Launchpad',
        'launchpad.Launchers',
        'launchpad.Departments'
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

    loadLaunchers: function() {
        var me = this,
            appsStore = me.getController('User').getApplicationsStore();

        appsStore.each(function(record) {
            me.getLaunchersView().getStore().add(record.data);
        });
    },

    loadDepartments: function() {
        var me = this,
            appsStore = me.getController('User').getApplicationsStore();

        appsStore.each(function(record) {
            me.getDepartmentsView().getStore().add(record.data);
        });
    },

    selectLauncher: function(dv, rec, n, i, e) {
        var me = this,
            cp = Ext.apply(dv, {
                launcher: {
                    appId: rec.data.sys_name.ucFirst()
                }
            });

        me.getController('Application').launchApplication(cp, e);
        me.clearSelections();

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
    },

    openLaunchpad: function(cp, e){
        var me = this,
            showX = Ext.fly('desktop-index-body').getX() + 5,
            showY = Ext.fly('desktop-index-body').getY() + 5;

        e.stopEvent();

        if (!me.getLaunchpad()) {

            Ext.create(this.getView('Launchpad'), {
                x: showX,
                y: showY,
                animateTarget: cp.id,
                listeners: {
                    render: function() {
                        cp.addClsWithUI('active');
                    }
                }
            });

        } else {

            if (!me.getLaunchpad().isVisible()) {
                me.getLaunchpad().show();
                cp.addClsWithUI('active');
            } else {
                cp.removeClsWithUI('active');
                me.getLaunchpad().hide();
            }
        }
    }
});
