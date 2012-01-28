/**
 * @class I18n
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Profile Application i18n class
 */
Ext.define('Apps.feedback.locale.I18n', {
    alternateClassName: 'Apps.feedback.I18n',
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
        'Apps.feedback.locale.EN',
        'Apps.feedback.locale.TR',
        'Apps.feedback.locale.RU'
    ]
});