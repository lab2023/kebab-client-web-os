Ext.define('Apps.feedback.model.Feedback', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'body', type: 'string'},
        {name: 'subject', type: 'string'}
    ],

    validations: [
        {type: 'presence', field: 'body'},
        {type: 'presence', field: 'subject'}
    ],

    proxy: {
        type: 'rest',
        url : 'feedbacks'
    }
});