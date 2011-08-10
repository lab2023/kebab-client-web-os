Ext.define('Kebab.view.Viewport', {
    extend: 'Ext.Window',
    
    title: 'Kebab Revolution',
    layout: 'fit',

    initComponent: function() {
        
        Ext.apply(this, {
            constrainHeader:true,
            width:400,
            height:300,
            border:false,
            autoShow: true,
            closable:false,
            items: [{
                xtype: 'signin'
            }]
        });

        this.callParent(arguments);
    },
});