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
        msg: null,
        defaultMsg: 'Loading please wait',
        animSettings: {
            delay: 500,
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
            cmp.getMsg().update(cmp.getDefaultMsg());
        }
    },

    /**
     * Component onShow override
     */
    onShow: function() {
        var me = this;

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

        me.getEl().fadeOut(
            Ext.apply(me.getAnimSettings(), {
                callback: function() {
                    me.fireEvent('hide', me);
                }
            })
        );
    },

    onMsg: function(msg) {
        var me = this;
        me.getMsg().update(msg);
    }
});