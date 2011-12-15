/**
 * @class Login
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login controller
 */
Ext.define('Kebab.controller.login.Index', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'login.Index',
    ],

    /**
     * Controller initializer
     */
    init: function() {

        var me = this;

        /**
         * Control events
         */
        me.control({
            'login_signin': {
                render: function() {
                    console.log(arguments);
                }
            }
        });
    },

    /**
     * Show login window
     */
    onIndex: function() {
        var me = this,
            view = Ext.create(me.getView('login.Index'));
        
        me.application.getViewport().add(view);
        me.application.getViewport().doLayout();
    }
});
