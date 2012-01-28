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
            width: 400,
            height: 300,
            constrain: true,
            maximizable: true,
            minimizable: true,
            autoShow: true,
            tools: [{
                type:'help',
                tooltip: 'Open feedback application',
                text: 'Feedback',
                launcher: {
                    appId: 'Feedback',
                    params: {
                        hello: 'test'
                    }
                }
            }]
        }, null);

        me.callParent(arguments);
    }
});