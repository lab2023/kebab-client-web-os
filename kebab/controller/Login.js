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
        'login.ForgotPassword',
        'login.SignUp'
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
            'login_signUp button[action="send"]': {
                click: me.signUpAction
            },
            'login_index button[ref="view"]': {
                click: me.changeViewAction
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
     * Sign in user
     * @param btn
     */
    signInAction: function(btn) {
        var me = this;
        
        var form = btn.up('form').getForm();

        if (form.isValid()) {
            form.submit({
                clientValidation: true,
                url: me.application.helpers.url('server.php'),
                waitMsg: 'Signing...'
            });
        }
    },

    /**
     * Forgot password in user
     * @param btn
     */
    forgotPasswordAction: function(btn) {
        var me = this;

        var form = btn.up('form').getForm();

        if (form.isValid()) {
            form.submit({
                clientValidation: true,
                method: 'PUT',
                url: me.application.helpers.url('kebab/password'),
                waitMsg: 'Your password sending...'
            });
        }
    },

    /**
     * Sign up new user
     * @param btn
     */
    signUpAction: function(btn) {
        var me = this;

        var form = btn.up('form').getForm();

        if (form.isValid()) {
            form.submit({
                clientValidation: true,
                method: 'POST',
                url: me.application.helpers.url('kebab/user'),
                waitMsg: 'Creating your account...'
            });
        }
    },

    /**
     * Change login window active items
     * @param btn
     */
    changeViewAction: function(btn) {
        var activeItem;
        
        switch (btn.action) {
            case 'forgotPassword':
                activeItem = 1;
                break;
            case 'signUp':
                activeItem = 2;
                break;
            default:
                activeItem = 0;
                break;
        }

        btn.up().items.each(function(item) {
            if  (btn != item) {
                item.toggle(false);
            } else {
                btn.toggle(true);
            }
        });

        btn.up('panel').getLayout().setActiveItem(activeItem);
    }
});
