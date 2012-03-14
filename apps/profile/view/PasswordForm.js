/**
 * @class SignUp
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop viewport widget
 */
Ext.define('Apps.profile.view.PasswordForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.profile_passwordForm',

    id: 'profile-passwordForm',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
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
            fieldLabel: 'Old password',
            emptyText: 'Type your current password here',
            name: 'password',
            inputType: 'password',
            minLength: 4,
            allowBlank: false
        },{
            fieldLabel: 'New password',
            emptyText: 'Type your secure password here',
            name: 'new_password',
            inputType: 'password',
            minLength: 4,
            allowBlank: false
        },{
            fieldLabel: 'Enter your new password again for verification',
            emptyText: 'Re-type your password here',
            name: 'new_password_confirmation',
            inputType: 'password',
            minLength: 4,
            allowBlank: false,
            validator: function(value) {
                var password1 = me.getForm().findField('new_password');
                return (value === password1.getValue()) ? true : 'Passwords do not match.'
            }
        }];
    },

    buildButtons: function() {
        return [{
            iconCls: 'icon-cancel',
            text: 'Cancel',
            action: 'showUserForm'
        },{
            iconCls: 'icon-disk',
            text: 'Update Password',
            action: 'updatePassword',
            formBind: true,
            disabled: true
        }];
    }
});