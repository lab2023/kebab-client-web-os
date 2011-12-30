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

        window.location.href = "desktop.html";

        // Just enter key is pressed
        if (e.getKey() == e.ENTER) {
            e.stopEvent();

            /*var form = cp.up('form').getForm();

            if (form.isValid()) {

                me.showHideMask();

                form.submit({

                    url: 'users/sign_in.json',

                    success: function(form, action) {

                        me.showHideMask(true);

                        if (action.result.success) {
                           me.getController('User').getUsersStore().add(action.result);
                        }
                    },
                    failure: function(form, action) {

                        me.showHideMask(true);

                        Ext.Msg.alert('Failed', 'Login failed... Please try again.');
                    }
                });
            }*/
        }
    },
});
