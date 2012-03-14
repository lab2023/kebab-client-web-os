/**
 * @class TenantInfo
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.view.desktop.menu.Indicators', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.desktop_menu_indicators',

    id: 'desktop-menu-indicators',

    requires: [
        'Ext.picker.Date'
    ],

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: me.buildItems()
        });

        me.callParent(arguments);
    },

    /**
     * Build the dock items
     */
    buildItems: function() {
        var locale = Kebab.getLocale();
        return ['->',{
            text: locale.toUpperCase(),
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
        },{
            iconCls: 'icon-kernel-user',
            text: Kebab.getBootstrap('user')['name'],
            launcher: {
                appId: 'profile'
            }
        },{
            iconCls: 'icon-kernel-feedback',
            tooltip: Kebab.I18nHelper.t('kebab.feedback'),
            handler: function() {
                UserVoice.showPopupWidget();
            }
        },{
            iconCls: 'icon-kernel-power',
            tooltip: Kebab.I18nHelper.t('kebab.shutdown'),
            action: 'signOut'
        }];
    }
});