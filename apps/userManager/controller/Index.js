/**
 * @class Index
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * UserManager app index controller
 */
Ext.define('Apps.userManager.controller.Index', {
    extend: 'Ext.app.Controller',

    /**
     * Controller models
     */
    models: [
        'User'
    ],

    /**
     * Controller models
     */
    stores: [
        'Users'
    ],

    /**
     * Controller views
     */
    views: [
        'UserList',
        'UserInvitationForm'
    ],

    /**
     * Controller refs
     */
    refs: [{
        ref: 'userList',
        selector: 'userManager_userList'
    },{
        ref: 'userInvitationForm',
        selector: 'userManager_userInvitationForm'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        me.control({
            // Listen inviteUser button events
            'userManager_viewport button[action="inviteUser"]': {
                click: me.toggleUserInvitationForm
            },
            // Listen closeUserInvitationForm button events
            'userManager_userInvitationForm button[action="closeUserInvitationForm"]': {
                click: me.toggleUserInvitationForm
            },
            // Sign-in form textfield items
            'userManager_userInvitationForm > textfield': {
                specialkey: me.sendUserInvitation
            },
            // Listen sendFeedback button events
            'userManager_userInvitationForm button[action="sendUserInvitation"]': {
                click: me.sendUserInvitation
            },
            // Listen launcher component events
            'userManager_userList': {
                itemclick: me.clickUserItem
            }
       });

        // Call parent
        me.callParent(arguments);
    },

    clickUserItem: function(dv, r, n, i, e) {
        e.stopEvent();
        var me = this,
            target = e.getTarget('a', 0, true);

        if (target && (target.getAttribute('href') == '#deactivate' || target.getAttribute('href') == '#reactivate')) {
            me.changeUserStatus(r, target);
        }
    },

    /**
     * Send feedback message
     *
     * @param cp Ext.form.field.Text Fired component
     * @param cp Ext.button.Button Fired component
     * @param e Ext.EventObject
     */
    sendUserInvitation: function(cp, e) {
        var me = this;

        // Just enter key is pressed or submit button clicked
        if (e.getKey() == e.ENTER || cp.action == 'sendUserInvitation') {
            e.stopEvent();

            // Accessors
            var formPanel = me.getUserInvitationForm(),
                form = formPanel.getForm();

            // Validation
            if (form.isValid()) {

                // Create new feedback model instance
                var User = Ext.create(
                    me.getUserModel(),
                    form.getValues()
                )

                // Mask
                formPanel.getEl().mask('Please wait...');

                // Sync server
                User.save({
                    success: function() {
                        // Add new user to store
                        me.getUserList().getStore().add(User);
                        Kebab.helper.notify('Success', 'Your message has been sent.');
                        form.reset();
                        me.toggleUserInvitationForm();
                    },
                    failure: function() {
                        Kebab.helper.notify('Failed', 'Sending failed... Please try again.', true);
                        formPanel.getEl().unmask();
                    }
                });

            }
        }
    },

    changeUserStatus: function(record, target) {
        var me = this;

        // Are u sure ?
        Ext.Msg.show({
            title:'Are you sure ?',
            msg:'User no longer not be able to sign-in',
            buttons:Ext.Msg.OKCANCEL,
            modal: false,
            animateTarget: target,
            fn: function(button) {
                if (button == 'ok') {
                    var status = record.data.active;

                    // Set record
                    record.set('active', !status);

                    // Mask
                    me.getUserList().getEl().mask('Please wait');

                    // Sync server
                    record.save({
                        success: function() {
                            me.getUserList().getEl().unmask();
                            Kebab.helper.notify('Successful', 'User status was changed.');
                        },
                        failure: function() {
                            // Rollback
                            record.reject();
                            me.getUserList().unmask();
                            Kebab.helper.notify('Failure', 'User status couldn\'t changed.');
                        }
                    });
                }
            },
            icon:Ext.Msg.WARNING
        });
    },

    toggleUserInvitationForm: function() {
        var me = this;

        if (me.getUserInvitationForm().isHidden()) {
            me.getUserInvitationForm().show();
        } else {
            me.application.getViewport().down('button[action="inviteUser"]').toggle(false);
            me.getUserInvitationForm().hide();
        }
    }
});
