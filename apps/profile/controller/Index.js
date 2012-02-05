/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Apps.profile.controller.Index', {
    extend: 'Ext.app.Controller',

    models: [
        'User',
        'Password'
    ],

    views: [
        'UserForm',
        'PasswordForm'
    ],

    refs: [{
        ref: 'userForm',
        selector: 'profile_userForm'
    },{
        ref: 'passwordForm',
        selector: 'profile_passwordForm'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        me.control({
            'profile_userForm': {
                render: me.loadUser
            },
            'profile_userForm button[action="updateUser"]': {
                click: me.updateUser
            },
            'profile_userForm button[action="changePassword"]': {
                click: me.showUserForm
            },
            'profile_userForm button[action="cancelMembership"]': {
                click: me.cancelMembershipAsk
            },
            'profile_passwordForm button[action="updatePassword"]': {
                click: me.updatePassword
            },
            'profile_passwordForm button[action="showUserForm"]': {
                click: me.showPasswordForm
            }
        });

        // Call parent
        me.callParent(arguments);
    },

    /**
     * Load user data from server and bind form
     * @param p
     */
    loadUser: function(p) {
        var me = this,
            form = p.getForm(),
            userId = Kebab.helper.config('user').id,
            User = me.getUserModel();

        p.mask();
        User.load(userId, {
            success: function(user) {
                p.unmask();
                form.loadRecord(user);
            },
            failure: function(user) {
                p.unmask();
                Kebab.helper.notify('Failed', 'Load failed... Please try again.', true);
            }
        });
    },

    /**
     * User info update
     *
     * @param cp Ext.form.field.Text Fired component
     * @param cp Ext.button.Button Fired component
     * @param e Ext.EventObject
     */
    updateUser: function(cp, e) {

        // Just enter key is pressed or submit button clicked
        if (e.getKey() == e.ENTER || cp.action == 'updateUser') {
            e.stopEvent();

            // Accessors
            var formPanel = cp.up('form'),
                form = formPanel.getForm(),
                user = form.getRecord();

            // Validation
            if (form.isValid()) {

                // update the record with the form data
                form.updateRecord(user);

                // Mask
                formPanel.mask();

                // Submission
                user.save({
                    success: function() {
                        formPanel.unmask();
                        Kebab.helper.notify('Successful', 'Your user info has been updated.');
                    },
                    failure: function() {
                        formPanel.unmask();
                        Kebab.helper.notify('Failed', 'Update failed... Please try again.', true);
                    }
                });
            }
        }
    },

    /**
     * User info update
     *
     * @param cp Ext.form.field.Text Fired component
     * @param cp Ext.button.Button Fired component
     * @param e Ext.EventObject
     */
    updatePassword: function(cp, e) {
        var me = this;

        // Just enter key is pressed or submit button clicked
        if (e.getKey() == e.ENTER || cp.action == 'updatePassword') {
            e.stopEvent();

            // Accessors
            var formPanel = cp.up('form'),
                form = formPanel.getForm();

            // Form Validation
            if (form.isValid()) {

                // Create model instance
                var Password = Ext.create(me.getPasswordModel(), {
                    id: Kebab.helper.config('user').id,
                    password: form.getValues().new_password,
                    password_confirmation: form.getValues().new_password
                });

                // Model Validation
                if(Password.isValid()) {

                    // Mask
                    formPanel.mask();

                    // Save
                    Password.save({
                        success: function() {
                            formPanel.unmask();
                            Kebab.helper.notify('Successful', 'Your password has been changed.');
                            me.showUserForm();
                        },
                        failure: function() {
                            formPanel.unmask();
                            Kebab.helper.notify('Failed', 'Update failed... Please try again.', true, {
                                xtype: 'button',
                                text: 'Try again',
                                handler: function() {
                                    me.updatePassword(cp, e);
                                }
                            });
                        }
                    });
                }
            }
        }
    },

    /**
     * Ask are you sure ?
     *
     * @param btn
     */
    cancelMembershipAsk: function(btn) {
        var me = this;

        Ext.Msg.show({
            title:'Are you sure ?',
            msg:'You couldn\'t sign-in again and lose your personal data !!!',
            buttons:Ext.Msg.OKCANCEL,
            animateTarget:btn.getEl(),
            fn: function(button) {
                if (button == 'ok') {
                    me.cancelMembership();
                }
            },
            icon:Ext.Msg.WARNING
        });
    },

    /**
     * Destroy user from server
     */
    cancelMembership: function() {
        var me = this,
            loadMask = Kebab.helper.application().getLoadMask(),
            User = me.getUserForm().getForm().getRecord();

        loadMask.show();

        User.destroy({
            success:function () {
                Kebab.helper.redirect('login.html');
            },
            failure:function () {
                loadMask.hide();
                Kebab.helper.notify('Failed', 'Operation failed... Please try again.', true);
            }
        });
    },

    /**
     * Show user form panel
     */
    showUserForm: function() {
        var me = this;
        me.getPasswordForm().getForm().reset();
        me.application.getViewport().getLayout().setActiveItem(1);
    },

    /**
     * Show password form panel
     */
    showPasswordForm: function() {
        var me = this;
        me.application.getViewport().getLayout().setActiveItem(0);
    }
});
