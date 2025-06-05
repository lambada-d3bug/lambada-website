import { GlobalConfig } from 'payload';

export const header: GlobalConfig = {
    slug: 'header',
    fields: [
        {
            name: 'navLogo',
            label: 'logo de la barre de navigation',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'navItems',
            type: 'array',
            fields: [
                {
                    name: 'itemsGroup',
                    label: 'lien',
                    type: 'group',
                    fields: [
                        { name: 'label', label: 'label', type: 'text' },
                        { name: 'url', label: 'url', type: 'text' },
                    ],
                },
            ],
        },
        {
            name: 'navButton',
            label: 'bouton de la barre de nav',
            type: 'group',
            fields: [
                { name: 'label', label: 'label', type: 'text' },
                { name: 'labelMobile', label: 'labelMobile', type: 'text' },
                { name: 'url', label: 'url', type: 'text' },
            ],
        },
        {
            name: 'language',
            label: 'Sélection du langage',
            type: 'group',
            fields: [
                { name: 'languagePlaceholder', label: 'texte indicatif', type: 'text' },
                {
                    name: 'languageChoice',
                    label: 'choix de la langue',
                    type: 'array',
                    fields: [{ name: 'lang', label: 'langue', type: 'text' }],
                },
            ],
        },
    ],
};
