/**
 * @class Loader
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Loader helpers
 */

Ext.define('Kebab.helper.Loader', {
    alternateClassName: 'Kebab.LoaderHelper',
    singleton: true,

    requires: [
        'Ext.LoadMask'
    ],

    /**
     * Create new load mask
     */
    getMask: function(msg, cp) {
        var me = this;

        if (!me._activeLoadMask) {
            me._activeLoadMask = new Ext.LoadMask(cp || Ext.ComponentQuery.query('viewport')[0], {
                msg: msg || 'Please wait...'
            });
        }

        return me._activeLoadMask;
    },

    /**
     * Show the load mask
     * @param msg
     * @param cp
     */
    show: function(msg, cp) {
        var me = this;
        if (me._activeLoadMask) {
            me._activeLoadMask.show();
        } else {
            me.getMask(msg, cp).show();
        }
    },

    /**
     * Hide the load mask
     */
    hide: function() {
        var me = this;
        me._activeLoadMask.hide();
    }
});