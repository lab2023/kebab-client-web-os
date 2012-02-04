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
            var appId = application.get('sys_name').ucFirst();
            appClasses.push('Apps.' + appId);
            appI18nClasses.push('Apps.' + appId.toLowerCase() + '.locale.I18n');

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
                var appId = application.get('sys_name').ucFirst();
                application.set('appTitle', Kebab.helper.i18n(appId, 'app').t('appTitle'));
                application.set('appDepartment', Kebab.helper.i18n(appId, 'app').t('appDepartment'));
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
                var appId = application.get('sys_name').ucFirst();
                if (application.get('keepDock')) { // TODO Remove user preferences data
                    me.getController('Dock').addLauncher({
                        xtype: 'kebab_launcher',
                        keepDock: true,
                        tooltip: Kebab.helper.i18n(appId, 'app').t('appTitle'),
                        launcher: {
                            appId: appId
                        }
                    });
                }
            });
        });
    },
});
