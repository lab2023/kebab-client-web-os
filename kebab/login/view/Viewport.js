/**
 * @class Viewport
 * @extends Ext.container.Viewport
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop viewport widget
 */
Ext.define('Kebab.login.view.Viewport', {
    extend: 'Ext.window.Window',
    alias: 'widget.login_viewport',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            bodyStyle: 'text-align:center; background:transparent !important;',
            width: 300,
            height: 380,
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
            xtype: 'panel',
            layout: 'card',
            style: 'background: transparent !important;',
            bodyStyle: 'background: transparent !important;',
            frame: false,
            border: false,
            margin: 10,
            activeItem: 0,
            items: [{
                xtype: 'login_signIn'
            }, {
                xtype: 'login_passwordReset'
            }]
        }];
    },

    buildButtons: function() {
        return [{
            action: 'password_reset',
            text: 'Password Reset',
            width: 125
        },{
            action: 'languages',
            text: 'Select Language',
            width: 125,
            tooltip: 'Select your language',
            menu: [{
                text: 'English',
                shortName: 'en',
                checked: true,
                group: 'language'
            },{
                text: 'Turkish',
                shortName: 'Tr',
                checked: false,
                group: 'language'
            },{
                text: 'Russian',
                shortName: 'Ru',
                checked: false,
                group: 'language'
            }]
        }];
    }
});