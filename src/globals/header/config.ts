import { GlobalConfig } from 'payload';
import { revalidateGlobalHook } from '@/hooks/revalidate-global-hooks';

export const header: GlobalConfig = {
    slug: 'header',
    hooks: {
        afterChange: [
            (args) => {
                console.log('[Global.afterChange] Hook fired with args:', {
                    args,
                });

                return revalidateGlobalHook({ ...args });
            },
        ],
    },
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
                        { name: 'label', label: 'label', type: 'text', localized: true },
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
                { name: 'label', label: 'label', type: 'text', localized: true },
                { name: 'labelMobile', label: 'labelMobile', type: 'text', localized: true },
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
