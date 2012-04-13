Ext.onReady(function () {

    if (Ext.ClassManager.get('Kebab')) {

        var translations = {};

        // Kebab core translations
        translations.kebab = {
            all:'Hepsi',
            welcome:'coNinja\'ya hoşgeldiniz',
            signIn:'Oturum Açın',
            success:'Başarılı',
            failure:'Başarısız',
            hello:'Merhaba, {0}',
            feedback:'Geri bildirim ve destek',
            shutdown:'Oturumu kapatın ve çıkın',
            departments:{
                title:'Departmanlar',
                system:'Sistem',
                customization:'Özelleştirme'
            },
            messages:{
                confirm:'Emin misiniz ?',
                sessionDestroyMsg:'Oturumunuz sonlandırılacaktır...',
                createMsg:'Yeni kayıt oluşturuldu...',
                updateMsg:'Seçtiğiniz kayıt güncellendi...',
                deleteMsg:'Seçtiğiniz kayıt silindi...',
                beDeletedMsg:'Seçtiğiniz kayıt silinecektir...',
                success:'İşlem başarılıl.',
                failure:'İşlem başarısız... Lütfen tekrar deneyiniz.'
            },
            launchers:{
                showLaunchpad:'Uygulamaları görüntüle',
                showDesktop:'Masaüstünü görüntüle'
            },
            buttons:{
                cancel:'İptal',
                clear:'Temizle',
                save:'Kaydet',
                send:'Gönder',
                add:'Ekle',
                passwordReset:'Şifre sıfırlama',
                selectLanguage:'Dilinizi seçin'
            },
            texts:{
                id:'No',
                enable:'Etkinleştir',
                disable:'Devre dışı bırak',
                enabledRecords:'Etkin kayıtlar',
                disabledRecords:'Devre dışı olan kayıtlar',
                pleaseSelect:'Lütfen öğeyi seçiniz',
                passiveRecord:'Kaydı devre dışı bırak',
                activeRecord:'Kaydı etkinleştir',
                tryAgain:'Tekrar dene',
                empty:'Gösterilecek kayıt bulunmamaktadır',
                addRecord:'Kayıt ekle',
                editRecord:'Kaydı düzenle',
                deleteRecord:'Kaydı sil',
                seeRecordDetails:'Kayıt detayları',
                actions:'Eylemler',
                name:'İsim',
                info:'Bilgi',
                quickSearch:'Hızlı arama',
                subject:'Başlık',
                message:'Mesaj',
                type:'Tip',
                status:'Durum',
                total:'Toplam',
                other:'Diğer',
                email:'E-posta',
                password:'Şifre',
                cascade:'Sırala',
                minimize:'Küçült',
                pleaseWait:'Lütfen bekleyiniz...',
                checking:'Kontrol ediliyor...',
                list:'Liste',
                openNewWindow:'Yeni pencerede aç',
                value:'Değer',
                date:'Tarih',
                time:'Zaman',
                pin:'Bu pencereyi sabitle',
                dateTime:'Tarih & Saat',
                start:'Başlangıç',
                finish:'Bitiş',
                diff:'Fark',
                details:'Detaylar',
                notes:'Notlar'
            },
            infos:{
                typeEmailHere:'Buraya e-postanızı yazınız',
                forgotPassword:'E-postanızı giriniz. Yeni şifreniz, bu e-posta adresinize gönderilecektir.'
            }
        };
        // Profile App translations
        translations.profile = {
            title:'Kullanıcı Ayarları',
            description: 'Kullanıcı profili ayarlarınız'
        };
        // accountManager translations
        translations.accountManager = {
            title:'Hesabınız',
            description: 'Ödeme, fatura ve paket yükseltme/düşürme işlemleri'
        };
        // userManager translations
        translations.userManager = {
            title:'Kullanıcılar',
            description: 'Yeni kullanıcı ekleyin ve mevcut kullanıcılarınızı yönetin',
            texts:{
                userInvitation:'Yeni kullanıcı davet et',
                userLimits:'Kullanıcı limitleri'
            }
        };

        // Add translations
        Kebab.setTranslations(translations);
    }
});