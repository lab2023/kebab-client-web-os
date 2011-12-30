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
    appFolder: Kebab.getRoot() + 'kebab/desktop',

    /**
     * Kernel Viewport auto create property
     * @type Boolean
     */
    autoCreateViewport: true,

    /**
     * OS References and selectors
     * @type Array
     */
    refs: [{
        ref: 'viewport',
        selector: 'viewport'
    }],

    /**
     * Kernel Controllers
     * @type Array
     */
    controllers: [
        'Index',
        'Menu',
        'Dock'
    ],

    /**
     * Kernel after launch method
     * @return void
     */
    launch: function() {
        var me = this;

        console.log('Kebab.desktop.Application was launched...');
    }
});
