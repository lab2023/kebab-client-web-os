/**
 * @class Desktop
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop
 */
Ext.define('Apps.Feedback', {
    extend: 'Ext.app.Application',

    /**
     * Application Id
     */
    id: 'Feedback',

    /**
     * Application namespace
     */
    name: 'Apps.feedback',

    /**
     * Application root folder
     */
    appFolder: Kebab.helper.root('apps/feedback'),

    /**
     * Application Config
     */
    config: {
        runningMode: 'single',
        constrainTo: null,
        animateTarget: null
    },

    /**
     * Application viewport auto create property
     * @type Boolean
     */
    autoCreateViewport: false,

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
        'Index'
    ],

    /**
     * Application locales
     * @type {Array}
     */
    requires: [
        'Apps.feedback.config.Config',
        'Apps.feedback.locale.I18n',
        'Apps.feedback.view.Viewport',  // TODO change load xhr to dom
    ],

    /**
     * Application constructor
     */
    constructor: function(config) {
        var me = this;

        me.initConfig(config);

        // Load application resources if single mode
        Kebab.helper.loadCSS([me.appFolder + '/resources/css/style.css']);

        // Call parent constructor
        me.callParent(arguments);
    },

    /**
     * Application after launch method
     * @return void
     */
    launch: function() {
        var me = this;

        Ext.create('Apps.feedback.view.Viewport', {
            animateTarget: me.getAnimateTarget() ? me.getAnimateTarget() : Ext.getBody(),
            constrainTo: me.getConstrainTo() ? me.getConstrainTo() : Ext.getBody(),
            application: me
        });

        if (me.getRunningMode() == 'single') {
            Ext.create('Kebab.Launcher', {
                style: 'cursor: pointer;',
                renderTo: Ext.getBody(),
                margin: 10,
                size: 96,
                tooltip: Apps.feedback.I18n.t('appTitle'),
                launcher: {
                    appId: 'Feedback'
                },
                listeners: {
                    render: function(cp) {
                        var vp = me.getViewport();
                        vp.animateTarget = cp.id;
                        vp.doClose = function ()  {
                            vp.hide();
                        };
                        cp.getEl().on('click', function() {
                            var vp = me.getViewport();
                            vp.show();
                        });
                    }
                }
            });
        }

        console.log('Apps.Feedback was launched...');
    }
});
