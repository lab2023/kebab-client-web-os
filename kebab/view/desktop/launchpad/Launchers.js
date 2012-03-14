/**
 * @class Launchpad
 * @extends Ext.window.Window
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop launchpad widget
 */
Ext.define('Kebab.view.desktop.launchpad.Launchers', {
    extend: 'Ext.view.View',
    alias : 'widget.desktop_launchpad_launchers',

    requires: [
        'Ext.XTemplate'
    ],

    id: 'desktop-launchpad-launchers',

    initComponent: function() {
        var me = this,
            launcherImgPath = Kebab.getRoot('apps/{[values.sys_name]}/resources/launcher.svg'),
            launchersWidth = Kebab.DesktopConfig.getLaunchpad().launchers.width,
            launchersHeight = Kebab.DesktopConfig.getLaunchpad().launchers.height,
            launchersSize = Kebab.DesktopConfig.getLaunchpad().launchers.size,
            tpl = Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<div style="width:' + launchersWidth + 'px; height:' + launchersHeight + 'px; " title="Department: {appDepartment}" class="launchers">',
                        '<img src="' + Kebab.AssetHelper.cacheControl(launcherImgPath) + '" width="' + launchersSize + '"/>',
                        '<p>{appTitle}</p>',
                '</div>',
            '</tpl>'
            );

        Ext.apply(me,{
            deferInitialRefresh: false,
            store: Ext.create('Ext.data.Store', {
                fields: ['sys_name', 'sys_department', 'appTitle', 'appDepartment'],
                sorters: [{
                    property: 'appTitle',
                    direction: 'ASC'
                }, {
                    property: 'appDepartment',
                    direction: 'ASC'
                }]
            }),
            tpl: tpl,
            itemSelector: 'div.launchers',
            overItemCls: 'launchers-hover',
            multiSelect: false,
            singleSelect: true,
            autoScroll  : true
        }, null);

        me.callParent(arguments);
    }
});