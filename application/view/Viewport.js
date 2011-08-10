Ext.define('Kebab.view.Viewport', {
    extend: 'Ext.container.Viewport',
    
    initComponent: function() {

        this.items = [{
            xtype: 'signin'
        }];

        this.callParent(arguments);
    }
});