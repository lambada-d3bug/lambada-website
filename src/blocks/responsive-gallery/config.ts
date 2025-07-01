import { Block } from 'payload';

export const ResponsiveGallery: Block = {
    slug: 'responsiveGallery',
    labels: { singular: "Gallerie d'images responsive", plural: "Galleries d'images responsives" },
    fields: [
        { name: 'blockDisplayBoolean', label: 'cacher le bloc', type: 'checkbox' },
        { name: 'title', label: 'titre', type: 'text', localized: true },
        {
            name: 'imagesArray',
            label: "Groupe d'images",
            type: 'array',
            minRows: 3,
            fields: [{ name: 'image', label: 'Image', type: 'upload', relationTo: 'media' }],
        },
    ],
};
