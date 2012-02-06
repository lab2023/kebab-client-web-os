/**
 * @class SignUp
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop viewport widget
 */
Ext.define('Apps.userManager.view.UserInvitationForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.userManager_userInvitationForm',

    id: 'userManager-userInvitationForm',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            frame: true,
            padding: 10,
            title: 'User Invitation Form',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            buttonAlign: 'center',
            defaultType: 'textfield',
            defaults: {
                labelAlign: 'top',
                labelSeparator: '',
                anchor: '100%'
            },
            items: me.buildItems(),
            buttons: me.buildButtons()
        }, null);

        me.callParent(arguments);
    },

    buildItems: function() {
        var me = this;

        return [{
            fieldLabel: 'Name',
            emptyText: 'Type the name of the user to be invited here',
            name: 'name',
            allowBlank: false
        },{
            fieldLabel: 'E-mail',
            emptyText: 'This e-mail address to send the invitation',
            name: 'email',
            vtype: 'email',
            allowBlank: false
        }];
    },

    buildButtons: function() {
        return [{
            iconCls: 'icon-cancel',
            text: 'Cancel',
            action: 'closeUserInvitationForm'
        },{
            iconCls: 'icon-email',
            text: 'Send Invitation',
            action: 'sendUserInvitation',
            formBind: true,
            disabled: true
        }];
    }
});