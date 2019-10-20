module.exports = {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'en',
    vueI18n: {
        fallbackLocale: 'en',
        messages: {
            en: require('./en'),
            fr: require('./fr'),
            ar: require('./ar')
        }
    }
}