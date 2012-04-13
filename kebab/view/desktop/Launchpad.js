/**
 * @class Launchpad
 * @extends Ext.window.Window
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop launchpad widget
 */
Ext.define('Kebab.view.desktop.Launchpad', {
    extend: 'Ext.window.Window',
    alias : 'widget.desktop_launchpad',

    id: 'desktop-launchpad',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            title: 'Launchpad',
            border:false,
            bodyStyle: 'background: transparent !important;',
            preventHeader: true,
            width: 720,
            height: 500,
            autoShow: true,
            shadow: false,
            closeAction: 'hide',
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'stretch'
            },
            /*bbar: ['->',{
                iconCls: 'icon-arrow_out',
                enableToggle: true,
                handler: function(btn) {
                    if (!me.maximized == true) {
                        btn.setIconCls('icon-arrow_in');
                        me.maximize();
                    } else {
                        btn.setIconCls('icon-arrow_out');
                        me.restore();
                    }
                }
            }], */
            items: [{
                flex: 1,
                xtype: 'desktop_launchpad_launchers'
            },{
                width: 200,
                xtype: 'desktop_launchpad_departments'
            }]
        });

        me.callParent(arguments);
    }
});