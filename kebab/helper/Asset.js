/**
 * @class Asset
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Asset helpers
 */
Ext.define('Kebab.helper.Asset', {
    alternateClassName: 'Kebab.AssetHelper',
    singleton: true,

    constructor: function() {
        var me = this;

        // Load core css resources
        var cssFiles = [
            'vendors/' + Kebab.getExtJs('path') + '/resources/css/' + Kebab.getExtJs('theme') + '.css',
            'vendors/fatcow-icons/fatcow-icons.css',
            'resources/css/kebab.css'
        ];
        me.loadCSS(cssFiles);
    },

    /**
     * Stylesheet loader helper
     * Load css file(s) from document head
     *
     * @param {Array} paths
     */
    loadCSS: function(paths) {
        var me = this,
            docHead = Ext.getHead();

        Ext.each(paths, function(cssPath) {
            Ext.DomHelper.append(
                docHead, {
                    tag: 'link',
                    type: 'text/css',
                    rel: 'stylesheet',
                    href: me.cacheControl(Kebab.getRoot(cssPath))
                }
            );
        });
    },

    /**
     * Javascript loader helper
     * Load js file(s) from document head
     *
     * @param {Array} paths
     */
    loadJS: function(paths) {
        var me = this,
            docHead = Ext.getHead();

        Ext.each(paths, function(jsPath) {
            var scriptTag = document.createElement('script');
            scriptTag.type = 'text/javascript';
            scriptTag.src = me.cacheControl(Kebab.getRoot(jsPath));
            docHead.appendChild(scriptTag);
        });
    },

    /**
     * Wallpaper helper
     * Change the body wallpaper
     *
     * @param {String} img
     */
    loadWallpaper: function(img) {
        var me = this,
            imgUrl = me.cacheControl(Kebab.getRoot('resources/wallpapers/' + img));

        Ext.getBody().setStyle({
            backgroundImage: 'url( ' + imgUrl + ')',
            backgroundPosition: 'center',
            //backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
        });
    },

    /**
     * Generate cache param
     * @param {String} assetPath
     */
    cacheControl: function(assetPath) {
        if (Kebab.getEnv() == 'development') {
            var dcParam = '_dc=' + Ext.id(); // TODO Replace to project version
            return Ext.urlAppend(assetPath, dcParam);
        } else {
            return assetPath;
        }
    }
});