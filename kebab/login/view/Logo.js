/**
 * @class Logo
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login Logo
 */
Ext.define('Kebab.login.view.Logo', {
    extend: 'Ext.Img',
    alias: 'widget.login_logo',

    id: 'login-logo',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            src: Kebab.helper.root('resources/images/logo.png')
        }, null);

        me.callParent(arguments);
    }
});