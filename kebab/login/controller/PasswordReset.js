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

        // Just enter key is pressed
        if (e.getKey() == e.ENTER || cp.action == 'submit') {
            e.stopEvent();

            var form = cp.up('form').getForm();

            if (form.isValid()) {
                form.submit({
                    waitMsg: 'Please wait...',
                    url: 'passwords',
                    success: function() {
                        Ext.Msg.alert('Successful', 'Your password has been reset.<br />Please check your email account.');
                    },
                    failure: function() {
                        Ext.Msg.alert('Failed', 'Login failed... Please try again.');
                    }
                });
            }
        }
    }
});
