import { Block } from 'payload';

export const TermsAndConditions: Block = {
    slug: 'termsAndConditions',
    labels: { singular: 'Termes et conditions', plural: 'Termes et conditions' },
    fields: [
        { name: 'blockDisplayBoolean', label: 'Cacher le bloc', type: 'checkbox' },
        { name: 'title', label: 'Titre', type: 'text', localized: true },
        {
            name: 'content',
            label: 'Contenu',
            type: 'array',
            fields: [
                { name: 'subtitle', label: 'Sous-titre', type: 'text', localized: true },
                { name: 'paragraph', label: 'Paragraphe', type: 'text', localized: true },
            ],
        },
    ],
};
