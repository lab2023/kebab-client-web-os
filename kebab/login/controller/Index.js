/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.login.controller.Index', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'Logo',
        'Menu'
    ],

    refs: [{
        ref: 'menu',
        selector: 'login_menu'
    },{
        ref: 'wrapper',
        selector: 'login_viewport panel'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

         me.control({
             // Reset password form show button
              'login_viewport button[action="password_reset"]': {
                  click: me.showResetPassword
              },
             // Reset password form cancel button
             'login_passwordReset button[action="cancel"]': {
                 click: me.showSignIn
             }
         });

        // Call parent
        me.callParent(arguments);
    },

    showSignIn: function(btn, e) {
        var me = this;
        btn.up('form').getForm().reset();
        me.getWrapper().getLayout().setActiveItem(0);
    },

    showResetPassword: function(btn, e) {
        var me = this;
        btn.up('window').down('form').getForm().reset();
        me.getWrapper().getLayout().setActiveItem(1);
    }
});
