/**
 * @class Desktop
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop
 */
Ext.define('Apps.Profile', {
    extend: 'Ext.app.Application',

    id: 'Apps.Profile',

    config: {
        ownerApp: null,
        launcher: Ext.create('Ext.button.Button', {
            text: 'Launch Profile App',
            renderTo: Ext.getBody()
        })
    },

    /**
     * Application namespace
     */
    name: 'Apps.profile',

    /**
     * Application root folder
     */
    appFolder: Kebab.helper.root('apps/profile'),

    /**
     * Application viewport auto create property
     * @type Boolean
     */
    autoCreateViewport: true,

    /**
     * Application references and selectors
     * @type Array
     */
    refs: [{
        ref: 'viewport',
        selector: 'profile_viewport'
    }],

    /**
     * Application Controllers
     * @type Array
     */
    controllers: [
        'Test'
    ],

    /**
     * Application constructor
     */
    constructor: function(config) {
        var me = this;

        me.initConfig(config);

        // Call parent constructor
        me.callParent(arguments);
    },

    /**
     * Application after launch method
     * @return void
     */
    launch: function() {
        var me = this;

        console.log('Apps.Profile was launched...');
    }
});
