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
            }
        });
    },

    loadUserApplications: function() {
        var me = this,
            applicationsStore = me.getApplicationsStore(),
            appClasses = [];
            appI18nClasses = [];

        // TODO merge i18n titles core and user applications data
        applicationsStore.add(Kebab.helper.config('user').applications);

        // Populate app classes
        applicationsStore.each(function(application) {
            var appId = application.get('sys_name').ucFirst();
            appClasses.push('Apps.' + appId);
            appI18nClasses.push('Apps.' + appId.toLowerCase() + '.locale.I18n');

        });

        // Load required apps
        if (Kebab.desktop.Config.getApps().requireAll) {
            Ext.require(appClasses);
        } else {
            Ext.require(appI18nClasses);
        }

        // Setup user applications data translations
        // TODO move controller listener
        Ext.onReady(function() { // solve this
            applicationsStore.each(function(application) {
                var appId = application.get('sys_name').ucFirst();
                application.set('appTitle', Kebab.helper.i18n(appId, 'app').t('appTitle'));
                application.set('appDepartment', Kebab.helper.i18n(appId, 'app').t('appDepartment'));
            });
        });
    }
});
