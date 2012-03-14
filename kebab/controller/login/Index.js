/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.controller.login.Index', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'login.Window',
        'login.Index',
        'login.Logo',
        'login.Menu'
    ],

    refs: [{
        ref: 'menu',
        selector: 'login_menu'
    },{
        ref: 'window',
        selector: 'login_window'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

         me.control({
             // Reset password form show button
              'login_window button[action="password_reset"]': {
                  click: me.showResetPassword
              }
         });

        // Call parent
        me.callParent(arguments);
    },

    showResetPassword: function() {
        Ext.widget('login_passwordReset', {
            autoShow: true
        })
    }
});
