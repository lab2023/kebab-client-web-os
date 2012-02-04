/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Apps.feedback.controller.Index', {
    extend: 'Ext.app.Controller',

    views: [
        'Form'
    ],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        me.control({
            // Sign-in form textfield items
            'feedback_form > textfield': {
                specialkey: me.submit
            },
            // Sign-in form textfield items
            'feedback_form button[action="submit"]': {
                click: me.submit
            }
        });

        // Call parent
        me.callParent(arguments);
    },

    /**
     * Send feedback message
     *
     * @param cp Ext.form.field.Text Fired component
     * @param cp Ext.button.Button Fired component
     * @param e Ext.EventObject
     */
    submit: function(cp, e) {

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
                    url: 'feedback',
                    success: function() {
                        Kebab.helper.notify('Success', 'Your message has been sent.');
                        form.reset();
                    },
                    failure: function() {
                        Kebab.helper.notify('Failed', 'Sending failed... Please try again.', true);
                    }
                });
            }
        }
    }
});
