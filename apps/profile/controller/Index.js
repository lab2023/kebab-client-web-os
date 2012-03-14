/**
 * @class Index
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Apps.profile.controller.Index', {
    extend: 'Ext.app.Controller',

    /**
     * Controller models
     */
    models: [
        'User',
        'Password'
    ],

    /**
     * Controller views
     */
    views: [
        'UserForm',
        'PasswordForm'
    ],

    /**
     * Controller refs
     */
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
            userId = Kebab.getBootstrap('user').id,
            User = me.getUserModel();

        p.getEl().mask('Please wait...');
        User.load(userId, {
            success: function(user) {
                p.getEl().unmask();
                form.loadRecord(user);
            },
            failure: function(user) {
                p.getEl().unmask();
                Kebab.NotifyHelper.msg('ERR', Kebab.I18nHelper.t('kebab.messages.failure'));
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
        var me = this;

        // Just enter key is pressed or submit button clicked
        if (e.getKey() == e.ENTER || cp.action == 'updateUser') {
            e.stopEvent();

            // Accessors
            var formPanel = me.getUserForm(),
                form = formPanel.getForm(),
                user = form.getRecord();

            // Validation
            if (form.isValid()) {

                // update the record with the form data
                form.updateRecord(user);

                // Mask
                formPanel.getEl().mask('Please wait');

                // Submission
                user.save({
                    success: function() {
                        formPanel.getEl().unmask();
                        Kebab.NotifyHelper.msg('OK', 'Your user info has been updated.', true, {
                            xtype: 'button',
                            action: 'restart',
                            text: 'Click to reload your session'
                        });
                    },
                    failure: function() {
                        formPanel.getEl().unmask();
                        Kebab.NotifyHelper.msg('ERR', Kebab.I18nHelper.t('kebab.messages.failure'));
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
            var formPanel = me.getPasswordForm(),
                form = formPanel.getForm();

            // Form Validation
            if (form.isValid()) {

                // Create model instance
                var Password = Ext.create(me.getPasswordModel(), {
                    id: Kebab.getBootstrap('user').id,
                    password: form.getValues().password,
                    new_password: form.getValues().new_password,
                    new_password_confirmation: form.getValues().new_password_confirmation
                });

                // Model Validation
                if(Password.isValid()) {

                    // Mask
                    formPanel.getEl().mask('Please wait');

                    // Save
                    Password.save({
                        success: function() {
                            formPanel.getEl().unmask();
                            Kebab.NotifyHelper.msg('OK', Kebab.I18nHelper.t('kebab.messages.success'));
                            me.showUserForm();
                        },
                        failure: function() {
                            formPanel.getEl().unmask();
                            Kebab.NotifyHelper.msg('ERR', Kebab.I18nHelper.t('kebab.messages.failure'), true, {
                                xtype: 'button',
                                text: Kebab.I18nHelper.t('kebab.texts.tryAgain'),
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

        if (!Kebab.getBootstrap('user')['is_owner']) {
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
        } else {
            Kebab.NotifyHelper.msg('ERR', 'This process is not permitted.');
        }
    },

    /**
     * Destroy user from server
     */
    cancelMembership: function() {
        var loadMask = Kebab.LoaderHelper.getMask(),
            User = me.getUserForm().getForm().getRecord();

        loadMask.show();

        User.destroy({
            success:function () {
                Kebab.URLHelper.redirect('login.html');
            },
            failure:function () {
                loadMask.hide();
                Kebab.NotifyHelper.msg('ERR', Kebab.I18nHelper.t('kebab.messages.failure'));
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
