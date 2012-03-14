/**
 * @class Viewport
 * @extends Ext.container.Viewport
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop viewport widget
 */
Ext.define('Apps.userManager.view.Viewport', {
    extend: 'Ext.window.Window',
    alias: 'widget.userManager_viewport',

    id: 'userManager-viewport',
    appViewport: true,

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            title: Kebab.I18nHelper.t('userManager.title'),
            width: Apps.userManager.Config.getViewport().width,
            height: Apps.userManager.Config.getViewport().height,
            constrain: true,
            maximizable: true,
            minimizable: true,
            autoShow: true,
            border: false,
            layout: 'border',
            defaults: {
                split: true,
                frame: true
            },
            items: [{
                width:250,
                minWidth:200,
                hidden: false,
                collapsible: true,
                region: 'west',
                collapseMode: 'mini',
                xtype: 'userManager_userInvitationForm'
            },{
                flex:1,
                region: 'center',
                layout:'fit',
                items: [{
                    xtype: 'userManager_userList'
                }],
                bbar: [{
                    iconCls: 'icon-progressbar',
                    action: 'showLimits'
                }]
            }]
        });

        me.callParent(arguments);
    }
});