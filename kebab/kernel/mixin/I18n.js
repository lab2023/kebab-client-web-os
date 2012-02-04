/**
 * @class I18n
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel I18n Class
 */
Ext.define('Kebab.kernel.mixin.I18n', {

    /**
     * Default locale
     *
     * @type {String} Current locale Key. Example: EN
     */
    locale: Kebab.helper.config('locale')['default_locale'].toUpperCase(),

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
            translatedText = 'TRANSLATION_NOT_FOUND',
            key = arguments[0],
            values = Ext.Array.toArray(arguments, 1),
            localeClassName = Ext.getDisplayName(me).replace('I18n', me.locale);

        try {
            // Create new locale class from default locale
            var locale = Ext.create(localeClassName);

            // Translate and replace text
            translatedText = Ext.isDefined(key)
                ? locale[key].replace(Ext.String.formatRe, function(m, i) {
                    return values[i];
                })
                : locale;

        } catch (e) {
            // Translations not found
            translatedText += ': "' + key+ '" ';
            console.warn(localeClassName + ' not found...');
            console.warn(localeClassName + ' "' + key + '" key is not found...');
        }

        return translatedText;
    }
});