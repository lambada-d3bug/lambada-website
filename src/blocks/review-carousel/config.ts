import { Block } from 'payload';

export const ReviewCarousel: Block = {
    slug: 'reviewCarousel',
    labels: { singular: 'Carousselle de review google', plural: 'Carousselle de review google' },
    fields: [
        { name: 'overallText', label: 'Avis général', type: 'text' },
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
                },
                {
                    name: 'collapseLabel',
                    label: 'Texte pour "Voir moins"',
                    type: 'text',
                },
            ],
        },
    ],
};
