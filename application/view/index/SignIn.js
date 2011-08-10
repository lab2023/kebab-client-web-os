Ext.define('Kebab.view.index.SignIn', {
    
    extend: 'Ext.form.Panel',
    alias : 'widget.signin',

    title : 'Sign In',
    layout: 'fit',
    
    initComponent: function() {

        var cfg = {
            frame :true,
            width:400,
            height:300
        };

        Ext.apply(this,cfg);

        this.callParent(arguments);
    },

    listeners: {
        afterRender: function(panel) {
            panel.center();
            Ext.fly(window).on('resize', function() {
                panel.center();
            });
        }
    }
});