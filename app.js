// Loader configurations
Ext.Loader.setConfig({
    enabled : true
});

/**
 * Kebab
 */
Ext.application({
    name: 'Kebab',
    autoCreateViewport: true,
    
    controllers: [
        'Login',
        'Desktop'
    ]
});
