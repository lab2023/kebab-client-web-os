/**
 * @class Session
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel Session controller
 */
Ext.define('Kebab.desktop.controller.Session', {
    extend: 'Ext.app.Controller',

    /**
     * Base configuration
     */
    config: {
        userData: Kebab.helper.config('user')
    },

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
        });
        // Call parent
        me.callParent(arguments);
    },

    /**
     * Sign out action
     */
    signOut: function(cp, e) {
        var me = this,
            mask = me.application.getMask();

        e.stopEvent();
        mask.show();
        Ext.Ajax.request({
            url: 'sessions/' + me.getUserData().id,
            method: 'DELETE',
            success: function() {
                Kebab.helper.redirect('login.html');
            },
            failure: function() {
                mask.hide();
                Kebab.helper.notify('Failed', 'Logout failed... Please try again.', true);
            }
        });
    }
});
