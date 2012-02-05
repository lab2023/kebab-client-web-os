/**
 * @class SignUp
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop viewport widget
 */
Ext.define('Apps.profile.view.UserForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.profile_userForm',

    id: 'profile-userForm',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            frame: true,
            padding: 10,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            buttonAlign: 'center',
            defaultType: 'textfield',
            defaults: {
                labelAlign: 'top',
                labelSeparator: '',
                anchor: '100%'
            },
            items: me.buildItems(),
            buttons: me.buildButtons()
        }, null);

        me.callParent(arguments);
    },

    buildItems: function() {
        var me = this;

        return [{
            fieldLabel: 'Your Name',
            emptyText: 'Type your name here',
            name: 'name',
            allowBlank: false
        },{
            fieldLabel: 'E-mail',
            emptyText: 'This is what you’ll use to sign in',
            name: 'email',
            vtype: 'email',
            allowBlank: false
        },{
            xtype : 'fieldcontainer',
            layout: {
                type: 'hbox',
                defaultMargins: {top: 0, right: 5, bottom: 0, left: 0}
            },
            fieldLabel: 'Your Language and TimeZone',
            items : [{
                width: 100,
                xtype: 'combo',
                mode: 'local',
                triggerAction: 'all',
                forceSelection: true,
                editable: false,
                hideLabel: true,
                name: 'locale',
                displayField: 'name',
                valueField: 'value',
                queryMode: 'local',
                store: Ext.create('Ext.data.Store', {
                    fields: ['name', 'value'],
                    data : [{ // TODO get system config
                        name: 'English',
                        value: 'en'
                    },{
                        name: 'Turkish',
                        value: 'tr'
                    },{
                        name: 'Russian',
                        value: 'ru'
                    }]
                })
            },{
                flex: 1,
                xtype: 'combo',
                mode: 'local',
                triggerAction: 'all',
                forceSelection: true,
                editable: false,
                hideLabel: true,
                name: 'time_zone',
                displayField: 'name',
                valueField: 'value',
                queryMode: 'local',
                store: Ext.create('Ext.data.Store', {
                    fields: ['name', 'value'],
                    data : Kebab.kernel.Base.timeZonesData
                })
            }]
        }];
    },

    buildButtons: function() {
        return [{
            iconCls: 'icon-delete',
            text: 'Cancel Membership',
            action: 'cancelMembership'
        },{
            iconCls: 'icon-key',
            text: 'Change Password',
            action: 'changePassword'
        },{
            iconCls: 'icon-disk',
            text: 'Update My Info',
            action: 'updateUser',
            disabled:true,
            formBind: true
        }];
    }
});