/**
 * @class I18n
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Register i18n class
 */
Ext.define('Kebab.register.locale.I18n', {
    alternateClassName: 'Kebab.register.I18n',
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
        'Kebab.register.locale.EN',
        'Kebab.register.locale.TR',
        'Kebab.register.locale.RU'
    ]
});