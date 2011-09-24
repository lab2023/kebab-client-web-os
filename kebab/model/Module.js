/**
 * @class Module
 * @extends Ext.data.Model
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS shortcuts model
 */
Ext.define('Kebab.model.Module', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'name' },
        { name: 'icon' }
    ]
});