/**
 * @class Viewport
 * @extends Ext.container.Viewport
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop viewport widget
 */
Ext.define('Apps.feedback.view.Viewport', {
    extend: 'Ext.window.Window',
    alias: 'widget.feedback_viewport',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            width: 400,
            autoShow: true,
            height: 300,
            constrain: true,
            shadow: false,
            title: 'Feedback Application',
            closeAction: 'hide'
        });
        me.callParent(arguments);
    }
});