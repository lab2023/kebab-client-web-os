/**
 * @class Notify
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Notify helpers
 */
Ext.define('Kebab.helper.Notify', {
    alternateClassName: 'Kebab.NotifyHelper',
    singleton: true,

    requires: [
        'Ext.ux.window.Notification'
    ],

    OK: 'icon-accept-32',
    ERR: 'icon-cancel-32',
    WARN: 'icon-error-32',
    INFO: 'icon-information-32',

    /**
     * Notification helper
     *
     * @param {String} msg
     * @param {String} type
     */
    msg: function(type, msg, keep, button) {
        var me = this,
            msgCls;

        switch(type) {
            case 'OK':
                msgCls = me.OK;
                break;
            case 'ERR':
                msgCls = me.ERR;
                break;
            case 'WARN':
                msgCls = me.WARN;
                break;
            default:
                msgCls = me.INFO;
                break;
        }

        var win = Ext.create('Ext.ux.window.Notification', {
            corner: 'tr',
            paddingX: 15,
            paddingY: 50,
            width: 225,
            autoHeight: true,
            slideInDelay: 500,
            slideDownDelay: 500,
            autoDestroyDelay: 4000,
            autoDestroy: !keep || false,
            resizable: false,
            slideInAnimation: 'backOut',
            slideDownAnimation: 'ease',
            cls: 'kebab-notification',
            autoShow: true,
            closable: false,
            preventHeader: true,
            items: [{
                border: false,
                bodyStyle: 'background: transparent !important; text-align:left !important;',
                defaults: {
                    border: false,
                    bodyStyle: 'background: transparent !important; text-align:left !important;'
                },
                layout: {
                    type: 'hbox',
                    pack: 'start',
                    align: 'stretch'
                },
                items: [{
                    width: 32,
                    height: 32,
                    cls: msgCls
                },{
                    flex:1,
                    margins: '0 0 0 2',
                    padding: 8,
                    html: msg || 'Some information message'
                }]
            }],
            buttonAlign: 'center'
        });

        if (button) {
            Ext.apply(win, {
                autoDestroy:false
            });
            win.add(Ext.applyIf(button, {
                minWidth: 100,
                style: 'margin-top: 5px;',
                text: 'Click to open',
                listeners: {
                    el: {
                        click: function() {
                            win.close();
                        }
                    }
                }
            }));
        }
        win.getEl().on('click', function() {
            win.close();
        });
    }
});