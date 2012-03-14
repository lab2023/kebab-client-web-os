/**
 * @class Window
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel window overrides
 */
Ext.define('Kebab.kernel.override.Window', {
    singleton: true,

    init: function() {
        Ext.override(Ext.window.Window, {

            constructor: function () {
                var me = this;

                if (me.appViewport === true) {

                    me.shadow = false;
                    me.collapsible = true;
                    me.animCollapse = false;
                }

                me.callParent(arguments);
            }
        });
    }
});
Ext.onReady(Kebab.kernel.override.Window.init, Kebab.kernel.override.Window);