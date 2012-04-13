/**
 * @class Launcher
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Kernel Desktop launcher component
 */
Ext.define('Kebab.kernel.component.Launcher', {
    alternateClassName: 'Kebab.Launcher',
    extend: 'Ext.container.Container',
    alias: 'widget.kebab_launcher',

    requires: [
        'Ext.Img'
    ],

    baseCls: 'kebab-launcher',

    initComponent: function() {
        var me = this,
            imagePath = !me.img
                ? Kebab.getRoot('apps/' + me.launcher.appId + '/resources/launcher.svg')
                : Kebab.getRoot('resources/images/icons/svg/' + me.img.toLowerCase() + '.svg');

        Ext.apply(me, {
            cls: me.baseCls,
            items: Ext.create('Ext.Img', {
                width: me.size || 48,
                height: me.size || 48,
                src: Kebab.AssetHelper.cacheControl(imagePath)
            })
        });

        try {
            if (me.launcher.appId) {
                Ext.apply(me, {
                    id:me.launcher.appId + '-launcher',
                    launcher:{
                        appId: me.launcher.appId
                    }
                })
            }
        } catch (e) {}

        me.callParent(arguments);
    },

    listeners: {
        render: function(cp) {
            var dockPosition;

            try {
                dockPosition = cp.ownerCt.dock;
            } catch (e) {
                dockPosition: 'left';
            }

            cp.qtip = Ext.create('Ext.tip.ToolTip', {
                target: cp.getEl(),
                showDelay: 75,
                hideDelay: 75,
                maxWidth: 200,
                anchor:  dockPosition == 'left' ? 'right' : 'top',
                html: cp.tooltip || 'Click to open'
            });

            cp.getEl().on('click', function(e) {
                e.stopEvent();
                cp.fireEvent('click', cp, e);
            });

            /*
            cp.getEl().on('mouseover', function(e) {
                e.stopEvent();
                cp.getEl().down('img').scale(300,300);
                cp.fireEvent('mouseover', cp, e);
            });
            */
        }
    },

    setTooltip: function(text) {
        this.qtip.update(text);
    }
});