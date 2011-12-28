/**
 * @class Users
 * @extends Ext.data.Store
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Users store
 */
Ext.define('Kebab.store.Users', {
    extend: 'Ext.data.Store',

    /**
     * Store Model
     */
    model: 'Kebab.model.User',

    data: [{
        "id": 1,
        "email": "user@example.com",
        "name": "First Surname",
        "locale": "tr",
        "privileges": [{
            "id": 1,
            "user_id": 1,
            "sys_name:": "login"
        }, {
            "id": 2,
            "user_id": 1,
            "sys_name:": "logout"
        }, {
            "id": 3,
            "user_id": 1,
            "sys_name:": "change_personal_info"
        }, {
            "id": 4,
            "user_id": 1,
            "sys_name:": "show_personal_info"
        }],
        "applications": [{
            "id": 1,
            "user_id": 1,
            "sys_name:": "personal_settings",
            "sys_department":"system"
        },{
            "id": 2,
            "user_id": 2,
            "sys_name:": "calculator",
            "sys_department": "accessories"
        }]
    }]
});
