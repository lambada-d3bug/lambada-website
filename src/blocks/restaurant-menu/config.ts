import { Block } from 'payload';

export const RestaurantMenu: Block = {
    slug: 'restaurantMenu',
    labels: { singular: 'Menu du restaurant', plural: 'Menu du restaurant' },
    fields: [
        { name: 'blockDisplayBoolean', label: 'cacher le bloc', type: 'checkbox' },
        { name: 'title', label: 'titre', type: 'text', localized: true },
        {
            name: 'images',
            label: 'images',
            type: 'array',
            fields: [{ name: 'image', label: 'image', type: 'upload', relationTo: 'media' }],
        },
        {
            name: 'schedules',
            label: 'groupe horaires',
            type: 'group',
            fields: [
                { name: 'title', label: 'titre', type: 'text', localized: true },
                {
                    name: 'schedulesArray',
                    label: "tableau d'horaires",
                    type: 'array',
                    minRows: 5,
                    maxRows: 7,
                    fields: [
                        {
                            name: 'schedulesGroup',
                            label: 'Horaires',
                            type: 'group',
                            fields: [
                                { name: 'day', label: 'jour', type: 'text', localized: true },

                                {
                                    name: 'timePM',
                                    label: 'heure',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        { name: 'image', label: 'image', type: 'upload', relationTo: 'media' },
    ],
};
