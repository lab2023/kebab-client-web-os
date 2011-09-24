/**
 * @class ForgotPassword
 * @extends Ext.form.Panel
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login forgot password widget
 */
Ext.define('Kebab.view.login.ForgotPassword', {
    extend: 'Ext.window.Window',
    alias : 'widget.login_forgotPassword',

    initComponent: function() {

        var me = this;

        Ext.apply(this, {
            border:false,
            title : 'Forgot Password',
            width: 300,
            constrainHeader: true,
            closeAction: 'hide',
            items: me.buildItems(),
            buttons: [{
                text : 'Send',
                action: 'send'
            }]
        });

        this.callParent(arguments);
    },

    buildItems: function() {

        this.form = Ext.create('Ext.form.Panel', {
            frame:true,
            fieldDefaults: {
                msgTarget: 'side',
                labelWidth: 75
            },
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: [{
                fieldLabel: 'Email',
                name: 'email',
                vtype:'email'
            }]
        });

        return [this.form];
    }
});