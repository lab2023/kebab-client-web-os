/**
 * @class Index
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.desktop.view.Dock', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.desktop_dock',

    id: 'desktop-dock',

    /**
     * Required classes
     */
    requires: [
        'Ext.ux.BoxReorderer'
    ],

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            dock: 'bottom',
            autoWidth: false,
            defaults: {
                scale: 'large',
                reorderable: true
            },
            plugins: Ext.create('Ext.ux.BoxReorderer'),
            items: me.buildItems()
        });

        me.callParent(arguments);
    },

    /**
     * Build the dock items
     */
    buildItems: function() {

        return [{
            reorderable: false,
            text: 'Kebab'
        },{
            text: 'App 1'
        },{
            text: 'App 2'
        },{
            text: 'App 3'
        },{
            text: 'App 4'
        }];
        
    }
});