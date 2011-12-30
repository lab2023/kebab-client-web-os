/**
 * @class LoginForm
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login Logo
 */
Ext.define('Kebab.login.view.SignIn', {
    extend: 'Ext.form.Panel',
    alias: 'widget.login_signIn',

    id: 'login-signIn',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            title: 'Welcome to Kebab Web OS',
            frame: true,
            margin: 10,
            padding: 10,
            buttonAlign: 'center',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: me.buildItems(),
            buttons: me.buildButtons()
        });

        me.callParent(arguments);
    },

    buildItems: function() {
        return [{
            emptyText: 'E-mail',
            name: 'email',
            vtype: 'email',
            allowBlank: false
        },{
            emptyText: 'Password',
            name: 'password',
            inputType: 'password',
            allowBlank: false
        }/*{
            xtype: 'checkboxfield',
            name: 'acceptTerms',
            fieldLabel: 'Terms of Use',
            style: 'text-align:left; font-size:80%;',
            hideLabel: true,
            boxLabel: 'Remember me'
        }*/];
    },

    buildButtons: function() {
        return [{
            text: 'Sign in',
            formBind: true,
            disabled: true
        }];
    }
});