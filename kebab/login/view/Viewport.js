/**
 * @class Viewport
 * @extends Ext.container.Viewport
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop viewport widget
 */
Ext.define('Kebab.login.view.Viewport', {
    extend: 'Ext.window.Window',
    alias: 'widget.viewport',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            bodyStyle: 'text-align:center; background:transparent !important;',
            width: 300,
            height: 370,
            padding: 10,
            draggable: false,
            closable: false,
            autoShow: true,
            resizable:false,
            border: false,
            buttonAlign: 'center',
            items: me.buildItems(),
            buttons: me.buildButtons()
        });

        Ext.create('Kebab.login.view.Menu', {
            renderTo: Ext.getBody()
        });

        me.callParent(arguments);
    },

    listeners: {
        render: function(w) {
            Ext.fly(window).on('resize', function(){
                w.center();
            });
        }
    },

    buildItems: function() {

        return [{
            xtype: 'login_logo'
        },{
            xtype: 'login_signIn'
        }];
    },

    buildButtons: function() {
        return [{
            text: 'Password Reset',
            width: 125,
            tooltip: 'Reset and send new password',
            handler: function() {  // TODO use controller handling
                Ext.Msg.prompt('Password Reset', 'Please enter your email here:', function(btn, text){
                    if (btn == 'ok'){
                        // TODO fire event
                    }
                });
            }
        },{
            text: 'Select Language',
            width: 125,
            tooltip: 'Select your language',
            menu: [{
                text: 'English',
                short: 'en',
                checked: true,
                group: 'language'
            },{
                text: 'Turkish',
                short: 'Tr',
                checked: false,
                group: 'language'
            },{
                text: 'Russian',
                short: 'Ru',
                checked: false,
                group: 'language'
            }]
        }];
    }
});