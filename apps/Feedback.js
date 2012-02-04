/**
 * @class Desktop
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop
 */
Ext.define('Apps.Feedback', {
    extend: 'Kebab.kernel.app.Application',

    /**
     * Application Id
     */
    id: 'Feedback',

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
        selector: 'feedback_viewport'
    }],

    /**
     * Application styles
     */
    cssFiles: [
        'style.css'
    ]
});
