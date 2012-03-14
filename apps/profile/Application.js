/**
 * @class Profile
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Profile Application
 */
Ext.define('Apps.profile.Application', {
    extend: 'Kebab.kernel.app.Application',

    /**
     * Application Id
     */
    id: 'profile',

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
