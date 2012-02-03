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

    id: 'feedback-viewport',
    appViewport: true,

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            title: Apps.feedback.I18n.t('appTitle'),
            width: Apps.feedback.Config.getViewport().width,
            height: Apps.feedback.Config.getViewport().height,
            border: false,
            constrain: true,
            maximizable: true,
            minimizable: true,
            autoShow: true,
            layout: 'fit',
            items: [{
                xtype: 'feedback_form'
            }]
        }, null);

        me.callParent(arguments);
    }
});