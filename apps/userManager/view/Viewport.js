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
            title: Apps.userManager.I18n.t('appTitle'),
            width: Apps.userManager.Config.getViewport().width,
            height: Apps.userManager.Config.getViewport().height,
            constrain: true,
            maximizable: true,
            minimizable: true,
            autoShow: true,
            border: true,
            layout: {
                type: 'hbox',
                align : 'stretch',
                pack  : 'start'
            },
            tbar: me.buildTbar(),
            defaults: {
                margin: 3,
                frame: true
            },
            items: [{
                width:270,
                hidden: true,
                xtype: 'userManager_userInvitationForm'
            },{
                flex:1,
                xtype: 'userManager_userList'
            }]
        }, null);

        me.callParent(arguments);
    },

    buildTbar: function() {
        return [{
            text: 'Invite new user',
            enableToggle: true,
            iconCls: 'icon-add',
            action: 'inviteUser'
        }];
    }
});