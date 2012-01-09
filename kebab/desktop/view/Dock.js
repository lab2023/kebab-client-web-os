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
            style: 'border-radius: 10px !important; margin: 0 50px 5px;' +
                'padding: 5px; border:1px solid #ccc !important;', // TODO move css
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
            text: 'App 1',
            handler: function() {
            }
        },{
            text: 'App 2'
        },{
            text: 'App 3'
        },{
            text: 'App 4'
        }];
        
    }
});
