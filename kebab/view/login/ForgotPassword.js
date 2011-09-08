/**
 * @class ForgotPassword
 * @extends Ext.form.Panel
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login forgot password widget
 */
Ext.define('Kebab.view.login.ForgotPassword', {
    
    extend: 'Ext.form.Panel',
    alias : 'widget.login_forgotPassword',

    initComponent: function() {

        var me = this;

        Ext.apply(this, {
            title : 'Forgot Password',
            waitMsgTarget: true,
            bodyPadding : 5,
            frame  :true,
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
            name : 'email',
            fieldLabel : 'Your e-mail',
            allowBlank : false,
            vtype: 'email'
        }];
    }
});