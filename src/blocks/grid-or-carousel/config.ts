import { Block } from 'payload';

export const GridOrCarousel: Block = {
    slug: 'gridOrCarousel',
    labels: { singular: 'carousel ou grid', plural: 'carousel ou grid' },
    fields: [
        { name: 'blockDisplayBoolean', label: 'cacher le bloc', type: 'checkbox' },
        {
            name: 'title',
            label: 'Titre décomposé',
            type: 'group',
            fields: [
                { name: 'titlePart', label: 'Partie du titre', type: 'text', localized: true },
                { name: 'titlePart1', label: 'Partie du titre', type: 'text', localized: true },
                { name: 'titlePart2', label: 'Partie du titre', type: 'text', localized: true },
            ],
        },
        {
            name: 'cardArray',
            label: 'tableau de cards',
            type: 'array',
            fields: [
                {
                    name: 'card',
                    label: 'card',
                    type: 'group',
                    fields: [
                        { name: 'icon', label: 'icon', type: 'upload', relationTo: 'media' },
                        { name: 'title', label: 'titre', type: 'text', localized: true },
                        {
                            name: 'description',
                            label: 'description',
                            type: 'text',
                            localized: true,
                        },
                    ],
                },
            ],
        },
        {
            name: 'button',
            label: 'bouton',
            type: 'group',
            fields: [
                { name: 'label', label: 'label', type: 'text', localized: true },
                { name: 'url', label: 'url', type: 'text', localized: true },
            ],
        },
    ],
};
