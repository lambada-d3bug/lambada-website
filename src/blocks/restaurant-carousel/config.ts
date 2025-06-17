import { Block } from 'payload';

export const RestaurantCarousel: Block = {
    slug: 'restaurantCarousel',
    labels: { singular: 'restaurant carousel', plural: 'restaurant carousels' },
    fields: [
        { name: 'blockDisplayBoolean', label: 'Cacher le footer?', type: 'checkbox' },
        { name: 'title', label: 'titre', type: 'text', localized: true },
        { name: 'subheading', label: 'sous-titre', type: 'text', localized: true },
        { name: 'description', label: 'description', type: 'textarea', localized: true },
        { name: 'imageSubheading', label: "sous-titre de l'image", type: 'text', localized: true },
        {
            name: 'imagesArray',
            label: "Groupe d'images",
            type: 'array',
            fields: [
                {
                    name: 'images',
                    label: 'images',
                    type: 'group',
                    fields: [
                        { name: 'image', label: 'Image', type: 'upload', relationTo: 'media' },
                        {
                            name: 'label',
                            label: 'label',
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
