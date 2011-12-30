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
            }
        });

        // Call parent
        me.callParent(arguments);
    },

    /**
     * Sign-in user
     *
     * @param cp Ext.form.field.Text
     * @param cp Ext.button.Button
     * @param e Ext.EventObject
     */
    submit: function(cp, e) {
        var me = this;

        // Just enter key is pressed
        if (e.getKey() == e.ENTER) {
            e.stopEvent();

            var form = cp.up('form').getForm();

            if (form.isValid()) {

                form.submit({

                    url: 'sessions',

                    success: function(form, action) {

                        if (action.result.success) {
                           window.location.href = "desktop.html";
                        }
                    },
                    failure: function(form, action) {

                        Ext.Msg.alert('Failed', 'Login failed... Please try again.');
                    }
                });
            }
        }
    },
});
