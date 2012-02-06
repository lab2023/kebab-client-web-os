/**
 * @class Config
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Profile application config class
 */
Ext.define('Apps.userManager.config.Config', {
    alternateClassName: 'Apps.userManager.Config',
    singleton: true,

    config: {
        viewport: {
            width: 650,
            height: 400
        }
    },

    constructor: function(config) {
        var me = this;
        me.initConfig(config);
    }
});