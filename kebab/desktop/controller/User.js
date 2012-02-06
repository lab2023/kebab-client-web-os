/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.desktop.controller.User', {
    extend: 'Ext.app.Controller',

    models: [
        'User',
        'Password',
        'Application',
        'Privilege'
    ],

    stores: [
        'Applications'
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
            appI18nClasses = [];

        // TODO merge i18n titles core and user applications data
        // Check app files is exist ? Remove and report not founded apps
        applicationsStore.add(Kebab.helper.config('user').applications);

        // Populate app classes
        applicationsStore.each(function(application) {
            var appSysName = application.get('sys_name');
            appClasses.push('Apps.' + appSysName.ucFirst());
            appI18nClasses.push('Apps.' + appSysName.lcFirst() + '.locale.I18n');

        });

        // Load required apps
        Ext.require(appI18nClasses);
        if (Kebab.desktop.Config.getApps().requireAll) {
            Ext.require(appClasses);
        }

        // Setup user applications data translations
        // TODO move controller listener
        Ext.onReady(function() {  // TODO solve this and use filter
            applicationsStore.each(function(application) {
                var appSysName = application.get('sys_name');
                application.set('appTitle', Kebab.helper.i18n(appSysName.lcFirst(), 'app').t('appTitle'));
                application.set('appDepartment', Kebab.helper.i18n(appSysName.lcFirst(), 'app').t('appDepartment'));
            });
        });
    },

    /**
     * Load user defined launchers
     */
    loadUserLaunchers: function() {
        var me = this;

        Ext.onReady(function() { // TODO solve this and use filter
            me.getApplicationsStore().each(function(application) {
                var appSysName = application.get('sys_name');
                if (application.get('keepDock')) { // TODO Remove user preferences data
                    me.getController('Dock').addLauncher({
                        xtype: 'kebab_launcher',
                        keepDock: true,
                        tooltip: Kebab.helper.i18n(appSysName.lcFirst(), 'app').t('appTitle'),
                        launcher: {
                            appId: appSysName.ucFirst()
                        }
                    });
                }
            });
        });
    },
});
