/**
 * @class Logo
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login Logo
 */
Ext.define('Kebab.view.login.window.Languages', {
    extend: 'Ext.view.View',
    alias: 'widget.login_window_languages',

    id: 'login-window-languages',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this, store;

        Ext.apply(me, {
            tpl: new Ext.XTemplate(
                '<tpl for=".">',
                    '{name}',
                '</tpl>'
            ),
            itemSelector: 'div.thumb-wrap',
            emptyText: 'No languages available',
        });

        me.callParent(arguments);
    }
});
