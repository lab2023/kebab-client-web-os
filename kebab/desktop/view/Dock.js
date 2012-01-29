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
        //'Ext.ux.BoxReorderer' TODO Enable for ext-4.1.0 stable release
    ],

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            style: 'border-radius: 10px !important; margin: 0 50px 5px;' +
                'padding: 5px; border:1px solid #ccc !important;', // TODO move css
            dock: 'bottom',
            autoWidth: false,
            defaults: {
                scale: 'large',
                reorderable: true
            },
            //plugins: Ext.create('Ext.ux.BoxReorderer'), TODO Enable for ext-4.1.0 stable release
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
            text: 'Applications',
            menu: [{
                text: 'Profile',
                launcher: {
                    appId: 'Profile'
                }

            },{
                text: 'Feedback',
                launcher: {
                    appId: 'Feedback'
                }
            }]
        }, {
            id: 'feedback-launcher',
            pinned: true,
            text: 'Feedback',
            launcher: {
                appId: 'Feedback'
            }
        }];

    }
});
