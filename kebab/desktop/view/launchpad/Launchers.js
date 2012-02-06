/**
 * @class Launchpad
 * @extends Ext.window.Window
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop launchpad widget
 */
Ext.define('Kebab.desktop.view.launchpad.Launchers', {
    extend: 'Ext.view.View',
    alias : 'widget.desktop_launchpad_launchers',

    requires: [
        'Ext.XTemplate'
    ],

    id: 'desktop-launchpad-launchers',

    launchersSize: 96,

    initComponent: function() {
        var me = this,
            launcherImgPath = Kebab.helper.root('apps/{[values.sys_name.lcFirst()]}/resources/launcher.svg'),
            tpl = Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<div title="Department: {appDepartment}" class="launchers">',
                        '<img src="' + launcherImgPath + '" width="' + me.launchersSize + '"/>',
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