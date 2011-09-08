/**
 * @class OS
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * OS base configuration options and utils
 */
Ext.define('Kebab.config.OS', {

    /**
     * Object singleton property
     */
    singleton: true,

    /**
     * @property {object} options
     * All configuration options
     */
    options: {

        // Paths
        appsRepo: 'http://kebab-revolution/apps',
        serviceAPI: 'http://kebab-revolution/service',

        // Desktop configurations
        desktop: {
            menuBar: {
                position: 'top'
            },
            dock: {
                position: 'bottom'
            }
        }
    },

    /**
     * Get the specific config options
     * @static
     * @param key
     */
    getOption: function(key) {
        return this.options[key];
    },

    /**
     * Set the specific config option
     * @static
     * @param key
     * @param value
     */
    setOption: function(key, value) {
        this.options[key] = value;
    },

    /**
     * Get all config options
     * @static
     */
    getOptions: function() {
        return this.options;
    },

    /**
     * Add or override config options
     * @static
     * @param options object
     * @param isImportant boolean
     */
    setOptions: function(options, isImportant) {

        if (isImportant) {
            Ext.apply(this.options, options);
        } else {
            Ext.applyIf(this.options, options);
        }
    }
});