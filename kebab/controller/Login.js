/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.controller.Login', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'login.Index',
        'login.Menu',
        'login.Window',
        'login.window.Wrapper',
        'login.window.Logo',
        'login.window.Info',
        'login.window.SignIn',
        'login.window.ForgotPassword',
        'login.window.Languages'
    ],

    refs: [{
        ref: 'loginIndex',
        selector: 'login_index'
    },{
        ref: 'loginWindow',
        selector: 'login_window'
    },{
        ref: 'loginWindowWrapper',
        selector: 'login_window_wrapper'
    },{
        ref: 'loginWindowInfo',
        selector: 'login_window_info'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        me.control({
            // Login window
            'login_window': {
                render: me.autoCenterLoginWin
            },
            // Login window wrapper
            'login_window toolbar button': {
                click: me.changeSection
            },
            // Sign-in form textfield items
            'login_window_signIn > textfield': {
                specialkey: me.signIn
            }
        });

        // Call parent
        me.callParent(arguments);
    },

    /**
     * Show login screen
     */
    index: function() {
        var me = this;

        me.application.getViewport()
            .add({
                xtype: 'login_index'
            });
    },

    /**
     * Track browser window resize and center sign-in window
     *
     * @param w Ext.window.Window
     */
    autoCenterLoginWin: function(w) {
        Ext.fly(window).on('resize', function(){
            w.center();
        });
    },

    /**
     * Sign-in user
     *
     * @param f Ext.form.field.Text
     * @param e Ext.EventObject
     */
    signIn: function(f, e) {
        var me = this;

        // Just enter key is pressed
        if (e.getKey() == e.ENTER) {
            e.stopEvent();

            // TODO: Dummy operation
            me.showHideMask();
            Ext.defer(function() {
                me.showHideMask(true);
                f.up('form').getForm().reset();
            }, 1000);


            /*var form = f.up('form').getForm();

            if (form.isValid()) {

                me.showHideMask();

                form.submit({

                    url: 'users/sign_in.json',

                    success: function(form, action) {

                        me.showHideMask(true);

                        if (action.result.success) {
                           me.getController('User').getUsersStore().add(action.result);
                        }
                    },
                    failure: function(form, action) {

                        me.showHideMask(true);

                        Ext.Msg.alert('Failed', 'Login failed... Please try again.');
                    }
                });
            }*/
        }
    },

    /**
     *
     * @param b Ext.button.Button
     * @param e Ext.EventObject
     */
    changeSection: function(b, e) {
        var me = this, title, text, panel;

        e.stopEvent();

        switch (b.itemOrder) {
            case 1:
                me.getLoginWindowInfo().title.update('Reset Password');
                break;
            case 2:
                me.getLoginWindowInfo().title.update('Change Language');
                break;
            default:
                me.getLoginWindowInfo().onSetDefaults();
        }

        panel = b.up('window').down('panel');
        panel.getLayout().setActiveItem(b.itemOrder);
    },

    showHideMask: function(hide) {
        var me = this;

        if (!hide) {
            me.getLoginWindow().getEl().mask('');
        } else {
            me.getLoginWindow().getEl().unmask();
        }
    }
});
