/**
 * Kebab Kernel EventBusManager
 *
 * Thanks for great contributing.
 * "theluk" sencha user was made by the original design of this class.
 *
 * See details:
 * http://www.sencha.com/forum/showthread.php?139122-EventBus-causing-Problems-when-using-multiple-Application-Classes
 *
 * @class EventBusManager
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 */
Ext.define('Kebab.kernel.EventBusManager', {
    alternateClassName: 'Kebab.EventBusManager',
    singleton: true,

    /**
     * Class configuration
     *
     * @param {Ext.util.MixedCollection} busManager
     */
    config: {
        busManager: Ext.create('Ext.util.MixedCollection')
    },

    /**
     * Class constructor
     *
     * @param {Object} config
     */
    constructor: function (config) {
        var me = this, el;

        // Init the class configuration
        me.initConfig(config);

        // Override  Ext.Component fire event
        Ext.override(Ext.Component, {
            fireEvent: function (ev) {
                var busManager = me.getBusManager();

                if (Ext.util.Observable.prototype.fireEvent.apply(this, arguments) !== false) {
                    var goOn = true;

                    for (var i = 0; i < busManager.getCount(); i++) {
                        var eventBus = busManager.getAt(i);

                        if (eventBus.dispatch.call(eventBus, ev, this, arguments) === false) {
                            goOn = false;
                            break;
                        }
                    }
                    return goOn;
                }

                return false;
            }
        });

        // Override  Ext.app.EventBus constructor
        Ext.override(Ext.app.EventBus, {
            constructor: function () {
                this.mixins.observable.constructor.call(this);
                this.bus = {};
                me.addBus(this);
            }
        });

        // Call parent
        me.callParent(arguments);
    },

    /**
     * Add new bus from busManager
     * @param {Object/Ext.app.EventBus} bus
     */
    addBus: function (bus) {
        var me = this;
        me.getBusManager().add(bus);
    },
});