/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.controller.desktop.User', {
    extend: 'Ext.app.Controller',

    /**
     * Application Stores
     * @type Array
     */
    stores: [
        'Applications',
        'Privileges'
    ],

    init: function() {
        var me = this;

        me.control({
            'desktop_index': {
                render: me.loadUserApplications
            },
            'desktop_dock': {
                render: me.loadUserLaunchers
            }
        });

        // Call parent
        me.callParent(arguments);
    },

    loadUserApplications: function() {
        var me = this,
            applicationsStore = me.getApplicationsStore(),
            appClasses = [];

        // Check app files is exist ? Remove and report not founded apps
        applicationsStore.add(Kebab.getBootstrap('user')['applications']);

        // Populate app classes
        applicationsStore.each(function(application) {
            var appId = application.get('sys_name');
            appClasses.push(Ext.String.format('Apps.{0}.Application', appId));
        });

        // Load required apps
        if (Kebab.DesktopConfig.getApps().requireAll) {
            Ext.require(appClasses);
        }

        // Setup user applications data translations
        applicationsStore.each(function(application) {
            var appId = application.get('sys_name'),
                appDepartment = application.get('sys_department');
            application.set('title', Kebab.I18nHelper.t(appId + '.title'));
            application.set('description', Kebab.I18nHelper.t(appId + '.description'));
            application.set('department', Kebab.I18nHelper.t('kebab.departments.' + appDepartment));
        });
    },

    /**
     * Load user defined launchers
     */
    loadUserLaunchers: function() {
        var me = this;

        me.getApplicationsStore().each(function(application) {
            var appId = application.get('sys_name');
            if (application.get('keepDock')) { // TODO Remove user preferences data
                me.getController('desktop.Dock').addLauncher({
                    xtype: 'kebab_launcher',
                    keepDock: true,
                    tooltip: Kebab.I18nHelper.t(appId + '.title'),
                    launcher: {
                        appId: appId
                    }
                });
            }
        });
    }
});
