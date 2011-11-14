/**
 * @class Loader
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop controller
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

        // Listen tenant store loading complete status
        me.getTenantsStore().on('load', me.onRegisterCompleted, me);

        // Call parent
        me.callParent(arguments);
    },

    /**
     * Register tenant and get token data
     */
    onRegister: function() {
        var me = this;

        me.getTenantsStore().load();
    },

    /**
     * Register completed
     */
    onRegisterCompleted: function(store, data, success) {
        var me = this, rec;

        rec = store.getAt(0);

        // If token data correct
        if (success && rec.data.token) {

            // TODO Set all ajax or jsonp requests global token parameter eg: &token=123456

            me.application.getController('Loader')
                .onMsg('Kebab Web OS started by <strong>' +rec.data.tenant + '</strong>')
                .onHide();

            me.application.getViewport().add({
                title: rec.data.tenant,
                frame: true,
                html: 'Token is : ' +  rec.data.token,
                fbar: [{
                    text: 'Exit',
                    scale: 'large'
                }]
            });

        } else {
            me.application.getController('Loader').onMsg('Tenant not registered. Please <a href="">sign up!</a>');
            me.application.getController('Loader').getLoaderMask().getMsg().setStyle({
                background : 'transparent',
                color : 'gray'
            });
            me.application.getController('Loader').getLoaderMask().getMsg().up('p').addCls('disabled');
        }
    }
});
