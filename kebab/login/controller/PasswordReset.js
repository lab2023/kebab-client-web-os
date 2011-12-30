/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.login.controller.PasswordReset', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'PasswordReset'
    ],

    refs: [{
        ref: 'passwordReset',
        selector: 'login_passwordReset'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        me.control({});

        // Call parent
        me.callParent(arguments);
    },

    /**
     * Show password reset dialog
     */
    show: function() {
        var me = this;

        me.getPasswordReset().show();
    },

    /**
     * Hide password reset dialog
     */
    hide: function() {
        var me = this;

        me.getPasswordReset().hide();
    }
});
