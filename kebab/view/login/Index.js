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

    id: 'login-index',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            border: false,
            dockedItems: [{
                xtype: 'login_menu'
            }]
        });

        me.callParent(arguments);
    }
});