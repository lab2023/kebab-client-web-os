/**
 * @class SignIn
 * @extends Ext.form.Panel
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login sign-in widget
 */
Ext.define('Kebab.view.login.SignIn', {
    
    extend: 'Ext.form.Panel',
    alias : 'widget.login_signIn',

    initComponent: function() {

        var me = this;

        Ext.apply(this, {
            title : 'Sign-in',
            waitMsgTarget: true,
            frame  :true,
            bodyPadding : 5,
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            defaultType: 'textfield',
            items: me.buildItems(),
            buttons: [{
                text : 'Send',
                action: 'send'
            }]
        });

        this.callParent(arguments);
    },

    buildItems: function() {
        return [{
            name : 'username',
            fieldLabel : 'Username',
            allowBlank : false
        },{
            name       : 'password',
            fieldLabel : 'Password',
            inputType  : 'password',
            allowBlank : false
        }];
    }
});