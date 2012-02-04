/**
 * @class TenantInfo
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.desktop.view.menu.Indicators', {
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
            defaults: {
                scale: 'small'
            },
            items: me.buildItems()
        },null);

        me.callParent(arguments);
    },

    /**
     * Build the dock items
     */
    buildItems: function() {

        return ['->',{
            text: Kebab.helper.config('locale').default_locale.toUpperCase()
        },{
            text: Ext.Date.format(new Date(), 'F j, Y, H:i'),
            menu: [Ext.create('Ext.panel.Panel', {
                frame: true,
                items: [{
                    xtype: 'datepicker'
                }]
            })]
        },{
            iconCls: 'icon-kernel-user',
            tooltip: Kebab.helper.config('user').name,
            launcher: {
                appId: 'Profile'
            }
        },{
            iconCls: 'icon-kernel-bug',
            tooltip: Kebab.desktop.I18n.t('sendFeedback'),
            launcher: {
                appId: 'Feedback'
            }
        },{
            iconCls: 'icon-kernel-power',
            tooltip: Kebab.desktop.I18n.t('shutdown'),
            action: 'signOut'
        }];
    }
});