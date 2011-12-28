/**
 * @class Languages
 * @extends Ext.data.Store
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Languages store
 */
Ext.define('Kebab.store.Languages', {
    extend: 'Ext.data.Store',

	proxy: {
        type: 'memory'
    },

    data: [{
        "active": false,
        "name": 'Türkçe',
        "short": "tr"
    },{
        "active": true,
        "name": 'English',
        "short": "en"
    }]
});
