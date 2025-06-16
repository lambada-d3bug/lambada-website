export function formatDateLocalized(
    date: Date,
    locale: 'en' | 'fr' | 'it' = 'en',
    options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    },
): string {
    const localeMap: Record<'en' | 'fr' | 'it', string> = {
        en: 'en-US',
        fr: 'fr-FR',
        it: 'it-IT',
    };

    return new Intl.DateTimeFormat(localeMap[locale], options).format(date);
}
