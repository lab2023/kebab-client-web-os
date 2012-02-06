/**
 * @class Launchpad
 * @extends Ext.window.Window
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop launchpad widget
 */
Ext.define('Apps.userManager.view.UserList', {
    extend: 'Ext.view.View',
    alias : 'widget.userManager_userList',

    requires: [
        'Ext.XTemplate'
    ],

    id: 'userManager-userList',

    initComponent: function() {
        var me = this,
            tpl = Ext.create('Ext.XTemplate',
            '<div class="active">',
                '<h1 class="active">Activated users</h1>',
                '<tpl for=".">',
                    '<tpl if="active == true">',
                        '<div class="users">',
                            '<p class="body"><strong>{name}</strong><br />{email}</p>',
                            '<p class="links"><a href="#">Deactivate</a></p>',
                            '<p class="clear"></p>',
                        '</div>',
                    '</tpl>',
                '</tpl>',
            '</div>',
            '<div class="passive">',
                '<h1>Deactivated users</h1>',
                '<tpl for=".">',
                    '<tpl if="active == false">',
                        '<div class="users">',
                            '<p class="body"><strong>{name}</strong><br />{email}</p>',
                            '<p class="links"><a href="#">Rectivate</a></p>',
                            '<p class="clear"></p>',
                        '</div>',
                    '</tpl>',
                '</tpl>',
            '</div>'
            );

        Ext.apply(me,{
            deferInitialRefresh: false,
            store: Ext.create('Apps.userManager.store.Users', {
                autoLoad: true
            }),
            tpl: tpl,
            itemSelector: 'div.users',
            overItemCls: 'users-hover',
            multiSelect: false,
            singleSelect: true,
            autoScroll  : true,
        }, null);

        me.callParent(arguments);
    }
});