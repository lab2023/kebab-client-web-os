/**
 * @class Index
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.view.desktop.Menu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.desktop_menu',

    id: 'desktop-menu',

    /**
     * Required classes
     */
    requires: [
        'Ext.toolbar.TextItem'
    ],

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            dock: 'top',
            border: false,
            style: 'border-bottom:1px solid #D0D0D0 !important;', // TODO move css
            height: 32,
            defaults: {
                border:false,
                cls: 'linear-gradient',
                defaults: {
                    scale: 'small'
                }
            },
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'stretch'
            },
            items: me.buildItems()
        });

        me.callParent(arguments);
    },

    /**
     * Build the dock items
     */
    buildItems: function() {

        return [{
            xtype: 'toolbar',
            items: {
                xtype: 'tbtext',
                style: 'font-weight: 800; font-size:140%;',
                text: Kebab.KernelConfig.getProject().name
            }
        },{
            xtype: 'desktop_menu_info',
            flex: 1
        },{
            xtype: 'desktop_menu_indicators',
            flex: 1
        }];
        
    }
});