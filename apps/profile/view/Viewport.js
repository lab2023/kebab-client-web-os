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

    id: 'profile-viewport',
    appViewport: true,

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            title: Apps.profile.I18n.t('appTitle'),
            width: Apps.profile.Config.getViewport().width,
            height: Apps.profile.Config.getViewport().height,
            constrain: true,
            maximizable: false,
            minimizable: true,
            autoShow: true,
            border: false,
            resizable: false,
            layout:'card',
            activeItem: 0,
            defaults: {
                frame: true,
                padding: 10
            },
            items: [{
                xtype: 'profile_userForm'
            },{
                xtype: 'profile_passwordForm'
            }]
        }, null);

        me.callParent(arguments);
    }
});