/**
 * @class I18n
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * AccountManager Application i18n class
 */
Ext.define('Apps.accountManager.locale.I18n', {
    alternateClassName: 'Apps.accountManager.I18n',
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
        'Apps.accountManager.locale.EN',
        'Apps.accountManager.locale.TR',
        'Apps.accountManager.locale.RU'
    ]
});