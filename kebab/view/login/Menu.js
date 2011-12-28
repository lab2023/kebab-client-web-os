/**
 * @class Menu
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.view.login.Menu', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.login_menu',

    id: 'login-menu',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            height: 32,
            defaults: {
                scale: 'small'
            },
            items: me.buildItems()
        });

        me.callParent(arguments);
    },

    /**
     * Build the dock items
     */
    buildItems: function() {

		// Get tenant info
		var tenantInfo = Kebab.getTenant().tenant.host;

        return [
			tenantInfo,
			'->', 
			'En', 
		{
            xtype: 'tbtext',
            text: Ext.Date.format(new Date(), 'D M j Y, H:i A'),
            listeners: {
                afterRender: function(indicator) {
                    console.log()
                    var timeTask = {
                        run: function(){
                            indicator.setText(Ext.Date.format(new Date(), 'D M j Y, H:i A'));
                        },
                        interval: 60000 //1 minute
                    };
                    Ext.TaskManager.start(timeTask);
                }
            }
        }];
    }
});
