/**
 * @class I18n
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Login i18n class
 */
Ext.define('Kebab.login.locale.I18n', {
    alternateClassName: 'Kebab.login.I18n',
    singleton: true,

    /**
     * Application mixins
     *
     * @type {Object}
     */
    mixins: {
        i18n: 'Kebab.kernel.mixin.I18n'
    },

    /**
     * Application locales
     * @type {Array}
     */
    requires: [
        'Kebab.login.locale.EN',
        'Kebab.login.locale.TR',
        'Kebab.login.locale.RU'
    ]
});