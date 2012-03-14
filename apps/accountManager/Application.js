/**
 * @class AccountManager
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * AccountManager App
 */
Ext.define('Apps.accountManager.Application', {
    extend: 'Kebab.kernel.app.Application',

    /**
     * Application Id
     */
    id: 'accountManager',

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
        selector: 'accountManager_viewport'
    }],

    /**
     * Application css styles
     */
    cssFiles: [
        'style.css'
    ]
});
