/**
 * @class LoginForm
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login Logo
 */
Ext.define('Kebab.view.login.PasswordReset', {
    extend: 'Ext.window.Window',
    alias: 'widget.login_passwordReset',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            width: 330,
            constrain: true,
            modal: true,
            autoHeight: true,
            resizable: false,
            title: Kebab.I18nHelper.t('kebab.buttons.passwordReset'),
            border: false,
            layout: 'fit',
            items: [{
                xtype: 'form',
                padding: 10,
                frame: true,
                defaults: {
                    anchor: '100%'
                },
                buttonAlign: 'center',
                defaultType: 'textfield',
                items: me.buildFormItems(),
                buttons: me.buildFormButtons()
            }]
        });

        me.callParent(arguments);
    },

    buildFormItems: function() {
        return [{
            border: false,
            xtype: 'displayfield',
            value: Kebab.I18nHelper.t('kebab.infos.forgotPassword')
        },{
            emptyText: 'Type your e-mail here', // TODO i18n
            name: 'email',
            vtype: 'email',
            allowBlank: false
        }];
    },

    buildFormButtons: function() {
        return [{
            text: Kebab.I18nHelper.t('kebab.buttons.cancel'),
            action: 'cancel',
            handler: function(btn) {
                btn.up('window').close();
            }
        },{
            text: Kebab.I18nHelper.t('kebab.buttons.send'),
            action: 'submit',
            formBind: true,
            disabled: true
        }];
    }
});
