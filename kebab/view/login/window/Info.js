/**
 * @class Logo
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login Logo
 */
Ext.define('Kebab.view.login.window.Info', {
    extend: 'Ext.Component',
    alias: 'widget.login_window_info',

    id: 'login-window-info',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

		Ext.apply(me, {
			padding: 3,
            renderTpl: [
                '<h1 id="{id}-title">{title}</h1>'
            ],
            renderData: {
				title: 'Sign-in',
            },
            childEls: ["title"]
        });

        me.callParent(arguments);
    },

	onSetDefaults: function() {
		var me = this;
		me.title.update(me.renderData.title);
	}
});
