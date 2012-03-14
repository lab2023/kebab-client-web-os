/**
 * @class AjaxSniffer
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel AjaxSniffer class
 */
Ext.define('Kebab.kernel.connection.AjaxSniffer', {
    alternateClassName: 'Kebab.AjaxSniffer',
    singleton: true,

    requires: [
        'Ext.Ajax'
    ],

    constructor: function() {
        var me = this;

        // Set all data proxy requests global token parameter eg: &authenticity_token=123456
        Ext.Ajax.extraParams = {
            authenticity_token: Kebab.getBootstrap('authenticity_token')
        };

        Ext.Ajax.on('requestcomplete', me.requestComplete, me);
        Ext.Ajax.on('requestexception', me.requestException, me);
    },

    /**
     * 200 or 300 - Normal completed requests but including notifications
     *
     * @param conn
     * @param response
     */
    requestComplete: function(conn, response) {
        var me = this;
        me._sniffServerNotices(response);
    },

    /**
     * 401 - Exception - ACL failed (no permission)
     * 403 - Exception - Auth failed (no session)
     * 404 - Exception - Not found
     * 500 - Exception - Internal Server Error
     * 502 - Exception - Bad Gateway
     * 503 - Exception - Maintain Mode
     * 422 - Exception - unprocessable_entity (Bad parameters)  & Form errors
     *
     * @param conn
     * @param response
     */
    requestException: function(conn, response) {
        var me = this,
            delayTime = 100;

        switch(response.status) {
            case 401:
                Ext.Function.defer(me._401, delayTime, me);
                break;
            case 403:
                Ext.Function.defer(me._403, delayTime, me);
                break;
            case 404:
                me._404();
                break;
            case 422:
                Ext.Function.defer(me._422, delayTime, me, [response]);
                break;
            case 500:
                me._500();
                break;
            case 502:
                Ext.Function.defer(me._502, delayTime, me);
                break;
            case 503:
                Ext.Function.defer(me._503, delayTime, me);
                break;
        }
    },

    /**
     *
     * @param response
     */
    _sniffServerNotices: function(response) {
        var responseData = Ext.decode(response.responseText);

        if (responseData.notice) {
            var noticeData = Ext.apply({
                    notice: {
                        info: null,
                        error: null
                    }
                }, responseData),
                buildMessages = function(messages) {
                    var out = [];
                    Ext.each(messages, function(msg) {
                        out.push(msg);
                    });
                    return out.join('<br />');
                };

            if (noticeData.notice.info) {
                Kebab.NotifyHelper.msg('INFO', buildMessages(noticeData.notice.info));
            }

            if (noticeData.notice.error) {
                Kebab.NotifyHelper.msg('ERR', buildMessages(noticeData.notice.error));
            }
        }
    },

    /**
     *  ACL failed (no permission)
     */
    _401: function() {
        Ext.Msg.show({
             title: 'Permission denied!',
             msg: 'You are not authorized to do this operation.',
             buttons: Ext.Msg.OK,
             icon: Ext.Msg.ERROR
        });
    },

    /**
     *  Auth failed (no session)
     */
    _403: function() {
        Ext.Msg.show({
            title: 'Session terminated!',
            msg: 'Your session has been terminated. Please login again.',
            buttons: Ext.Msg.OK,
            fn: function() {
                Kebab.URLHelper.redirect('login');
            },
            icon: Ext.Msg.ERROR
        });
    },

    /**
     * Not found
     */
    _404: function() {
        Kebab.NotifyHelper.msg('ERR', 'Opps! Requested resource not found.', true, {
            xtype: 'button',
            text: 'Report this problem',
            handler: function() {
                //UserVoice.showPopupWidget();
                alert('Please setup your UserVoice account and enable UserVoice.showPopupWidget();');
            }
        });
    },

    /**
     * Unprocessable_entity (Bad parameters)  & Form errors
     * @param response
     */
    _422: function(response) {
        this._sniffServerNotices(response);
    },

    /**
     * Internal Server Error
     */
    _500: function() {
        Kebab.NotifyHelper.msg('ERR', '<strong>Opps! Server Error</strong><br />Something going wrong.', true, {
            xtype: 'button',
            text: 'Report this problem',
            handler: function() {
                //UserVoice.showPopupWidget();
                alert('Please setup your UserVoice account and enable UserVoice.showPopupWidget();');
            }
        });
    },

    /**
     * Bad Gateway
     */
    _502: function() {
        this._500();
    },

    /**
     * Maintain Mode
     */
    _503: function() {
        Ext.create('Ext.Window', {
            preventHeader: true,
            plain:true,
            autoShow: true,
            modal: true,
            closable:false,
            width: 600,
            height: 560,
            resizable:false,
            border:false,
            autoScroll:false,
            layout: 'fit',
            items: [{
                frame: true,
                iconCls: 'icon-switch',
                title: 'Planned downtime',
                html: '<iframe width="100%" height="100%" frameborder="0" scrolling="no" src="503.html"></iframe>'
            }]
        });
    }
});
