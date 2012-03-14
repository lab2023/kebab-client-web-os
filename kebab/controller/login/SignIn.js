/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.controller.login.SignIn', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'login.SignIn'
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
                specialkey: me.signIn
            },
            // Sign-in form textfield items
            'login_signIn button[action="submit"]': {
                click: me.signIn
            }
        });

        // Call parent
        me.callParent(arguments);
    },

    /**
     * User's signIn
     *
     * @param cp Ext.form.field.Text Fired component
     * @param cp Ext.button.Button Fired component
     * @param e Ext.EventObject
     */
    signIn: function(cp, e) {

        // Just enter key is pressed or submit button clicked
        if (e.getKey() == e.ENTER || cp.action == 'submit') {
            e.stopEvent();

            // Accessors
            var formPanel = cp.up('form'),
                form = formPanel.getForm();

            // Validation
            if (form.isValid()) {

                // Loader
                formPanel.getEl().mask('Please wait...');

                // Submission
                form.submit({
                    url: 'sessions',
                    success: function() {
                        Kebab.URLHelper.redirect('desktop');
                    },
                    failure: function() {
                        formPanel.getEl().unmask();
                        Kebab.NotifyHelper.msg('ERR', 'Login failed... Please try again.');
                    }
                });
            }
        }
    }
});
