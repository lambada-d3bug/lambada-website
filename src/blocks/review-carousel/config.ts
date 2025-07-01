import { Block } from 'payload';

export const ReviewCarousel: Block = {
    slug: 'reviewCarousel',
    labels: { singular: 'Carousselle de review google', plural: 'Carousselle de review google' },
    fields: [
        { name: 'blockDisplayBoolean', label: 'cacher le bloc', type: 'checkbox' },
        { name: 'overallText', label: 'Avis général', type: 'text', localized: true },
        {
            name: 'starLogo',
            label: 'logo étoile pleine',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'expandToggleTexts',
            label: 'Textes Voir plus / Voir moins',
            type: 'group',
            fields: [
                {
                    name: 'expandLabel',
                    label: 'Texte pour "Voir plus"',
                    type: 'text',
                    localized: true,
                },
                {
                    name: 'collapseLabel',
                    label: 'Texte pour "Voir moins"',
                    type: 'text',
                    localized: true,
                },
            ],
        },
    ],
};
