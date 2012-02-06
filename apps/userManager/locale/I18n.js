/**
 * @class I18n
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * UserManager Application i18n class
 */
Ext.define('Apps.userManager.locale.I18n', {
    alternateClassName: 'Apps.userManager.I18n',
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
        'Apps.userManager.locale.EN',
        'Apps.userManager.locale.TR',
        'Apps.userManager.locale.RU'
    ]
});