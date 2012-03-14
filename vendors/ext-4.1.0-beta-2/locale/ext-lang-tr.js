/**
 * List compiled by mystix on the extjs.com forums.
 * Thank you Mystix!
 *
 * Turkish translation by Alper YAZGAN
 * 2008-01-24, 10:29 AM 
 * 
 * Updated to 2.2 by YargicX
 * 2008-10-05, 06:22 PM
 */
Ext.onReady(function() {
    var cm = Ext.ClassManager, 
        exists = Ext.Function.bind(cm.get, cm);


    if(Ext.Updater){
        Ext.Updater.defaults.indicatorText = '<div class="loading-indicator">Yükleniyor ...</div>';
    }

    if(exists('Ext.view.View')){
      Ext.view.View.prototype.emptyText = "";
    }

    if(exists('Ext.grid.Grid')){
      Ext.grid.Grid.prototype.ddText = "Seçili satır sayısı : {0}";
    }

    if(Ext.TabPanelItem){
      Ext.TabPanelItem.prototype.closeText = "Sekmeyi kapat";
    }

    if(exists('Ext.form.field.Base')){
      Ext.form.field.Base.prototype.invalidText = "Bu alandaki değer geçersiz";
    }

    if(Ext.LoadMask){
      Ext.LoadMask.prototype.msg = "Yükleniyor ...";
    }

    if(Ext.Date) {
        Ext.Date.monthNames = [
          "Ocak",
          "Şubat",
          "Mart",
          "Nisan",
          "Mayıs",
          "Haziran",
          "Temmuz",
          "Ağustos",
          "Eylül",
          "Ekim",
          "Kasım",
          "Aralık"
        ];

        Ext.Date.getShortMonthName = function(month) {
          return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
          Jan : 0,
          Feb : 1,
          Mar : 2,
          Apr : 3,
          May : 4,
          Jun : 5,
          Jul : 6,
          Aug : 7,
          Sep : 8,
          Oct : 9,
          Nov : 10,
          Dec : 11
        };

        Ext.Date.getMonthNumber = function(name) {
          return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = [
          "Pazar",
          "Pazartesi",
          "Salı",
          "Çarşamamba",
          "Perşembe",
          "Cuma",
          "Cumartesi"
        ];

        Ext.Date.shortDayNames = [
          "Paz",
          "Pzt",
          "Sal",
          "Çarş",
          "Prş",
          "Cum",
          "Cmt"
        ];

        Ext.Date.getShortDayName = function(day) {
          return Ext.Date.shortDayNames[day];
        };
    }
    
    if(Ext.MessageBox){
      Ext.MessageBox.buttonText = {
        ok     : "Tamam",
        cancel : "İptal",
        yes    : "Evet",
        no     : "Hayır"
      };
    }

    if(exists('Ext.util.Format')){
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: 'TL',  // Turkish Lira
            dateFormat: 'd/m/Y'
        });
    }

    if(exists('Ext.picker.Date')){
      Ext.apply(Ext.picker.Date.prototype, {
        todayText         : "Bugün",
        minText           : "Bu tarih izin verilen en küçük tarihten daha önce",
        maxText           : "Bu tarih izin verilen en büyük tarihten daha sonra",
        disabledDaysText  : "",
        disabledDatesText : "",
        monthNames        : Ext.Date.monthNames,
        dayNames          : Ext.Date.dayNames,
        nextText          : 'Gelecek Ay (Control+Right)',
        prevText          : 'Önceki Ay (Control+Left)',
        monthYearText     : 'Bir ay seçiniz (Yılı artırmak/azaltmak için Control+Up/Down)',
        todayTip          : "{0} (Boşluk Tuşu - Spacebar)",
        format            : "d/m/Y",
        startDay          : 1
      });
    }

    if(exists('Ext.picker.Month')) {
      Ext.apply(Ext.picker.Month.prototype, {
          okText            : "&#160;Tamam&#160;",
          cancelText        : "İptal"
      });
    }


    if(exists('Ext.toolbar.Paging')){
      Ext.apply(Ext.PagingToolbar.prototype, {
        beforePageText : "Sayfa",
        afterPageText  : " / {0}",
        firstText      : "İlk Sayfa",
        prevText       : "Önceki Sayfa",
        nextText       : "Sonraki Sayfa",
        lastText       : "Son Sayfa",
        refreshText    : "Yenile",
        displayMsg     : "Gösterilen {0} - {1} / {2}",
        emptyMsg       : 'Gösterilebilecek veri yok'
      });
    }

    if(exists('Ext.form.field.Text')){
      Ext.apply(Ext.form.field.Text.prototype, {
        minLengthText : "Girilen verinin uzunluğu en az {0} olabilir",
        maxLengthText : "Girilen verinin uzunluğu en fazla {0} olabilir",
        blankText     : "Bu alan boş bırakılamaz",
        regexText     : "",
        emptyText     : null
      });
    }

    if(exists('Ext.form.field.Number')){
      Ext.apply(Ext.form.field.Number.prototype, {
        minText : "En az {0} girilebilir",
        maxText : "En çok {0} girilebilir",
        nanText : "{0} geçersiz bir sayıdır"
      });
    }

    if(exists('Ext.form.field.Date')){
      Ext.apply(Ext.form.field.Date.prototype, {
        disabledDaysText  : "Devre dışı",
        disabledDatesText : "Devre dışı",
        minText           : "Bu tarih, {0} tarihinden daha sonra olmalıdır", 
        maxText           : "Bu tarih, {0} tarihinden daha önce olmalıdır",
        invalidText       : "{0} geçersiz bir tarihdir - tarih formatı {1} şeklinde olmalıdır",
        format            : "d/m/Y",
        altFormats        : "d.m.y|d.m.Y|d/m/y|d-m-Y|d-m-y|d.m|d/m|d-m|dm|dmY|dmy|d|Y.m.d|Y-m-d|Y/m/d"
      });
    }

    if(exists('Ext.form.field.ComboBox')){
      Ext.apply(Ext.form.field.ComboBox.prototype, {
        valueNotFoundText : undefined
      });
        Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
            loadingText       : "Yükleniyor ..."
        });
    }

    if(exists('Ext.form.field.VTypes')){
    	Ext.form.field.VTypes["emailText"]='Bu alan "user@example.com" şeklinde elektronik posta formatında olmalıdır';
    	Ext.form.field.VTypes["urlText"]='Bu alan "http://www.example.com" şeklinde URL adres formatında olmalıdır';
    	Ext.form.field.VTypes["alphaText"]='Bu alan sadece harf ve _ içermeli';
    	Ext.form.field.VTypes["alphanumText"]='Bu alan sadece harf, sayı ve _ içermeli';
    }

    if(exists('Ext.form.field.HtmlEditor')){
      Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        createLinkText : 'Lütfen bu bağlantı için gerekli URL adresini giriniz:',
        buttonTips : {
          bold : {
            title: 'Kalın(Bold) (Ctrl+B)',
            text: 'Şeçili yazıyı kalın yapar.',
            cls: Ext.baseCSSPrefix + 'html-editor-tip'
          },
          italic : {
            title: 'İtalik(Italic) (Ctrl+I)',
            text: 'Şeçili yazıyı italik yapar.',
            cls: Ext.baseCSSPrefix + 'html-editor-tip'
          },
          underline : {
            title: 'Alt çizgi(Underline) (Ctrl+U)',
            text: 'Şeçili yazının altını çizer.',
            cls: Ext.baseCSSPrefix + 'html-editor-tip'
          },
          increasefontsize : {
            title: 'Fontu büyült',
            text: 'Yazı fontunu büyütür.',
            cls: Ext.baseCSSPrefix + 'html-editor-tip'
          },
          decreasefontsize : {
            title: 'Fontu küçült',
            text: 'Yazı fontunu küçültür.',
            cls: Ext.baseCSSPrefix + 'html-editor-tip'
          },
          backcolor : {
            title: 'Arka Plan Rengi',
            text: 'Seçili yazının arka plan rengini değiştir.',
            cls: Ext.baseCSSPrefix + 'html-editor-tip'
          },
          forecolor : {
            title: 'Yazı Rengi',
            text: 'Seçili yazının rengini değiştir.',
            cls: Ext.baseCSSPrefix + 'html-editor-tip'
          },
          justifyleft : {
            title: 'Sola Daya',
            text: 'Yazıyı sola daya.',
            cls: Ext.baseCSSPrefix + 'html-editor-tip'
          },
          justifycenter : {
            title: 'Ortala',
            text: 'Yazıyı editörde ortala.',
            cls: Ext.baseCSSPrefix + 'html-editor-tip'
          },
          justifyright : {
            title: 'Sağa daya',
            text: 'Yazıyı sağa daya.',
            cls: Ext.baseCSSPrefix + 'html-editor-tip'
          },
          insertunorderedlist : {
            title: 'Noktalı Liste',
            text: 'Noktalı listeye başla.',
            cls: Ext.baseCSSPrefix + 'html-editor-tip'
          },
          insertorderedlist : {
            title: 'Numaralı Liste',
            text: 'Numaralı lisyeye başla.',
            cls: Ext.baseCSSPrefix + 'html-editor-tip'
          },
          createlink : {
            title: 'Web Adresi(Hyperlink)',
            text: 'Seçili yazıyı web adresi(hyperlink) yap.',
            cls: Ext.baseCSSPrefix + 'html-editor-tip'
          },
          sourceedit : {
            title: 'Kaynak kodu Düzenleme',
            text: 'Kaynak kodu düzenleme moduna geç.',
            cls: Ext.baseCSSPrefix + 'html-editor-tip'
          }
        }
      });
    }

    if(exists('Ext.grid.header.Container')){
      Ext.apply(Ext.grid.header.Container.prototype, {
        sortAscText  : "Artan sırada sırala",
        sortDescText : "Azalan sırada sırala",
        lockText     : "Kolonu kilitle",
        unlockText   : "Kolon kilidini kaldır",
        columnsText  : "Kolonlar"
      });
    }

    if(exists('Ext.grid.GroupingFeature')){
      Ext.apply(Ext.grid.GroupingFeature.prototype, {
        emptyGroupText : '(Yok)',
        groupByText    : 'Bu Alana Göre Grupla',
        showGroupsText : 'Gruplar Halinde Göster'
      });
    }

    if(exists('Ext.grid.PropertyColumnModel')){
      Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
        nameText   : "Ad",
        valueText  : "Değer",
        dateFormat : "d/m/Y"
      });
    }

});