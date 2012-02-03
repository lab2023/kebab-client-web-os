/**
 * @class Config
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Feedback application config class
 */
Ext.define('Apps.feedback.config.Config', {
    alternateClassName: 'Apps.feedback.Config',
    singleton: true,

    config: {
        viewport: {
            width: 400,
            height: 300
        }
    },

    constructor: function(config) {
        var me = this;
        me.initConfig(config);
    }
});