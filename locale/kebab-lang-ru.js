Ext.onReady(function() {

    if (Ext.ClassManager.get('Kebab')) {

        var translations = {};

        // Kebab core translations
        translations.kebab = {
            all: 'все',
            success: 'успешный',
            failure: 'неудачный',
            welcome: 'coNinja Добро пожаловать',
            signIn: 'Войти в',
            hello: 'привет, {0}',
            feedback: 'Обратная связь и поддержка',
            shutdown: 'Завершение работы и выход',
            departments: {
                title: 'Отделы',
                system : 'система',
                customization: 'настройка'
            },
            messages: {
                confirm: 'Вы уверены?',
                sessionDestroyMsg: 'Ваш сеанс будет прекращен...',
                createMsg: 'Новая запись создается...',
                updateMsg: 'Ваша запись обновляется...',
                deleteMsg: 'Ваша запись будет удалена...',
                beDeletedMsg: 'Выбранная запись будет удалена...',
                success: 'Операция успешна.',
                failure: 'Операция не удалось ... Пожалуйста, попробуйте еще раз'
            },
            launchers: {
                showLaunchpad: 'Показать запуска',
                showDesktop: 'Показать рабочий стол'
            },
            buttons: {
                cancel: 'отменить',
                clear: 'Очистить',
                save: 'экономить',
                send: 'отправлять',
                add: 'добавлять',
                passwordReset: 'Пассворд Ресет',
                selectLanguage: 'Изаберите језик'
            },
            texts: {
                id: 'нет',
                enable: 'Включить',
                disable: 'Отключить',
                enabledRecords: 'Включено записи',
                disabledRecords: 'Семейные записи',
                pleaseSelect: 'Пожалуйста, выберите пункт',
                passiveRecord: 'Отключить запись',
                activeRecord: 'Включить запись',
                tryAgain: 'Попробуйте еще раз',
                empty: 'Нет записей для отображения',
                addRecord: 'Добавить запись',
                editRecord: 'Редактировать запись',
                deleteRecord: 'Удалить запись',
                seeRecordDetails: 'записи деталей',
                actions: 'Действия',
                name: 'имя',
                info: 'информация',
                quickSearch: 'Быстрый поиск',
                subject: 'тема',
                message: 'сообщении',
                type: 'тип',
                status: 'статус',
                total: 'общий',
                other: 'другой',
                email: 'Е-маил',
                password: 'пароль',
                cascade: 'каскад',
                minimize: 'минимизировать',
                pleaseWait: 'Пожалуйста, подождите...',
                checking: 'контроль...',
                list: 'список',
                openNewWindow: 'Откройте в новом окне',
                value: 'значение',
                date: 'дата',
                time: 'время',
                pin: 'Прикрепите этот диалог',
                dateTime: 'Дата и время',
                start: 'начало',
                finish: 'окончание',
                diff: 'Разница',
                details: 'детали',
                notes: 'Примечания'
            },
            infos: {
                typeEmailHere: 'Введите свой ​​адрес электронной почты здесь',
                forgotPassword: 'Введите электронную почту, и мы будем по электронной почте на Ваш новый пароль'
            }
        };

        // Profile App translations
        translations.profile = {
            title: 'Настройки пользователя',
            description: 'Ваши учетные записи пользователей'
        };
        // accountManager translations
        translations.accountManager = {
            title: 'Ваш аккаунт',
            description: 'Платежей, счетов и план обновления / понижения'
        };
        // userManager translations
        translations.userManager = {
            title: 'Пользователи',
            description: 'Пригласить новых пользователей и управлять пользователями',
            texts: {
                userInvitation: 'Пригласить новых пользователей',
                userLimits: 'Пользователь пределы'
            }
        };
        // Add translations
        Kebab.setTranslations(translations);
    }
});