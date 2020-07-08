import VueI18n from 'vue-i18n';

export function setupAndGetI18n(Vue, isProduction) {
    Vue.use(VueI18n);

    const i18n = new VueI18n({
        locale: 'en',
        fallbackLocale: 'en',
        fallbackRoot: false,
        silentTranslationWarn: true,

        missing(locale, key, vm) {
            // TODO
            return key;
        }
    });

    i18n.setLocaleMessage('en', require('../../src/i18n/en.json'));
    i18n.setLocaleMessage('tr', require('../../src/i18n/tr.json'));
    i18n.setLocaleMessage('fr', require('../../src/i18n/fr.json'));
    i18n.setLocaleMessage('de', require('../../src/i18n/de.json'));
    i18n.setLocaleMessage('ja', require('../../src/i18n/ja.json'));
    i18n.setLocaleMessage('ch', require('../../src/i18n/ch.json'));

    return i18n;
}
