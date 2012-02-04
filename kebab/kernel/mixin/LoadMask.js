/**
 * @class LoadMask
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel LoadMask Mixin Class
 */

Ext.define('Kebab.kernel.mixin.LoadMask', {

    requires: [
        'Ext.LoadMask'
    ],

    /**
     * Get Load Mask
     */
    getMask: function(msg, cp) {
        var me = this;

        return new Ext.LoadMask(cp || me.getViewport(), {
            msg: msg || 'Please wait...'
        });
    }
});