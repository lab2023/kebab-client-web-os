/**
 * @class TenantInfo
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.view.login.menu.Indicators', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.login_menu_indicators',

    id: 'login-menu-indicators',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            width: 500,
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

        return ['->', {
            xtype: 'tbtext',
            text: Ext.Date.format(new Date(), 'F j, Y, H:i')
        }];
    }
});