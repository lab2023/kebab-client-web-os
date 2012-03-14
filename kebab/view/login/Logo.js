/**
 * @class Logo
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login Logo
 */
Ext.define('Kebab.view.login.Logo', {
    extend: 'Ext.Img',
    alias: 'widget.login_logo',

    id: 'login-logo',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            height: 230,
            src: Kebab.getRoot('resources/images/logo.png')
        });

        me.callParent(arguments);
    }
});