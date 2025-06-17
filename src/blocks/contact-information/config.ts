import { Block } from 'payload';

export const ContactInformation: Block = {
    slug: 'contactInformation',
    labels: {
        singular: 'Bloc contenant les informations de contact',
        plural: 'Bloc contenant les informations de contact',
    },
    fields: [
        { name: 'blockDisplayBoolean', label: 'Cacher le footer?', type: 'checkbox' },
        {
            name: 'telGroup',
            label: 'Telephone',
            type: 'group',
            fields: [
                { name: 'label', label: 'label', type: 'text', localized: true },
                { name: 'number', label: 'numero', type: 'text' },
            ],
        },
        {
            name: 'emailGroup',
            label: 'Email',
            type: 'group',
            fields: [
                { name: 'label', label: 'label', type: 'text', localized: true },
                { name: 'email', label: 'email', type: 'text' },
            ],
        },
    ],
};
