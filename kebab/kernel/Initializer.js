/**
 * @class Initializer
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel Initializer class and requirements
 */
Ext.define('Kebab.kernel.Initializer', {
    singleton: true,

    /**
     * Load kernel required classes
     */
    requires: [
        'Kebab.config.Kernel',
        'Kebab.kernel.app.Application',
        'Kebab.kernel.app.EventBusManager',
        'Kebab.kernel.component.Launcher',
        'Kebab.kernel.connection.AjaxSniffer',
        'Kebab.kernel.override.Window',
        'Kebab.kernel.util.String',
        'Kebab.helper.Asset',
        'Kebab.helper.I18n',
        'Kebab.helper.Notify',
        'Kebab.helper.URL',
        'Kebab.helper.Loader'
    ],

    /**
     * Class constructor
     */
    constructor: function() {
        // Leave page confirmation
        window.onbeforeunload = function(){
            return Kebab.I18nHelper.t('kebab.messages.confirm');
        };
    },

    init: function() {

        console.log('Kebab Kernel was initialized...');

        // Disable browser context menus
        Ext.getBody().on('contextmenu', Ext.emptyFn, null, {preventDefault: true});

        // Check locale
        if (Kebab.getBootstrap('locale')['available_locales'].indexOf(Kebab.getLocale()) == -1) {
            Kebab.URLHelper.redirect('?locale=' + Kebab.getBootstrap('locale')['default_locale']);
        }
    }
});
Ext.onReady(function() {
    Kebab.kernel.Initializer.init();
});