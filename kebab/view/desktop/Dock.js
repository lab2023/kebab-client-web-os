/**
 * @class Index
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.view.desktop.Dock', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.desktop_dock',

    id: 'desktop-dock',

    /**
     * Required classes
     */
    requires: [
        'Ext.ux.BoxReorderer'
    ],

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            /*style: 'opacity: 0; border-radius: 10px !important; margin: 0 100px 5px;' +
                    'padding: 5px; border:1px solid #ccc !important;', // TODO move css*/
            dock: Kebab.DesktopConfig.getDock().position,
            defaults: {
                size: Kebab.DesktopConfig.getDock().launchers.size,
                reorderable: true
            },
            plugins: Ext.create('Ext.ux.BoxReorderer'),
            items: me.buildItems()
        });

        me.callParent(arguments);
    },

    listeners: {
        render: function(tb) {
            tb.getEl().fadeIn({
                duration: 800
            });
        }
    },

    /**
     * Build the dock items
     */
    buildItems: function() {

        return [{
            xtype: 'kebab_launcher',
            tooltip: Kebab.I18nHelper.t('kebab.launchers.showLaunchpad'),
            action: 'showLaunchpad',
            img: 'launchpad',
            reorderable: false
        },{
            xtype: 'kebab_launcher',
            tooltip: Kebab.I18nHelper.t('kebab.launchers.showDesktop'),
            reorderable: false,
            action: 'showDesktop',
            img: 'desktop'
        },{
            xtype: 'tbseparator',
            reorderable: false
        }];

    }
});
