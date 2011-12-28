/* -----------------------------------------------------------------------------
 Kebab Project 2.x (Kebab Revolution) - Web OS Client Platform for Ext JS 4.x
 http://kebab-project.com
 Copyright (c) 2011-2012 lab2023 - internet technologies TURKEY Inc.
 http://www.lab2023.com
----------------------------------------------------------------------------- */

/**
 * Prepare environment, enable loader an boot kebab automatically
 *
 * @class Kebab
 * @singleton
 */
(function() {

    /**
     * Kebab base variables
     */
    var global      = this,                         // DOM root
        tenantData  = {                             // Current tenant data. IF not use tenant setup this object manually
            authenticity_token : '1q2w3e4r5t6y7u8i9o0p!^+%&/',
            tenant: {
                id: 0,
                name: 'lab2023 - internet technologies',
                host: 'default.kebab.local'
            }
        },
        environment = 'development',                // Kebab environment
        root        = 'http://static.kebab.local',  // Kebab root path,
        baseURL     = window.location.origin;       // Kebab Base URL (Auto detected)

    // Kebab is not defined!
    if (typeof Kebab === 'undefined') {

        /**
         * Kebab global object
         */
        global.Kebab = {

            /**
             * Kebab boot loader
             */
            boot: function() {
                var me = this;

                /**
                 * Ext loader configuration
                 */
                Ext.Loader.setConfig({
                    enabled: true,
                    paths: {
                        'Kebab': me.getRoot() + '/kebab'
                    }
                });

                // Set global parameter
                Ext.Ajax.extraParams = {
                    authenticity_token: Kebab.getTenant().authenticity_token
                };

                // Set default headers
                Ext.Ajax.defaultHeaders = {
                    'Accept': 'application/json,application/xml',
                    'Content-Type': 'application/json'
                };

                // Require for Kebab.Kernel
                Ext.require('Kebab.Kernel');

                console.log('Kebab booting was started...');
            },

            /**
             * Get kebab environment
             */
            getEnvironment: function() {
                return environment;
            },

            /**
             * Get kebab root path
             */
            getRoot: function() {
                return root;
            },

            /**
             * Get kebab base url
             */
            getBaseURL: function() {
                return baseURL;
            },

            /**
             * Get kebab kernel
             */
            getKernel: function() {
                return this.Kernel;
            },

            setTenant: function(data) {
                tenantData = data || {};
            },

            getTenant: function() {
                return tenantData;
            }

        };

        // Enable loader
        document.write(
            '<div id="loader-mask">',
                '<p><span>Loading please wait</span></p>',  // TODO: i18n
            '</div>'
        );

        /**
         * Register & check tenant
         *
         * If dont use multi-tenant suppor. Remove this request lines and run Kebab.boot() method
         */
        Ext.Ajax.request({
            url: 'tenants/register',
            method: 'GET',
            success: function(response) {
                var tenantData = Ext.decode(response.responseText);

                if (tenantData.success && tenantData.authenticity_token) {

                    // Set registered tenant data
                    Kebab.setTenant(tenantData);

                    // Boot kebab
                    Kebab.boot();
                } else {
                    window.location.href = Kebab.getBaseURL() + '/404.html?not_registered';
                }
            },
            failure: function() {
                window.location.href = Kebab.getBaseURL() + '/404.html?not_registered';
            }
        });
    }
})();

