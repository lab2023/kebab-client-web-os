/**
 * @class Config
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop config class
 */
Ext.define('Kebab.desktop.config.Config', {
    alternateClassName: 'Kebab.desktop.Config',
    singleton: true,

    config: {
        menu: {
            position: 'top'
        },
        dock: {
            position: 'left',
            launchers: {
                size: 48
            }
        },
        apps: {
            requireAll: false
        }
    },

    constructor: function(config) {
        var me = this;
        me.initConfig(config);
    }
});