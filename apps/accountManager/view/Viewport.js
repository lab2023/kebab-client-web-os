/**
 * @class Viewport
 * @extends Ext.container.Viewport
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop viewport widget
 */
Ext.define('Apps.accountManager.view.Viewport', {
    extend: 'Ext.window.Window',
    alias: 'widget.accountManager_viewport',

    id: 'accountManager-viewport',
    appViewport: true,

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            title: Apps.accountManager.I18n.t('appTitle'),
            width: Apps.accountManager.Config.getViewport().width,
            height: Apps.accountManager.Config.getViewport().height,
            border: false,
            constrain: true,
            maximizable: true,
            minimizable: true,
            autoShow: true,
            layout: 'fit'
        }, null);

        me.callParent(arguments);
    }
});