/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Apps.accountManager.controller.Index', {
    extend: 'Ext.app.Controller',

    /**
     * Controller models
     */
    models: [
        'Subscription'
    ],

    /**
     * Controller views
     */
    views: [
        'PaymentDetails',
        'PaymentHistoryList'
    ],

    /**
     * Controller refs
     */
    refs: [{
        ref: 'paymentHistoryList',
        selector: 'accountManager_paymentHistoryList'
    }]
});