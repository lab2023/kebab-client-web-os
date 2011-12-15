/**
 * @class Mask
 * @extends Ext.window.Window
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login index window widget
 */
Ext.define('Kebab.view.loader.Mask', {
    extend: 'Ext.Component',
    alias : 'widget.loader_mask',

    config: {
        msg: null, // Message element reference
        zSeed: 99999, // Default z-index value
        defaultMsg: 'Loading please wait',
        animSettings: {
            duration: 800,
            easing: 'easeOut'
        }
    },

    initComponent: function() {
        var me = this;

        // Init the config
        me.initConfig();

        Ext.apply(me, {
            id: 'loader-mask',
            floating :true,
            shadow:false,
            zIndex: me.getZSeed(),
            renderTo: Ext.getBody(),
            renderTpl: [
                '<p>',
                    '<span id="{id}-msg">{msg}</span>',
                '</p>'
            ],
            renderData: {
                msg: me.getDefaultMsg()
            },
            childEls: ["msg"]
        });

        // Setup loaders msg element: ref is 'p' tag
        me.setMsg(me.msg);

        me.callParent(arguments);
    },

    /**
     * Component listeners
     */
    listeners: {
        beforerender: function(cmp) {
            // Remove legacy loader mask element
            Ext.fly('loader-mask').remove();
        },
        hide: function(cmp) {
            // Set z-index value = 0 for component element  (send to back)
            cmp.getEl().setZIndex(0);

            // Set default loading message
            cmp.getMsg().update(cmp.getDefaultMsg());
        }
    },

    /**
     * Component onShow override
     */
    onShow: function() {
        var me = this;

        // Set default z-index value for component element
        me.getEl().setZIndex(me.getZSeed());

        // Fade-in loader element
        me.getEl().fadeIn(Ext.apply(me.getAnimSettings(), {
            callback: function() {
                me.fireEvent('show', me);
            }
        }));
    },

    /**
     * Component onHide override
     */
    onHide: function() {
        var me = this;

        // Fade-out loader element
        me.getEl().fadeOut(
            Ext.apply(me.getAnimSettings(), {
                callback: function() {
                    me.fireEvent('hide', me);
                }
            })
        );
    },

    /**
     * Update loader child msg element
     * @param msg String
     */
    onMsg: function(msg) {
        var me = this;

        //me.getMsg().update(msg);
    },

    /**
     * Disable component
     */
    onDisable: function() {
        var me = this;

        me.getMsg().setStyle({
            background : 'transparent',
            color : 'gray'
        }).up('p').addCls('disabled');
    }
});