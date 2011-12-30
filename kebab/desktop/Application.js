/**
 * @class Desktop
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop
 */
Ext.define('Kebab.desktop.Application', {
    singleton: true,
    extend: 'Ext.app.Application',

    /**
     * Application namespace
     */
    name: 'Kebab.desktop',

    /**
     * Application root folder
     */
    appFolder: Kebab.helper.root('kebab/desktop'),

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
        selector: 'viewport'
    }],

    /**
     * Application Controllers
     * @type Array
     */
    controllers: [
        'Index',
        'Menu',
        'Dock'
    ],

    constructor: function() {
        var me = this;
        // Call parent constructor
        me.callParent(arguments);

        if (!Kebab.helper.bootData('user')) {
            Kebab.helper.redirect('login.html?authorization_required');
        }
    },

    /**
     * Application after launch method
     * @return void
     */
    launch: function() {
        console.log('Kebab.desktop.Application was launched...');
    }
});
