/**
 * @class Shortcuts
 * @extends Ext.data.Store
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS shortcuts data store
 */
Ext.define('Kebab.store.Shortcuts', {
    extend: 'Ext.data.Store',

    model: 'Kebab.model.Module',

    proxy: {
        type: 'memory',
        reader: {
            type : 'json'
        }
    },

    data: [
        {name: 'Sample', iconCls: 'a', module: 'sample-module'},
        {name: 'Demo', iconCls: 'a', module: 'demo-module'}
    ]
});
