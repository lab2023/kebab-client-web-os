/**
 * @class URL
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab URL helpers
 */
Ext.define('Kebab.helper.URL', {
    alternateClassName: 'Kebab.URLHelper',
    singleton: true,

    /**
     * Generate full url
     * Get the generated full url (baseUrl + url)
     *
     * @param url
     * @return {String} Generated full url
     */
    url: function(url) {
        return url ?
            Ext.String.format('{0}/{1}', Kebab.getBaseURL(), url) :
            Kebab.getBaseURL();
    },

    /**
     * Redirector helper
     * Redirect page any url
     *
     * @param url
     */
    redirect: function(url) {
        var me = this;
        window.onbeforeunload = null;
        window.location.href = me.url(url);
    },

    /**
     * Refresh specific url
     * @param url
     */
    refresh: function(url) {
        var me = this;
        url ? me.redirect(window.location.pathname.replace('/', '') + url) : me.reload();
    },

    /**
     * Reload current url
     */
    reload: function() {
        window.location.reload();
    }
});