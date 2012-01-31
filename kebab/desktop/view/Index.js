/**
 * @class ForgotPassword
 * @extends Ext.window.Window
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login index window widget
 */
Ext.define('Kebab.desktop.view.Index', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.desktop_index',

    id: 'desktop-index',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            border: false,
            bodyStyle: 'background: transparent !important; border:0 !important; padding-top: 4px;', // TODO move css
            dockedItems: [{
                xtype: 'desktop_menu'
            },{
                xtype: 'desktop_dock'
            }]
        }, null);

        me.callParent(arguments);
    },

    listeners: {
        render: function(p) {
            p.body.on('contextmenu', function(e) {
                p.fireEvent('bodycontextmenu', e);
            });
        }
    }
});