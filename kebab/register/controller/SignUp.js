/**
 * @class SignUp
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Sign-up controller
 */
Ext.define('Kebab.register.controller.SignUp', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'SignUp'
    ],

    refs: [{
        ref: 'signIn',
        selector: 'register_signUp'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        me.control({
            // Sign-in form textfield items
            'register_signUp > textfield': {
                specialkey: me.submit
            },
            // Sign-in form textfield items
            'register_signUp button[action="submit"]': {
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

        // Just enter key is pressed or submit button clicked
        if (e.getKey() == e.ENTER || cp.action == 'submit') {
            e.stopEvent();

            var form = cp.up('form').getForm(),
                formValues = form.getValues();

            if (form.isValid()) {

                // Merge new host value
                Ext.apply(formValues, {
                    "tenant[host]" : form.findField('tenant[host]').getValue() + '.kebab.local'
                }, null);

                form.submit({
                    waitMsg: 'Please wait...',
                    url: 'tenants',
                    success: function() {
                        Kebab.helper.redirect('desktop.html');
                    },
                    failure: function() {
                        Kebab.helper.notify('Failed', 'Register failed... Please try again.');
                    }
                });
            }
        }
    }
});
