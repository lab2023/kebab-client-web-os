/**
 * @class Desktop
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop controller
 */
Ext.define('Kebab.controller.Desktop', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'desktop.Index',
        'desktop.Dock',
        'desktop.MenuBar',
        'desktop.Shortcuts',
        'desktop.Wallpaper'
    ],

    /**
     * Controller stores
     */
    stores: ['Shortcuts'],

    /**
     * Controller models
     */
    models: ['Module'],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;
        me.callParent(arguments);
    },

    /**
     * Index action
     */
    indexAction: function() {
        
    }
});
