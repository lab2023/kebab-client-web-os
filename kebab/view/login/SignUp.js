/**
 * @class SignUp
 * @extends Ext.form.Panel
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login sign-up widget
 */
Ext.define('Kebab.view.login.SignUp', {
    
    extend: 'Ext.form.Panel',
    alias : 'widget.login_signUp',

    initComponent: function() {

        var me = this;

        Ext.apply(this, {
            title : 'Sign-up',
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
            name : 'full_name',
            fieldLabel : 'Your full name',
            allowBlank : false
        },{
            name : 'email',
            fieldLabel : 'Your e-mail',
            allowBlank : false,
            vtype: 'email'
        }];
    }
});