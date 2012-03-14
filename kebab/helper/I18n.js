/**
 * @class I18n
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel I18n Class
 */
Ext.define('Kebab.helper.I18n', {
    alternateClassName: 'Kebab.I18nHelper',
    singleton: true,

    /**
     * Translator helper
     * This helper create new locale class from default locale
     *
     * @param {Array} arguments Argument 0 is locale key Eg.: 'welcome'
     * @param {String} string The locale  key string Eg: 'welcome'
     * @param {String} value1 The value to replace token {0}
     * @param {String} value2 Etc...
     * @return {String} The translated text
     */
    t: function() {
        var me = this,
            translatedText = Kebab.getLocale(), // Default
            key = arguments[0],
            values = Ext.Array.toArray(arguments, 1);

        try {
            // Translate and replace text
            translatedText = Ext.isDefined(key)
                ? me._callNode(key).replace(Ext.String.formatRe, function(m, i) {
                return values[i];
            })
                : me._callNode(key);

        } catch (e) {
            // Translations not found
            translatedText += ': ' + key;
            console.warn(translatedText);
            console.warn(Ext.getClassName(me) + ' not found for "' + Kebab.getLocale() + '" locale ...');
        }

        return translatedText;
    },

    /**
     * Eval node
     * @private
     * @param key
     */
    _callNode: function(key) {
        return eval('Kebab.translations.' + key);
    }
});