/**
 * @class Session
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel Session controller
 */
Ext.define('Kebab.controller.Session', {
    extend: 'Ext.app.Controller',

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        me.control({
            // Listener launcher signOut component
            'component[action="signOut"]': {
                click: me.signOut
            },
            'component[action="restart"]': {
                click: me.restart
            }
        });
        // Call parent
        me.callParent(arguments);
    },

    /**
     * Sign out action
     */
    signOut: function(cp, e) {
        var me = this,
            loadMask = Kebab.LoaderHelper.getMask();

        e.stopEvent();

        // Are u sure ?
        Ext.Msg.show({
            title: Kebab.I18nHelper.t('kebab.messages.confirm'),
            msg: Kebab.I18nHelper.t('kebab.messages.sessionDestroyMsg'),
            buttons: Ext.Msg.OKCANCEL,
            animateTarget: cp.getEl(),
            fn: function(button) {
                if (button == 'ok') {
                    loadMask.show();
                    Ext.Ajax.request({
                        url: 'sessions/' + Kebab.getBootstrap('user')['id'],
                        method: 'DELETE',
                        success: function() {
                            Kebab.URLHelper.redirect(); // index.html
                        },
                        failure: function() {
                            loadMask.hide();
                            Kebab.NotifyHelper.msg('Failed', 'Logout failed... Please try again.');
                        }
                    });
                }
            },
            icon:Ext.Msg.WARNING
        });
    },

    /**
     * Restart session
     */
    restart: function() {
        Kebab.LoaderHelper.show();
        Kebab.URLHelper.reload(); // Current page
    }
});
