/**
 * @class Viewport
 * @extends Ext.container.Viewport
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop viewport widget
 */
Ext.define('Kebab.register.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.register_viewport',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items: [{
                xtype: 'register_signUp'
            }]
        }, null);

        me.callParent(arguments);
    }
});