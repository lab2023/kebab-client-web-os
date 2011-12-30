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
        });

        me.callParent(arguments);
    },

    /**
     * Build the dock items
     */
    buildItems: function() {

        return ['->',{
            text: 'En'
        },{
            text: Ext.Date.format(new Date(), 'F j, Y, H:i')
        },{
            text: 'Exit',
            handler: function() {
                Kebab.helper.redirect('login.html');
            }
        }];
    }
});