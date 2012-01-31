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

        me.loadUserApplications();
    },

    loadUserApplications: function() {
        var me = this,
            applicationsStore = me.getApplicationsStore(),
            appClasses = []
            appCssResources = [];

        applicationsStore.add(Kebab.helper.config('user').applications);

        applicationsStore.each(function(application) {
            appClasses.push('Apps.' + application.get('sys_name').ucFirst());
            appCssResources.push('apps/' + application.get('sys_name') + '/resources/css/launcher.css');
        });

        // Load app css resources
        Kebab.helper.loadCSS(appCssResources);
        // Load required apps
        //Ext.require(appClasses);
    }
});
