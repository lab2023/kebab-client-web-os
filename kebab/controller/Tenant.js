/**
 * @class Loader
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Tenant controller
 */
Ext.define('Kebab.controller.Tenant', {
    extend: 'Ext.app.Controller',

    /**
     * Controller Models
     * @type Array
     */
    models: [
        'Tenant'
    ],

    /**
     * Controller Stores
     * @type Array
     */
    stores: [
        'Tenants'
    ],
    
    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        // Call onRegister action
        me.onRegister();

        me.addEvents({
            'registered': true,
            'notregistered': true
        });

        // Listen tenant store loading complete status
        me.getTenantsStore().on('load', me._registerCompleted, me);

        // Call parent
        me.callParent(arguments);
    },

    /**
     * Register tenant and get token data
     */
    onRegister: function() {
        var me = this;

        // Load tenants store
        me.getTenantsStore().load();
    },

    /**
     * Register completed
     * @private
     */
    _registerCompleted: function(store, data, success) {
        var me = this, rec;

        // Access loaded tenant data
        rec = store.getAt(0);

        // If token data correct
        if (success && rec.data.authenticity_token) {

            // TODO Set all data proxy requests global token parameter eg: &authenticity_token=123456
            Ext.Ajax.extraParams = {
                authenticity_token: rec.data.authenticity_token
            };

            // Hide loader
            me.getController('Loader')
                .onMsg('Kebab Web OS started by <strong>' + rec.data.tenant.name + '</strong>')
                .onHide();

            //Show login screen
            me.getController('login.Index').onIndex();

            me.fireEvent('registered', rec.data);

        } else {
            me.getController('Loader').
                onMsg('Tenant not registered. Please <a href="">sign up!</a>').
                onDisable();

            me.fireEvent('notregistered');
        }
    }
});
