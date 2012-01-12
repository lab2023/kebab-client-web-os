/**
 * @class Desktop
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop
 */
Ext.define('Apps.Feedback', {
    extend: 'Ext.app.Application',

    id: 'Apps.Feedback',

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
    name: 'Apps.feedback',

    /**
     * Application root folder
     */
    appFolder: Kebab.helper.root('apps/feedback'),

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
        selector: 'feedback_viewport'
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

        console.log('Apps.Feedback was launched...');
    }
});
