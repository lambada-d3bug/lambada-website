import { GlobalConfig } from 'payload';
import { revalidateGlobalHook } from '@/hooks/revalidate-global-hooks';

export const Footer: GlobalConfig = {
    slug: 'footer',
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
    label: 'footer',
    fields: [
        { name: 'blockDisplayBoolean', label: 'Cacher le footer?', type: 'checkbox' },
        { name: 'logo', label: 'logo', type: 'upload', relationTo: 'media' },
        { name: 'description', label: 'description', type: 'text', localized: true },
        {
            name: 'button',
            label: 'button',
            type: 'group',
            fields: [
                { name: 'label', label: 'label', type: 'text', localized: true },
                { name: 'url', label: 'url', type: 'text' },
            ],
        },
        {
            name: 'navArray',
            label: 'navArray',
            type: 'array',
            fields: [
                {
                    name: 'navItem',
                    label: 'navItem',
                    type: 'group',
                    fields: [
                        { name: 'label', label: 'label', type: 'text', localized: true },
                        { name: 'url', label: 'url', type: 'text' },
                    ],
                },
            ],
        },
        {
            name: 'terms',
            label: 'terms',
            type: 'group',
            fields: [
                { name: 'label', label: 'label', type: 'text', localized: true },
                { name: 'url', label: 'url', type: 'text' },
            ],
        },
        {
            name: 'confidentiality',
            label: 'confidentiality',
            type: 'group',
            fields: [
                { name: 'label', label: 'label', type: 'text', localized: true },
                { name: 'url', label: 'url', type: 'text' },
            ],
        },
        {
            name: 'socials',
            label: 'Réseaux sociaux',
            type: 'array',
            fields: [
                {
                    name: 'social',
                    label: ' Réseau social',
                    type: 'group',
                    fields: [
                        { name: 'icon', label: 'icon', type: 'upload', relationTo: 'media' },
                        { name: 'url', label: 'url', type: 'text' },
                    ],
                },
            ],
        },
        {
            name: 'copyright',
            label: 'copyright',
            type: 'array',
            fields: [{ name: 'text', label: 'texte', type: 'text', localized: true }],
        },
    ],
};
