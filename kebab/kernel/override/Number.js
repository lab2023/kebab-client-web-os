/**
 * @class Number
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab.kernel.override.Number
 *
 * This override is fix Google Chrome 18/19/20 layout bugs *
 * Community links:
 * http://www.sencha.com/forum/showthread.php?192517-OPEN-4.1-RC1-layouts-problems-in-chrome18
 * http://www.sencha.com/forum/showthread.php?186171-B3-RC1-RC2-Weird-stuff-happening-on-Chrome-18-19/page4
 * http://code.google.com/p/v8/issues/detail?id=2056
 */
Ext.define('Kebab.kernel.override.Number', {
    singleton: true,

    init: function() {

        Ext.Number.constrain = function(number, min, max) {
            number = parseFloat(number);

            if (isNaN(number)) {
                return NaN;
            }
            if (!isNaN(min)) {
                number = Math.max(number, min);
            }
            if (!isNaN(max)) {
                number = Math.min(number, max);
            }
            return number;
        };
    }
});
Ext.onReady(Kebab.kernel.override.Number.init, Kebab.kernel.override.Number);