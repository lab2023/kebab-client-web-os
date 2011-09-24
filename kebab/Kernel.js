/**
 * @class Kebab
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Base class of the Kebab
 */
Ext.define('Kebab', {
    singleton: true,

    /**
     * Kebab Version
     */
    VERSION: '2.0.0',

    /**
     * Kebab Environment
     */
    ENVIRONMENT: 'development',

    /**
     * Kebab Base URL (Auto detected)
     */
    BASE_URL: window.location.origin + window.location.pathname,

    /**
     * Kebab RESTful Service API URL
     */
    REST_API: '',

    /**
     * Setup Kebab environment & base URL
     */
    constructor: function() {

        // URL parameter detector. ?dev = development mode
        this.ENVIRONMENT = (window.location.search.match('(\\?|&)dev') !== null) ? 'development' : 'production';

        // IF value is blank, REST_API value is equal for BASE_URL value
        this.REST_API = this.REST_API || this.BASE_URL;
    },

    /**
     * Initialize Kebab and boot the kernel
     */
    init: function(config) {

        Ext.apply(this, config || null);

        Kebab.helper.log('Kebab initialized by "' + this.ENVIRONMENT + '" environment...');

        Kebab.Kernel.boot();
    },

    /**
     * Kebab Helpers
     */
    helper: {

        /**
         * Log system messages only production environment
         * @param msg string
         */
        log: function(msg) {
            if (Kebab.ENVIRONMENT != 'production') {
                console.log(msg);
            }
        },

        /**
         * Return base URL or generated URL
         * @param url
         */
        url: function(url) {
            return url ? Kebab.BASE_URL + url : Kebab.BASE_URL;
        },

        /**
         * Return the RESTful service URL
         * @param service string
         */
        rest: function(service) {
            return service ? Kebab.REST_API + service : Kebab.REST_API;
        }
    }
});

/**
 * @class Kernel
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kernel class of the Kebab
 */
Ext.define('Kebab.Kernel', {
    singleton: true,

    /**
     * Kebab OS property
     * @type Kebab.OS
     */
    OS: null,

    /**
     * Required classess
     */
    requires: [
        'Kebab.OS'
    ],

    /**
     * Boot the Kebab.Kernel and Create new Kebab OS
     */
    boot: function() {

        Kebab.helper.log('Kebab.Kernel initialized ...');

        if (!this.OS) {

            this.OS = Ext.create('Kebab.OS');

        } else {
            throw new Error(Ext.getDisplayName(this.self) + ' OS already booted!');
        }
    }
});