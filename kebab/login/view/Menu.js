/**
 * @class Menu
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.login.view.Menu', {
    extend: 'Ext.Component',
    alias: 'widget.login_menu',

    id: 'login-menu',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            html: Kebab.getBootData().tenant.name,
            style: 'width: 100%; padding: 8px; background: #eee; ' +
                'border-bottom:1px solid #ccc !important; position:fixed; top:0;' // TODO move css
        });

        me.callParent(arguments);
    }
});
