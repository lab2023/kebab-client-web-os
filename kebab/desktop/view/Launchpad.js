/**
 * @class ForgotPassword
 * @extends Ext.window.Window
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop launchpad widget
 */
Ext.define('Kebab.desktop.view.Launchpad', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.desktop_launchpad',

    id: 'desktop-index',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            title: 'Launchpad',
            frame:true,
            layout: 'fit',
            renderTo: 'desktop-index-body'
        }, null);

        me.callParent(arguments);
    }
});