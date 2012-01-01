/**
 * @class LoginForm
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login Logo
 */
Ext.define('Kebab.login.view.PasswordReset', {
    extend: 'Ext.form.Panel',
    alias: 'widget.login_passwordReset',

    id: 'login-passwordReset',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            title: 'Password Reset',
            frame: true,
            padding: 10,
            height: 135,
            buttonAlign: 'center',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: me.buildItems(),
            buttons: me.buildButtons()
        }, null);

        me.callParent(arguments);
    },

    buildItems: function() {
        return [{
            border: false,
            xtype: 'displayfield',
            value: 'Enter your email, and we\'ll email to your new password'
        },{
            emptyText: 'Type your e-mail here',
            name: 'email',
            vtype: 'email',
            allowBlank: false
        }];
    },

    buildButtons: function() {
        return [{
            text: 'Cancel',
            action: 'cancel'
        },{
            text: 'Send',
            action: 'submit',
            formBind: true,
            disabled: true
        }];
    }
});
