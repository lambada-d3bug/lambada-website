import { Block } from 'payload';

export const Hero: Block = {
    slug: 'hero',
    labels: { singular: 'hero', plural: 'hero' },
    fields: [
        { name: 'blockDisplayBoolean', label: 'cacher le bloc', type: 'checkbox' },
        { name: 'bgImage', label: 'image de background', type: 'upload', relationTo: 'media' },
        { name: 'heading', label: 'titre', type: 'text', localized: true },
        {
            name: 'button',
            label: 'bouton',
            type: 'group',
            fields: [
                { name: 'label', label: 'label', type: 'text', localized: true },
                { name: 'url', label: 'url', type: 'text' },
            ],
        },
    ],
};
