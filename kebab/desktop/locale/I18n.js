/**
 * @class Desktop
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop
 */
Ext.define('Kebab.desktop.locale.I18n', {
    alternateClassName: 'Kebab.desktop.I18n',
    singleton: true,

    /**
     * Application mixins
     *
     * @type {Object}
     */
    mixins: {
        i18n: 'Kebab.kernel.I18n'
    },

    /**
     * Application locales
     * @type {Array}
     */
    requires: [
        'Kebab.desktop.locale.EN',
        'Kebab.desktop.locale.TR',
        'Kebab.desktop.locale.RU'
    ]
});