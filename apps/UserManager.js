/**
 * @class UserManager
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * UserManager Application
 */
Ext.define('Apps.UserManager', {
    extend: 'Kebab.kernel.app.Application',

    /**
     * Application Id
     */
    id: 'UserManager',

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
        selector: 'userManager_viewport'
    }],

    /**
     * Application css styles
     */
    cssFiles: [
        'style.css'
    ]
});
