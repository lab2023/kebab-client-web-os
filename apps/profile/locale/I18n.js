/**
 * @class I18n
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Profile Application i18n class
 */
Ext.define('Apps.profile.locale.I18n', {
    alternateClassName: 'Apps.profile.I18n',
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
        'Apps.profile.locale.EN',
        'Apps.profile.locale.TR',
        'Apps.profile.locale.RU'
    ]
});