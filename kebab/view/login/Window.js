/**
 * @class Viewport
 * @extends Ext.container.Viewport
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop viewport widget
 */
Ext.define('Kebab.view.login.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.login_window',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            cls: 'linear-gradient',
            bodyStyle: 'text-align:center; background:transparent !important;',
            width: 330,
            autoHeight: true,
            padding: 10,
            draggable: false,
            closable: false,
            autoShow: true,
            shadow: false,
            preventHeader: true,
            resizable:false,
            border: false,
            buttonAlign: 'center',
            items: me.buildItems(),
            buttons: me.buildButtons()
        });

        me.callParent(arguments);
    },

    listeners: {
        render: function(w) {
            Ext.fly(window).on('resize', function(){
                w.center();
            });
        }
    },

    buildItems: function() {
        return [{
            xtype: 'login_logo'
        },{
            xtype: 'panel',
            bodyStyle: 'background: transparent !important;',
            frame: false,
            border: false,
            margin: 10,
            items: [{
                xtype: 'login_signIn'
            }]
        }];
    },

    buildButtons: function() {
        var locale = Kebab.getLocale();
        return [{
            action: 'password_reset',
            text: Kebab.I18nHelper.t('kebab.buttons.passwordReset'),
            width: 125
        },{
            action: 'languages',
            text: Kebab.I18nHelper.t('kebab.buttons.selectLanguage'),
            width: 125,
            menu: [{
                text: 'English',
                locale: 'en',
                checked: locale == 'en' ? true : false,
                group: 'locale'
            },{
                text: 'Turkish',
                locale: 'tr',
                checked: locale == 'tr' ? true : false,
                group: 'locale'
            },{
                text: 'Russian',
                locale: 'ru',
                checked: locale == 'ru' ? true : false,
                group: 'locale'
            }]
        }];
    }
});