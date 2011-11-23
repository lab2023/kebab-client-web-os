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
            id: 'login-index',
            cls: 'transparent',
            border:false,
            buttonAlign: 'center',
            dockedItems: [{
                xtype: 'login_menu'
            }]
        });

        me.callParent(arguments);
    }
});