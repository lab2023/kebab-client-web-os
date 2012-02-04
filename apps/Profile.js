/**
 * @class Desktop
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop
 */
Ext.define('Apps.Profile', {
    extend: 'Kebab.kernel.app.Application',

    /**
     * Application Id
     */
    id: 'Profile',

    /**
     * Application Controllers
     * @type Array
     */
    controllers: [
        'Index'
    ],

    /**
     * Application references and selectors
     * @type Array
     * TODO move parent class
     */
    refs: [{
        ref: 'viewport',
        selector: 'profile_viewport'
    }],

    /**
     * Application css styles
     */
    cssFiles: [
        'style.css'
    ]
});
