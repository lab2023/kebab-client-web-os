/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.login.controller.SignIn', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'SignIn'
    ],

    refs: [{
        ref: 'signIn',
        selector: 'login_signIn'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        me.control({
            // Sign-in form textfield items
            'login_signIn > textfield': {
                specialkey: me.submit
            },
            // Sign-in form textfield items
            'login_signIn button[action="submit"]': {
                click: me.submit
            }
        });

        // Call parent
        me.callParent(arguments);
    },

    /**
     * User's password reset
     *
     * @param cp Ext.form.field.Text Fired component
     * @param cp Ext.button.Button Fired component
     * @param e Ext.EventObject
     */
    submit: function(cp, e) {
        var me = this;

        // Just enter key is pressed or submit button cicked
        if (e.getKey() == e.ENTER || cp.action == 'submit') {
            e.stopEvent();

            var form = cp.up('form').getForm();

            if (form.isValid()) {
                form.submit({
                    waitMsg: 'Please wait...',
                    url: 'sessions',
                    success: function() {
                        Kebab.helper.redirect('desktop.html');
                    },
                    failure: function() {
                        Kebab.helper.notify('Failed', 'Login failed... Please try again.');
                    }
                });
            }
        }
    }
});
