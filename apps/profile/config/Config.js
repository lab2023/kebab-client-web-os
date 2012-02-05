/**
 * @class Config
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Profile application config class
 */
Ext.define('Apps.profile.config.Config', {
    alternateClassName: 'Apps.profile.Config',
    singleton: true,

    config: {
        viewport: {
            width: 410,
            height: 230
        }
    },

    constructor: function(config) {
        var me = this;
        me.initConfig(config);
    }
});