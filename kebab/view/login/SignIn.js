/**
 * @class LoginForm
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login Logo
 */
Ext.define('Kebab.view.login.SignIn', {
    extend: 'Ext.form.Panel',
    alias: 'widget.login_signIn',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            padding: 10,
            border: false,
            bodyStyle: 'background:transparent !important;',
            buttonAlign: 'center',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%',
                height: 32
            },
            items: me.buildItems()
        });

        me.callParent(arguments);
    },

    buildItems: function() {
        return [{
            emptyText: Kebab.I18nHelper.t('kebab.texts.email'),
            name: 'email',
            allowBlank: false
        },{
            emptyText: Kebab.I18nHelper.t('kebab.texts.password'),
            name: 'password',
            inputType: 'password',
            allowBlank: false
        }];
    }
});