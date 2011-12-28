/**
 * @class Index
 * @extends Ext.window.Window
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login index panel widget
 */
Ext.define('Kebab.view.login.window.Wrapper', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.login_window_wrapper',

    id: 'login-window-wrapper',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            border: false,
            layout: 'card',
            activeItem: 0,
            height: 160,
            items: [{
                xtype: 'login_window_signIn'
            },{
                xtype: 'login_window_forgotPassword'
            },{
                xtype: 'login_window_languages'
            }]
        });

        me.callParent(arguments);
    }
});
