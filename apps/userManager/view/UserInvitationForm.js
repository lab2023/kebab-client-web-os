/**
 * @class SignUp
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop viewport widget
 */
Ext.define('Apps.userManager.view.UserInvitationForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.userManager_userInvitationForm',

    id: 'userManager-userInvitationForm',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            iconCls: 'icon-add',
            padding: 10,
            title:  Kebab.I18nHelper.t('userManager.texts.userInvitation'),
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            buttonAlign: 'center',
            defaultType: 'textfield',
            defaults: {
                labelAlign: 'top',
                labelSeparator: '',
                anchor: '100%'
            },
            items: me.buildItems(),
            buttons: me.buildButtons()
        }, null);

        me.callParent(arguments);
    },

    buildItems: function() {
        var me = this;

        return [{
            fieldLabel: Kebab.I18nHelper.t('kebab.texts.name'),
            name: 'name',
            allowBlank: false
        },{
            fieldLabel: Kebab.I18nHelper.t('kebab.texts.email'),
            name: 'email',
            vtype: 'email',
            allowBlank: false
        }];
    },

    buildButtons: function() {
        return [{
            iconCls: 'icon-cancel',
            text: Kebab.I18nHelper.t('kebab.buttons.cancel'),
            action: 'closeUserInvitationForm'
        },{
            iconCls: 'icon-email',
            text: Kebab.I18nHelper.t('kebab.buttons.send'),
            action: 'sendUserInvitation',
            formBind: true,
            disabled: true
        }];
    }
});