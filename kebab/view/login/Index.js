/**
 * @class ForgotPassword
 * @extends Ext.window.Window
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login index window widget
 */
Ext.define('Kebab.view.login.Index', {

    extend: 'Ext.window.Window',
    alias : 'widget.login_index',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            title: 'Kebab Revolution • Welcome',
            layout:'card',
            activeItem: 0,
            border:false,
            constrain: true,
            modal:true,
            autoShow : true,
            closable :false,
            resizable :false,
            buttonAlign: 'center',
            items : [{
                xtype: 'login_signIn'
            },{
                xtype: 'login_forgotPassword'
            },{
                xtype: 'login_signUp'
            }],
            buttons: [{
                text: 'Sign-in',
                enableToggle: true,
                pressed: true,
                action: 'signIn',
                ref: 'view'
            },{
                text : 'Forgot Password',
                enableToggle: true,
                action: 'forgotPassword',
                ref: 'view'
            },{
                text: 'Sign-up',
                enableToggle: true,
                action: 'signUp',
                ref: 'view'
            }]
        });

        me.callParent(arguments);
    },

    listeners: {
        afterRender: function(win) {
            Ext.fly(window).on('resize', function() {
                win.center();
            });
        }
    }
});