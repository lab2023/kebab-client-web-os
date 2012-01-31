/**
 * @class Register
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Register Application
 */
Ext.define('Kebab.Register', {
    extend: 'Ext.app.Application',

    /**
     * Application namespace
     */
    name: 'Kebab.register',

    /**
     * Application root folder
     */
    appFolder: Kebab.helper.root('kebab/register'),

    /**
     * Application viewport auto create property
     * @type {Boolean}
     */
    autoCreateViewport: true,

    /**
     * Application locales
     * @type {Array}
     */
    requires: [
        'Kebab.register.locale.EN',
        'Kebab.register.locale.TR',
        'Kebab.register.locale.RU'
    ],

    /**
     * Application References and selectors
     * @type {Array}
     */
    refs: [{
        ref: 'viewport',
        selector: 'register_viewport'
    }],

    /**
     * Application Controllers
     * @type {Array}
     */
    controllers: [
        'SignUp'
    ],

    /**
     * Application constructor
     */
    constructor: function() {
        var me = this,
            availablePlans = ["1","2","3","4","5"], // Server available plans
            planId = Ext.urlDecode(window.location.search).plan;

        // Plan choice check
        if (!Ext.isDefined(planId) || availablePlans.indexOf(planId) == -1) {
            Kebab.helper.redirect('plans.html?plan_required');
        }

        // Load application resources
        Kebab.helper.loadCSS(['resources/css/register.css']);

        // Call parent constructor
        me.callParent(arguments);
    },

    /**
     * Application after launch method
     * @return void
     */
    launch: function() {
        console.log('Kebab.Register was launched...');
    }
});
