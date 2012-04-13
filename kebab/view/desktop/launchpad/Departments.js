/**
 * @class Launchpad
 * @extends Ext.window.Window
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop launchpad widget
 */
Ext.define('Kebab.view.desktop.launchpad.Departments', {
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
            '<h1>' + Kebab.I18nHelper.t('kebab.departments.title') + '<span>' + Kebab.I18nHelper.t('kebab.all') + '</span></h1>',
            '<tpl for=".">',
                '<div class="departments">',
                    '{department}',
                '</div>',
            '</tpl>'
            );

        Ext.apply(me,{
            deferInitialRefresh: false,
            store: Ext.create('Ext.data.Store', {
                fields: ['sys_name', 'sys_department', 'title', 'department'],
                sorters: [{
                    property: 'department',
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