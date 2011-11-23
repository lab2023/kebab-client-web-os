/* -----------------------------------------------------------------------------
 Kebab Project 2.x (Kebab Revolution) - Web OS Client Platform for Ext JS 4.x
 http://kebab-project.com
 Copyright (c) 2011-2012 lab2023 - internet technologies TURKEY Inc.
 http://www.lab2023.com

    * LICENSE
    *
    * This source file is subject to the  Dual Licensing Model that is bundled
    * with this package in the file LICENSE.txt.
    * It is also available through the world-wide-web at this URL:
    * http://www.kebab-project.com/licensing
    * If you did not receive a copy of the license and are unable to
    * obtain it through the world-wide-web, please send an email
    * to info@lab2023.com so we can send you a copy immediately.
----------------------------------------------------------------------------- */

/**
 * Global Kebab Configuration
 */
var KEBAB_CONFIG = {
    /**
     * Kebab Kernel Version
     * @type Object
     */
    version: {
        build: 0,
        major: 2,
        minor: 0,
        patch: 0,
        shortVersion: "200",
        version: "2.0.0"
    },

    /**
     * Kebab System Paths
     * @type Object
     */
    paths: {

        /**
         * Kebab root folder
         * @type String
         */
        root: 'kebab',

        /**
         * Kebab Assets and resources folder
         * @type String
         */
        resources: 'resources',

        /**
         * Kebab Vendors and 3rd. party libraries folder
         * @type String
         */
        vendors: 'vendors'
    },

    /**
     * Kebab Environment
     * @type String
     */
    environment: 'development',

    /**
     * Kebab Base URL (Auto detected)
     * @type String
     */
    baseURL: window.location.origin + window.location.pathname,

    /**
     * Kebab RESTful service API URL
     * @type String
     */
    restAPI: 'http://localhost:4567',

    /**
     * Testing suite status (unit testing)
     * @type Boolean
     */
    testing: false
};

/**
 * Ext loader configuration
 */
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Kebab': KEBAB_CONFIG.paths.root,
        'Ext.ux' : 'ext-js/examples/ux'
    }
});

// Require for Kebab.Kernel
Ext.require('Kebab.Kernel');