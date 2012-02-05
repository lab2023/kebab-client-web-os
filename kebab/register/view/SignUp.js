/**
 * @class SignUp
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Register Sign-up form widget
 */
Ext.define('Kebab.register.view.SignUp', {
    extend: 'Ext.form.Panel',
    alias: 'widget.register_signUp',

    id: 'register-signUp',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            style: 'margin:auto;',
            title: 'You\'re just 30 seconds away from your new Kebab account.',
            frame: true,
            width: 450,
            padding: 10,
            msgTarget: 'side',
            autoHeight: true,
            buttonAlign: 'center',
            defaultType: 'textfield',
            layout: 'anchor',
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
        var me = this,
            planId = parseInt(Ext.urlDecode(window.location.search).plan);

        return [{
            xtype: 'hiddenfield',
            name: 'plan[id]',
            value: planId
        },{
            xtype: 'panel',
            frame: true,
            bodyStyle: 'padding: 10px; background: #FFC;;',
            html: "<strong>Already have a Kebab account?</strong><br />" +
                "<a href='login.html'>Sign-in</a> here to skip this form and use the account you already have"
        },{
            xtype: 'displayfield',
            value: '<div class="fieldSet">Your account name</div>',
        },{
            xtype: 'fieldcontainer',
            hideField: true,
            layout: 'hbox',
            items: [{
                flex: 1,
                xtype: 'textfield',
                name: 'tenant[host]',
                hideLabel: true,
                emptyText: 'Type your unique account name e.g: "lab2023"',
                allowBlank: false
            },{
                width: 100,
                xtype: 'displayfield',
                value: '.kebab.local',
            }]
        },{
            xtype: 'displayfield',
            value: '<div class="fieldSet">Account Information</div>',
        },{
            fieldLabel: 'Company Name',
            emptyText: 'Or non-profit, organization, group, school, etc.',
            name: 'tenant[name]',
            allowBlank: false
        },{
            fieldLabel: 'Your Name',
            emptyText: 'Type your name here',
            name: 'user[name]',
            allowBlank: false
        },{
            fieldLabel: 'E-mail',
            emptyText: 'This is what you’ll use to sign in',
            name: 'user[email]',
            vtype: 'email',
            allowBlank: false
        },{
            fieldLabel: 'Password',
            emptyText: 'Type your secure password here',
            name: 'user[password]',
            inputType: 'password',
            allowBlank: false
        },{
            fieldLabel: 'Enter your password again for verification',
            emptyText: 'Re-type your password here',
            name: 'user[password_confirmation]',
            inputType: 'password',
            allowBlank: false,
            validator: function(value) {
                var password1 = me.getForm().findField('user[password]');
                return (value === password1.getValue()) ? true : 'Passwords do not match.'
            }
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
                name: 'user[locale]',
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
                }),
                listeners: {
                    beforerender: function(c) {
                        // Set first value
                        c.setValue(c.getStore().first().get('value'));
                    }
                }
            },{
                flex: 1,
                xtype: 'combo',
                mode: 'local',
                triggerAction: 'all',
                forceSelection: true,
                editable: false,
                hideLabel: true,
                name: 'user[time_zone]',
                displayField: 'name',
                valueField: 'value',
                queryMode: 'local',
                store: Ext.create('Ext.data.Store', {
                    fields: ['name', 'value'],
                    data : Kebab.kernel.Base.timeZonesData
                }),
                listeners: {
                    beforerender: function(c) {
                        // Set first value
                        c.setValue(c.getStore().first().get('value'));
                    }
                }
            }]
        },{
            xtype: 'displayfield',
            style: 'text-align:left; font-size:90%;',
            value: 'By clicking <strong>Start my free trial</strong> you agree to the <a href="terms-of-use.html" class="terms">Terms of Use</a> or ' +
                '<a href="privacy.html" class="terms">Privacy</a>',
        }];
    },

    buildButtons: function() {
        return [{
            text: 'Start my free trial',
            scale: 'medium',
            action: 'submit',
            formBind: true,
            disabled: true
        }];
    }
});