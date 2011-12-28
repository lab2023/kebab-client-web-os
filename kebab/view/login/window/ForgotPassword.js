/**
 * @class LoginForm
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login Logo
 */
Ext.define('Kebab.view.login.window.ForgotPassword', {
    extend: 'Ext.form.Panel',
    alias: 'widget.login_window_forgotPassword',

    id: 'login-window-forgotPassword',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            border: false,
            buttonAlign: 'center',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: me.buildItems()
        });

        me.callParent(arguments);
    },

    buildItems: function() {
        return [{
            border: false,
            html: 'Enter your email, and we\'ll email to your new password'
        },{
            emptyText: 'Type your e-mail here',
            name: 'user[email]',
            allowBlank: false
        }];
    }
});
