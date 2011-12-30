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
            style: 'background:transparent !important; border:0 !important;', // TODO move css
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
            text: Kebab.helper.bootData('locale').default_locale.toUpperCase()
        },{
            text: Ext.Date.format(new Date(), 'F j, Y, H:i')
        },{
            text: 'Exit',
            handler: function() {

                Ext.Ajax.request({ // TODO move controller
                    url: Kebab.helper.url('sessions'),
                    method: 'DELETE',
                    success: function() {
                        //Kebab.helper.redirect('login.html');
                    }
                });
            }
        }];
    }
});