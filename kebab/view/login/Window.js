/**
 * @class SignIn
 * @extends Ext.panel.Panel
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login sign-in widget
 */
Ext.define('Kebab.view.login.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.login_window',

    id: 'login-window',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            width: 300,
            height: 380,
            padding: 10,
            draggable: false,
            resizable: false,
            closable: false,
            autoShow: true,
            shadow: false,
            border: false,
            buttonAlign: 'left',
            items: me.buildItems(),
            buttons: me.buildButtons()
        });

        me.callParent(arguments);
    },

    buildItems: function() {
        var me = this;

        return [{
            xtype: 'login_window_logo'
        },{
            xtype: 'login_window_info'
        },{
            xtype: 'login_window_wrapper'
        }];
    },

    buildButtons: function() {
        return [{
            scale: 'large',
            itemOrder: 0,
            iconCls: 'icon-login-sign_in',
            iconAlign: 'top',
            text: 'Sign-in',
            tooltip: 'Sign-in system'
        },{
            scale: 'large',
            itemOrder: 1,
            iconCls: 'icon-login-forgot_password',
            iconAlign: 'top',
            text: 'Forgot Password',
            tooltip: 'Reset and send new password'
        },{
            iconCls: 'icon-login-languages',
            itemOrder: 2,
            iconAlign: 'top',
            scale: 'large',
            text: 'Languages',
            tooltip: 'Select your language'
        }];
    }
});
