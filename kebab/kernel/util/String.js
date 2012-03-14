/**
 * @class String
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel String utility class
 */
Ext.define('Kebab.kernel.util.String', {
    singleton: true,

    constructor: function() {
        // add ucFirst
        String.prototype.ucFirst = function() {
            return this.charAt(0).toUpperCase() + this.substr(1);
        };

        // add lcFirst
        String.prototype.lcFirst = function() {
            return this.charAt(0).toLowerCase() + this.substr(1);
        };
    }
});