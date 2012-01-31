/**
 * @class Index
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.desktop.view.Dock', {
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
            style: 'border-radius: 10px !important; margin: 0 100px 5px;' +
                'padding: 5px; border:1px solid #ccc !important;', // TODO move css
            dock: 'bottom',
            defaults: {
                scale: 'large',
                reorderable: true
            },
            plugins: Ext.create('Ext.ux.BoxReorderer'),
            items: me.buildItems()
        }, null);

        me.callParent(arguments);
    },

    /**
     * Build the dock items
     */
    buildItems: function() {

        return [{
            applicationsLauncher: true,
            reorderable: false,
            tooltip: 'Show launchpad',
            text: 'Apps',
            menu: [{
                text: 'Profile',
                iconCls: 'profile-viewport',
                launcher: {
                    appId: 'Profile'
                }

            },{
                text: 'Feedback',
                iconCls: 'feedback-viewport',
                launcher: {
                    appId: 'Feedback'
                }
            }]
        },{
            text: '|',
            reorderable: false,
            showDesktop: true,
            tooltip: 'Minimize all applications'
        },{
            id: 'feedback-launcher',
            pinned: true,
            iconCls: 'feedback-launcher',
            tooltip: 'Feedback',
            launcher: {
                appId: 'Feedback'
            }
        }];

    }
});
