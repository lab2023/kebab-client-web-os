/**
 * @class Base
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
                    me.tools = [{
                        type: 'help',
                        tooltip: 'Open feedback application',
                        launcher: {
                            appId: 'Feedback'
                        }
                    }];
                }

                me.callParent(arguments);
            }
        });
    }
});

Ext.onReady(function() {
    Kebab.kernel.override.Window.init();
});