/**
 * @class Menu
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.view.login.Menu', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.login_menu',

    id: 'login-menu',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            dock: Kebab.LoginConfig.getMenu().position,
            border: false,
            cls: 'linear-gradient',
            style: 'border-bottom:1px solid #D0D0D0 !important;', // TODO move css
            height: Kebab.LoginConfig.getMenu().height,
            defaults: {
                scale: 'small'
            },
            items: me.buildItems()
        });

        me.callParent(arguments);
    },

    /**
     * Build the dock items
     */
    buildItems: function() {
        var locale = Kebab.getLocale();
        return [{
            xtype: 'tbtext',
            style: 'font-size: 110%; font-weight: 800 !important',
            text: Kebab.getBootstrap('tenant')['name']
        },'->', {
            text: Kebab.getLocale().toUpperCase(),
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
        },{
            text: Ext.Date.format(new Date(), 'F j, Y, H:i'),
            menu: [Ext.create('Ext.panel.Panel', {
                items: [{
                    xtype: 'datepicker'
                }]
            })]
        }];

    }
});
