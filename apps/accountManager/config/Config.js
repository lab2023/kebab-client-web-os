/**
 * @class Config
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * AccountManager application config class
 */
Ext.define('Apps.accountManager.config.Config', {
    alternateClassName: 'Apps.accountManager.Config',
    singleton: true,

    config: {
        viewport: {
            width: 500,
            height: 500
        }
    },

    constructor: function(config) {
        var me = this;
        me.initConfig(config);
    }
});