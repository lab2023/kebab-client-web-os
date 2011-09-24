/**
 * @class Index
 * @extends Ext.panel.Panel
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop index widget
 */
Ext.define('Kebab.view.desktop.Index', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.desktop_index',

    initComponent: function() {

        var me = this;

        Ext.apply(me, {
            border: false,
            items  : [
                {xtype: 'desktop_wallpaper'},
                {xtype: 'desktop_shortcuts'}
            ],
            dockedItems: [{
                xtype: 'desktop_menuBar'
            },{
                xtype: 'desktop_dock',
            }]
        });
        
        me.callParent(arguments);
    }
});
