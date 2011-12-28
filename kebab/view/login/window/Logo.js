/**
 * @class Logo
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login Logo
 */
Ext.define('Kebab.view.login.window.Logo', {
    extend: 'Ext.Img',
    alias: 'widget.login_window_logo',

    id: 'login-window-logo',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this, path;

        path = Kebab.Kernel.getPaths().resources
            + '/themes/images/'
            + Kebab.Kernel.getTheme();

        Ext.apply(me, {
            id: 'login-signIn-logo',
            src: path + '/logo.png'
        });

        me.callParent(arguments);
    }
});