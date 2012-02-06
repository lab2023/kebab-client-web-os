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
           // Sign-in form textfield items
           'userManager_viewport button[action="inviteUser"]': {
               click: me.showHideUserInvitationForm
           },
           // Sign-in form textfield items
           'userManager_userInvitationForm button[action="closeUserInvitationForm"]': {
               click: me.showHideUserInvitationForm
           },
       });

        // Call parent
        me.callParent(arguments);
    },

    showHideUserInvitationForm: function() {
        var me = this;

        if (me.getUserInvitationForm().isHidden()) {
            me.getUserInvitationForm().show();
        } else {
            me.application.getViewport().down('button[action="inviteUser"]').toggle(false);
            me.getUserInvitationForm().hide();
        }
    }
});
