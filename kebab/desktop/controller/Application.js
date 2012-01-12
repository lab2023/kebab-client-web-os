/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.desktop.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        manager: Ext.create('Ext.util.MixedCollection')
    },

    refs: [{
        ref: 'index',
        selector: 'desktop_index'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        // Init application config
        me.initConfig(arguments);

        me.control({
            // Reset password form show button
            'desktop_dock button[ref="launcher"]': {
                click: me.launchApplication
            },
            // Reset password form show button
            'desktop_menu button': {
                click: function() {
                    console.log(arguments);
                }
            }
        });

        // Call parent
        me.callParent(arguments);
    },

    launchApplication: function(btn) {
        var me = this,
            appManager = me.getManager(),
            currentApp = appManager.filter('id', btn.application);

        console.log('launchApp');

        if(currentApp.getCount() == 0) {

            var app = Ext.create(btn.application, {
                ownerApp: me.application,
                launcher: btn
            });

            /*
            app.on('launch', function() {
                var eventbus = me.application.eventbus;

                Ext.override(Ext.Component, {
                    fireEvent: function(ev) {
                        console.log(arguments);
                        if (Ext.util.Observable.prototype.fireEvent.apply(this, arguments) !== false) {
                            return eventbus.dispatch.call(eventbus, ev, this, arguments);
                        }
                        return false;
                    }
                });
            });*/

            appManager.add(app);
            console.log('new');

        } else {
            currentApp.first().getViewport().show();
            console.log('exist');
        }
    }
});
