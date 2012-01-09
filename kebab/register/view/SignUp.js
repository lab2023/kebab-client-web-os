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
        var me = this

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
            value: '<div class="fieldSet">Your host name *</div>',
        },{
            xtype: 'fieldcontainer',
            hideField: true,
            layout: 'hbox',
            items: [{
                flex: 1,
                xtype: 'textfield',
                name: 'tenant[host]',
                hideLabel: true,
                emptyText: 'Your account subdomain name eg: "lab2023"',
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
            fieldLabel: 'Company Name *',
            emptyText: 'Or non-profit, organization, group, school, etc.',
            name: 'tenant[name]',
            allowBlank: false
        },{
            fieldLabel: 'E-mail *',
            emptyText: 'This is what you’ll use to sign in',
            name: 'user[email]',
            vtype: 'email',
            allowBlank: false
        },{
            fieldLabel: 'Password *',
            emptyText: 'Type your secure password here',
            name: 'user[password]',
            inputType: 'password',
            allowBlank: false
        },{
            fieldLabel: 'Enter your password again for verification *',
            emptyText: 'Re-type your password here',
            name: 'user[re_password]',
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
            fieldLabel: 'Locale and TimeZone',
            items : [{
                width: 100,
                xtype: 'combo',
                mode: 'local',
                value: me.buildLocalesData()[0],
                triggerAction: 'all',
                forceSelection: true,
                editable: false,
                hideLabel: true,
                name: 'locale',
                displayField: 'value',
                valueField: 'value',
                queryMode: 'local',
                store: Ext.create('Ext.data.ArrayStore', {
                    fields: ['value'],
                    data : me.buildLocalesData()
                })
            },{
                flex: 1,
                xtype: 'combo',
                mode: 'local',
                value: me.buildTimeZonesData()[0],
                triggerAction: 'all',
                forceSelection: true,
                editable: false,
                hideLabel: true,
                name: 'time_zone',
                displayField: 'value',
                valueField: 'value',
                queryMode: 'local',
                store: Ext.create('Ext.data.ArrayStore', {
                    fields : ['value'],
                    data : me.buildTimeZonesData()
                })
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
    },

    buildLocalesData: function() {
        return [['en'], ['tr'], ['ru']];
    },

    buildTimeZonesData: function() {
        return [
            ['-12:00=-720=Eniwelok, Kwajalein'],
            ['-11:00=-660=Midway Island, Samoa'],
            ['-10:30=-630=Cook Islands'],
            ['-10:00=-600=Hawaii; Western Aleutian Islands=was Alaska/Hawaii timezone'],
            ['-09:30=-570=Marquesas Islands'],
            ['-09:00=-540=Alaska; Eastern Aleutian Islands=was Yukon timezone'],
            ['-08:30=-510=Pitcairn Island'],
            ['-08:00=-480=Pacific Time (US & Canada); Yukon; Tijuana'],
            ['-07:00=-420=Mountain Time (US & Canada)'],
            ['-06:00=-360=Central Time (US & Canada); Mexico City, Tegucigalpa'],
            ['-05:00=-300=Eastern Time (US & Canada); Bogota; Lima; Quito'],
            ['-04:30=-270=Caracas'],
            ['-04:00=-240=Atlantic Time (Canada); Caracas, La Paz; Santiago'],
            ['-03:45=-225=Guyana, South America'],
            ['-03:30=-210=Newfoundland; Suriname, South America'],
            ['-03:00=-180=Greenland; Brasilia; Buernos Aires; Puerto Rico'],
            ['-02:00=-120=Mid-Atlantic'],
            ['-01:00=-60=Azores, Cape Verde Is.'],
            ['00:00=0=Greenwich Mean Time'],
            ['01:00=60=Amsterdam; Berlin; Bern; Rome; Stockholm; Vienna'],
            ['02:00=120=Athens; Istanbul; Minsk; Jerusalem'],
            ['03:00=180=Baghdad; Kuwait; Moscow'],
            ['03:30=210=Tehran, Iran'],
            ['04:00=240=Abu Dhabi; Muscat'],
            ['04:30=270=Kabul, Afghanistan'],
            ['05:00=300=Ekaterinburg'],
            ['05:30=330=India; Bombay; Calcutta; New Delhi; Sri Lanka'],
            ['05:45=345=Kathmandu, Nepal'],
            ['06:00=360=Astana; Dhaka'],
            ['06:30=390=Cocos Islands; Yangon; Myanmar'],
            ['07:00=420=Bangkok; Hanoi'],
            ['08:00=480=Perth; Singapore; China'],
            ['08:45=525=South Australia'],
            ['09:00=540=Osaka; Tokyo; Seoul'],
            ['09:30=570=Northern Australia'],
            ['10:00=600=Brisbane; Canberra; Sydney; Guam'],
            ['11:00=660=Magadan; Solomon Is.; New Caledonia'],
            ['11:30=690=New Zealand?; Norfold Island, Australia'],
            ['12:00=720=Auckland; Wellington; Fiji; Marshall Is.; Tuvalu'],
            ['12:45=765=Chatham Island, New Zealand'],
            ['13:00=780=Nukulalofa; Phoenix Islands=1 hour EAST of the dateline'],
            ['14:00=840=Line Islands; Christmas Islands=2 hours EAST of the dateline']
        ];
    }
});