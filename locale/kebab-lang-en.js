Ext.onReady(function() {

    if (Ext.ClassManager.get('Kebab')) {

        var translations = {};

        // Kebab core translations
        translations.kebab = {
            all: 'All',
            success: 'Successful',
            failure: 'Failure',
            welcome: 'Welcome to Kebab',
            signIn: 'Sign-in',
            hello: 'Hi, {0}',
            feedback: 'Feedback and support',
            shutdown: 'Shutdown and exit',
            departments: {
                title: 'Departments',
                system : 'System',
                customization: 'Customization'
            },
            messages: {
                confirm: 'Are you sure ?',
                sessionDestroyMsg: 'Your session will be terminated...',
                createMsg: 'New record is created...',
                updateMsg: 'Your selected record is updated...',
                deleteMsg: 'Your selected record is deleted...',
                beDeletedMsg: 'Your selected record will be deleted...',
                success: 'Operation successful.',
                failure: 'Operation failed... Please try again.'
            },
            launchers: {
                showLaunchpad: 'Show launchpad',
                showDesktop: 'Show desktop'
            },
            buttons: {
                cancel: 'Cancel',
                clear: 'Clear',
                save: 'Save',
                send: 'Send',
                add: 'Add',
                passwordReset: 'Password reset',
                selectLanguage: 'Select language'
            },
            texts: {
                id: 'No',
                enable: 'Enable',
                disable: 'Disable',
                enabledRecords: 'Enabled records',
                disabledRecords: 'Disabled records',
                pleaseSelect: 'Please select item',
                passiveRecord: 'Disable record',
                activeRecord: 'Enable record',
                tryAgain: 'Try again',
                empty: 'No record to display',
                addRecord: 'Add record',
                editRecord: 'Edit record',
                deleteRecord: 'Delete record',
                seeRecordDetails: 'Record details',
                actions: 'Actions',
                name: 'Name',
                info: 'Information',
                quickSearch: 'Quick search',
                subject: 'Subject',
                message: 'Message',
                type: 'Type',
                status: 'Status',
                total: 'Total',
                other: 'Other',
                email: 'E-mail',
                password: 'Password',
                cascade: 'Cascade',
                minimize: 'Minimize',
                pleaseWait: 'Please wait...',
                checking: 'Checking...',
                list: 'List',
                openNewWindow: 'Open new window',
                value: 'Value',
                date: 'Date',
                time: 'Time',
                pin: 'Pin this dialog',
                dateTime: 'Date &amp; Time',
                start: 'Start',
                finish: 'Finish',
                diff: 'Diff',
                details: 'Details',
                notes: 'Notes'
            },
            infos: {
                typeEmailHere: 'Type your e-mail here',
                forgotPassword: 'Enter your email and we\'ll email to your new password'
            }
        };
        // Profile App translations
        translations.profile = {
            title: 'User Settings'
        };
        // accountManager translations
        translations.accountManager = {
            title: 'Your Account'
        };
        // userManager translations
        translations.userManager = {
            title: 'Users',
            texts: {
                userInvitation: 'Invite new user',
                userLimits: 'User limits'
            }
        };
        // Add translations
        Kebab.setTranslations(translations);
    }
});