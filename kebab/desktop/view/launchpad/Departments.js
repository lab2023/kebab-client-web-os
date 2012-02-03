/**
 * @class Launchpad
 * @extends Ext.window.Window
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop launchpad widget
 */
Ext.define('Kebab.desktop.view.launchpad.Departments', {
    extend: 'Ext.view.View',
    alias : 'widget.desktop_launchpad_departments',

    requires: [
        'Ext.XTemplate',
        'Ext.data.JsonStore'
    ],

    id: 'desktop-launchpad-departments',

    initComponent: function() {
        var me = this,
            tpl = Ext.create('Ext.XTemplate',
            '<h1>' + Kebab.desktop.I18n.t('departments') + '<span>All</span></h1>',
            '<tpl for=".">',
                '<div class="departments">',
                    '{appDepartment}',
                '</div>',
            '</tpl>'
            );

        Ext.apply(me,{
            deferInitialRefresh: false,
            store: Ext.create('Ext.data.Store', {
                fields: ['sys_name', 'sys_department', 'appTitle', 'appDepartment'],
                sorters: [{
                    property: 'appDepartment',
                    direction: 'ASC'
                }]
            }),
            tpl: tpl,
            itemSelector: 'div.departments',
            overItemCls: 'departments-hover',
            selectedItemCls: 'departments-selected',
            multiSelect: false,
            singleSelect: true,
            autoScroll  : true
        }, null);

        me.callParent(arguments);
    }
});