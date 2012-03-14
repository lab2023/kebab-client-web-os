/**
 * @class Session
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.controller.System', {
    extend: 'Ext.app.Controller',

    stores: [
        'TimeZones'
    ],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        me.control({
            // Language selection
            'component[group="locale]': {
                click: me.changeLanguage
            }
        });

        Kebab.setApplication(me.application);

        // Call parent
        me.callParent(arguments);
    },

    changeLanguage: function(cp, e) {
        e.stopEvent();
        if (cp.locale != Kebab.getLocale()) {
            Kebab.URLHelper.redirect('?locale=' + cp.locale);
        }
    }
});
