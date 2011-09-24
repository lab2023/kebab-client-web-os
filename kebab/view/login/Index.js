/**
 * @class ForgotPassword
 * @extends Ext.window.Window
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login index window widget
 */
Ext.define('Kebab.view.login.Index', {

    extend: 'Ext.panel.Panel',
    alias : 'widget.login_index',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            renderTo: Ext.getBody(),
            title: 'Kebab Revolution • Welcome',
            frame:true,
            width:400,
            border:false,
            buttonAlign: 'center',
            items : [{
                xtype: 'login_signIn'
            }],
            buttons: [{
                text : 'Forgot Password',
                action: 'forgotPassword'
            }]
        });

        me.callParent(arguments);
    },

    listeners: {
        afterRender: function(panel) {
            panel.center();
            Ext.fly(window).on('resize', function() {
                panel.center();
            });
        }
    }
});