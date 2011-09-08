/**
 * @class Shortcuts
 * @extends Ext.Component
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop shortcuts widget
 */
Ext.define('Kebab.view.desktop.Shortcuts', {
    extend: 'Ext.view.View',
    
    alias: 'widget.desktop_shortcuts',

    id: 'kebab-desktop-shortcuts',

    initComponent: function() {
        
        var me = this;

        var tpl = [
            '<tpl for=".">',
                '<div class="kebab-desktop-shortcut" id="{name}-shortcut">',
                    '<div class="kebab-desktop-shortcut-icon {iconCls}"></div>',
                    '<span class="kebab-desktop-shortcut-text">{name}</span>',
                '</div>',
            '</tpl>',
            '<div class="x-clear"></div>'
        ];

        Ext.apply(me, {
            store: 'Shortcuts',
            overItemCls: 'x-view-over',
            trackOver: true,
            itemSelector: 'div.kebab-desktop-shortcut',
            tpl: new Ext.XTemplate(tpl)
        });

        this.callParent(arguments);
    }
});