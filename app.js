// Loader configurations
Ext.Loader.setConfig({
    enabled : true
});

/**
 * Kebab
 */
Ext.application({
    name: 'Kebab',
    appFolder: 'application',
    autoCreateViewport: true,
    
    controllers: [
        'Login',
        'Desktop'
    ]
});