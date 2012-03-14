/**
 * @class Viewport
 * @extends Ext.container.Viewport
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop viewport widget
 */
Ext.define('Kebab.view.login.Index', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.login_index',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            layout: 'fit',
            //style: 'opacity: 0;',  // TODO think ?
            border: false,
            bodyStyle: 'background: transparent !important; border:0 !important; padding: 2px;', // TODO move css
            dockedItems: [{
                xtype: 'login_menu'
            }],
            items: [{
                xtype: 'login_window'
            }]
        });

        me.callParent(arguments);
    }
});