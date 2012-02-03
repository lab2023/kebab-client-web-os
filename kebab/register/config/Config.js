/**
 * @class Config
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Register config class
 */
Ext.define('Kebab.register.config.Config', {
    alternateClassName: 'Kebab.register.Config',
    singleton: true,

    config: {

    },

    constructor: function(config) {
        var me = this;
        me.initConfig(config);
    }
});