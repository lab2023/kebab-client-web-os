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

    id: 'loader-mask',

    config: {
        msg: null, // Message element reference
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
            floating :true,
            shadow: false,
            autoShow: true,
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
        }
    },

    /**
     * Component onShow override
     */
    onShow: function() {
        var me = this;

        // Before show and Fade-in loader element
        me.getEl().show().fadeIn(Ext.apply(me.getAnimSettings(), {
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

        // Fade-out and after hide loader element
        me.getEl().fadeOut(
            Ext.apply(me.getAnimSettings(), {
                callback: function() {
                    me.getEl().hide();
                    // Set default loading message
                    me.getMsg().update(me.getDefaultMsg());
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

        me.getMsg().update(msg);
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