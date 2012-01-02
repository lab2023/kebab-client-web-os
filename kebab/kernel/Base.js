/**
 * @class Desktop
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop
 */
Ext.define('Kebab.kernel.Base', {
    singleton: true,
    extend: 'Ext.util.Observable',

    requires: [
        'Ext.ux.window.Notification'
    ]
});