/**
 * @class LoginForm
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login Logo
 */
Ext.define('Kebab.view.login.window.SignIn', {
    extend: 'Ext.form.Panel',
    alias: 'widget.login_window_signIn',

    id: 'login-window-signIn',

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
            emptyText: 'E-mail',
            name: 'user[email]',
            allowBlank: false
        },{
            emptyText: 'Password',
            name: 'user[password]',
            inputType: 'password',
            allowBlank: false
        }];
    }
});
