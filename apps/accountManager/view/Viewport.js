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
            title: Kebab.I18nHelper.t('accountManager.title'),
            width: Apps.accountManager.Config.getViewport().width,
            height: Apps.accountManager.Config.getViewport().height,
            border: true,
            constrain: true,
            maximizable: true,
            minimizable: true,
            autoShow: true,
            layout: {
                type: 'hbox',
                align : 'stretch',
                pack  : 'start'
            },
            defaults: {
                frame:true,
                flex:2,
                margin: 3
            },
            items: [{
                width:221,
                frame: false,
                xtype: 'accountManager_accountDetails'
            },{
                xtype: 'accountManager_paymentHistoryList'
            }]
        }, null);

        me.callParent(arguments);
    }
});