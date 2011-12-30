/**
 * @class Viewport
 * @extends Ext.container.Viewport
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop viewport widget
 */
Ext.define('Kebab.desktop.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.viewport',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            layout: 'fit',
            items: [{
                xtype: 'desktop_index'
            }]
        });

        me.callParent(arguments);
    }
});