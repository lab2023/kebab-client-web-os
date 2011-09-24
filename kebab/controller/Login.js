/**
 * @class Login
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login controller
 */
Ext.define('Kebab.controller.Login', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'login.Index',
        'login.SignIn',
        'login.ForgotPassword'
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
            'login_signIn button[action="send"]': {
                click: me.signInAction
            },
            'login_forgotPassword button[action="send"]': {
                click: me.forgotPasswordAction
            },
            'login_index button[action="forgotPassword"]': {
                click: me.forgotPasswordAction
            }
        });
    },

    /**
     * Show login window
     */
    indexAction: function() {
        var me = this;
        Ext.create(me.getView('login.Index'));
    },

    /**
     * Show forgot password dialog
     * @param btn
     */
    forgotPasswordAction: function(btn) {
        var me = this;
        var win = Ext.create(me.getView('login.ForgotPassword'), {
            animateTarget: btn.getEl(),
            autoShow: true
        });
    },

    /**
     * Sign in user
     * @param btn
     */
    signInAction: function(btn) {
        var me = this;
        
        var form = btn.up('form').getForm();

        if (form.isValid()) {
            form.submit({
                clientValidation: true,
                method: 'POST',
                url: Kebab.helper.rest('kebab/session'),
                waitMsg: 'Signing...'
            });
        }
    },

    /**
     * Request forgot password in user
     * @param btn
     */
    requestForgotPasswordAction: function(btn) {
        var me = this;

        var form = btn.up('form').getForm();

        if (form.isValid()) {
            form.submit({
                clientValidation: true,
                method: 'PUT',
                url: Kebab.helper.rest('kebab/password'),
                waitMsg: 'Your password sending...'
            });
        }
    }
});
