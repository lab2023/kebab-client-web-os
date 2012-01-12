/**
 * @class Viewport
 * @extends Ext.container.Viewport
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop viewport widget
 */
Ext.define('Apps.profile.view.Viewport', {
    extend: 'Ext.window.Window',
    alias: 'widget.profile_viewport',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            width: 400,
            autoShow: true,
            height: 300,
            constrain: true,
            shadow: false,
            title: 'Profile Application',
            closeAction: 'hide'
        });
        me.callParent(arguments);
    }
});