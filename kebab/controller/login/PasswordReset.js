/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.controller.login.PasswordReset', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'login.PasswordReset'
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

        me.control({
            // Sign-in form textfield items
            'login_passwordReset button[action="submit"]': {
                click: me.resetPassword
            }
        });

        // Call parent
        me.callParent(arguments);
    },

    /**
     * Sign-in user
     *
     * @param cp Ext.form.field.Text Fired component
     * @param cp Ext.button.Button Fired component
     * @param e Ext.EventObject
     */
    resetPassword: function(cp, e) {
        // Just enter key is pressed or submit button clicked
        if (e.getKey() == e.ENTER || cp.action == 'submit') {
            e.stopEvent();

            // Accessors
            var formPanel = cp.up('form'),
                form = formPanel.getForm();

            // Validation
            if (form.isValid()) {
                // Loader
                form.waitMsgTarget = formPanel.getEl();
                // Submission
                form.submit({
                    waitMsg: 'Please wait...',
                    url: 'passwords',
                    success: function() {
                        Kebab.NotifyHelper.msg('OK', 'Your password has been reset. Please check your email account.');
                        formPanel.up('window').close();
                    },
                    failure: function() {
                        Kebab.NotifyHelper.msg('ERR', 'Sending failed... Please try again.');
                    }
                });
            }
        }
    }
});
