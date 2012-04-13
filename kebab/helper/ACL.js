/**
 * @class ACL
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab ACL helper
 */
Ext.define('Kebab.helper.ACL', {
    alternateClassName: 'Kebab.ACLHelper',
    singleton: true,

    /**
     * Check privilege
     * @param {String} name
     */
    allow: function(name) {
        var store = Ext.StoreManager.lookup('Privileges');
        return store.findExact('sys_name', name) !== -1 ? true : false;
    },

    /**
     * Get privilege
     * @param {String} name
     */
    getPrivilege: function(name) {
        var store = Ext.StoreManager.lookup('Privileges'),
            key = store.findExact('sys_name', name);
        return store.getAt(key);
    },

    /**
     * Get all privileges
     */
    getPrivileges: function() {
        var store = Ext.StoreManager.lookup('Privileges');
        return store.data;
    }
});