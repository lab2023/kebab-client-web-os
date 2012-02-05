/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Apps.feedback.controller.Index', {
    extend: 'Ext.app.Controller',

    /**
     * Controller models
     */
    models: [
        'Feedback'
    ],

    /**
     * Controller views
     */
    views: [
        'Form'
    ],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        // Controller listeners
        me.control({
            // Sign-in form textfield items
            'feedback_form > textfield': {
                specialkey: me.sendFeedback
            },
            // Sign-in form textfield items
            'feedback_form button[action="sendFeedback"]': {
                click: me.sendFeedback
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
    sendFeedback: function(cp, e) {
        var me = this;

        // Just enter key is pressed or submit button clicked
        if (e.getKey() == e.ENTER || cp.action == 'sendFeedback') {
            e.stopEvent();

            // Accessors
            var formPanel = cp.up('form'),
                form = formPanel.getForm();

            // Validation
            if (form.isValid()) {

                // Create new feedback model instance
                var Feedback = Ext.create(
                    me.getFeedbackModel(),
                    form.getValues()
                );

                // Validation
                if(Feedback.isValid()) {

                    // Mask
                    formPanel.mask();

                    // Submission
                    Feedback.save({
                        success: function() {
                            Kebab.helper.notify('Success', 'Your message has been sent.');
                            form.reset();
                            formPanel.unmask();
                        },
                        failure: function() {
                            Kebab.helper.notify('Failed', 'Sending failed... Please try again.', true);
                            formPanel.unmask();
                        }
                    });
                }

            }
        }
    }
});
