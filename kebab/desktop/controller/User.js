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
        'Users'
    ],

    init: function() {
        var me = this,
            userModel = me.getUserModel(),
            userConfig = Kebab.helper.config('user'),
            user = Ext.create(userModel, userConfig);

        // Add user applications
        user.applications().add(userConfig['applications']);

        // Add user privileges
        user.privileges().add(userConfig['privileges']);
    }
});
