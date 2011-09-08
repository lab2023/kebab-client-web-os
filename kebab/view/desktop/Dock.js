/**
 * @class Dock
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop dock toolbar widget
 */
Ext.define('Kebab.view.desktop.Dock', {
    extend: 'Ext.toolbar.Toolbar',

    alias: 'widget.desktop_dock',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            dock: Kebab.config.OS.getOption('desktop').dock.position,
            defaults: {
                scale:'large'
            },
            items  : me.buildItems()
        });

        me.callParent(arguments);
    },

    /**
     * Build the dock items
     */
    buildItems: function() {

        return [{
            tooltip: 'Browse and run your applications',
            iconCls: 'icon-applications dock-icon'
        },{
            tooltip: 'Change to system settings, apperance, see help etc.',
            iconCls: 'icon-system dock-icon'
        },'-', {
            tooltip: 'Show the desktop',
            iconCls: 'icon-desktop dock-icon'
        },'-', '->', '-',{
            iconCls: 'icon-power dock-icon'
        }];

    }
});