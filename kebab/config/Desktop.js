/**
 * @class Desktop
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop config class
 */
Ext.define('Kebab.config.Desktop', {
    alternateClassName: 'Kebab.DesktopConfig',
    singleton: true,

    config: {
        wallpaper: 'vintage_speckles.png',
        menu: {
            height: 32,
            position: 'top'
        },
        dock: {
            position: 'left',
            launchers: {
                size: 48
            }
        },
        launchpad: {
            launchers: {
                width: 110,
                height: 140,
                size: 96
            }
        },
        apps: {
            requireAll: false
        }
    }
});