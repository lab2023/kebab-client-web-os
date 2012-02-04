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

        me.control({
            // Sign-in form textfield items
            'login_passwordReset button[action="submit"]': {
                click: me.submit
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
    submit: function(cp, e) {
        var me = this;

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
                        Kebab.helper.notify('Successful', 'Your password has been reset. Please check your email account.', true);
                        me.getController('Index').showSignIn(cp, e);
                    },
                    failure: function() {
                        Kebab.helper.notify('Failed', 'Sending failed... Please try again.', true);
                    }
                });
            }
        }
    }
});
