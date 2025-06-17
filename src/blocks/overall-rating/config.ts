import { Block } from 'payload';

export const OverallRating: Block = {
    slug: 'overallRating',
    labels: {
        singular: 'bloc de la note générale',
        plural: 'bloc de la note générale',
    },
    fields: [
        { name: 'blockDisplayBoolean', label: 'Cacher le footer?', type: 'checkbox' },
        { name: 'title', label: 'titre', type: 'text', localized: true },
        {
            name: 'starEmptyLogo',
            label: 'logo étoile creuse',
            type: 'upload',
            relationTo: 'media',
        },
    ],
};
