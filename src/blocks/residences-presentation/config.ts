import { Block } from 'payload';

export const ResidencesPresentation: Block = {
    slug: 'residencesPresentation',
    labels: { singular: 'Présentation des résidences', plural: 'Présentation des résidences' },
    fields: [
        {
            name: 'headingGroup',
            label: 'Groupe titre',
            type: 'group',
            fields: [
                { name: 'heading', label: 'Titre', type: 'text', localized: true },
                { name: 'starLogo', label: 'Star Logo', type: 'upload', relationTo: 'media' },
                { name: 'reviewsNumber', label: "Nombre d'avis", type: 'number' },
                { name: 'rating', label: 'note', type: 'text', localized: true },
                { name: 'location', label: 'location', type: 'text', localized: true },
                { name: 'description', label: 'Description', type: 'textarea', localized: true },
                {
                    name: 'saveGroup',
                    label: 'Groupe bouton sauver',
                    type: 'group',
                    fields: [
                        { name: 'label', label: 'Label', type: 'text', localized: true },
                        { name: 'url', label: 'URL', type: 'text' },
                        { name: 'logo', label: 'Logo', type: 'upload', relationTo: 'media' },
                    ],
                },
                {
                    name: 'shareGroup',
                    label: 'Groupe bouton partager',
                    type: 'group',
                    fields: [
                        { name: 'label', label: 'Label', type: 'text', localized: true },
                        { name: 'url', label: 'URL', type: 'text' },
                        { name: 'logo', label: 'Logo', type: 'upload', relationTo: 'media' },
                    ],
                },
            ],
        },
        {
            name: 'imagesArray',
            label: "tableau d'images",
            type: 'array',
            fields: [{ name: 'image', label: 'image', type: 'upload', relationTo: 'media' }],
        },
        {
            name: 'tabs',
            label: 'Tabs',
            type: 'group',
            fields: [
                {
                    name: 'descriptionTab',
                    label: 'Tab description',
                    type: 'group',
                    fields: [
                        {
                            name: 'iconArray',
                            label: "tableau de la rangée d'icones descriptives",
                            type: 'array',
                            fields: [
                                {
                                    name: 'iconGroup',
                                    label: 'Groupe icone',
                                    type: 'group',
                                    fields: [
                                        {
                                            name: 'icon',
                                            label: 'Icon',
                                            type: 'upload',
                                            relationTo: 'media',
                                        },
                                        {
                                            name: 'label',
                                            label: 'Label',
                                            type: 'text',
                                            localized: true,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: 'descriptionGroup',
                            label: 'groupe description',
                            type: 'group',
                            fields: [
                                {
                                    name: 'heading',
                                    label: 'Heading',
                                    type: 'text',
                                    localized: true,
                                },
                                {
                                    name: 'description',
                                    label: 'Description',
                                    type: 'textarea',
                                    localized: true,
                                },
                            ],
                        },
                        {
                            name: 'cautionnGroup',
                            label: 'groupe caution',
                            type: 'group',
                            fields: [
                                {
                                    name: 'heading',
                                    label: 'Heading',
                                    type: 'text',
                                    localized: true,
                                },
                                {
                                    name: 'description',
                                    label: 'Description',
                                    type: 'textarea',
                                    localized: true,
                                },
                            ],
                        },
                        {
                            name: 'button',
                            label: 'bouton',
                            type: 'group',
                            fields: [
                                { name: 'label', label: 'label', type: 'text', localized: true },
                                { name: 'url', label: 'URL', type: 'text' },
                            ],
                        },
                    ],
                },
                {
                    name: 'localisationTab',
                    label: 'Tab localisation',
                    type: 'group',
                    fields: [
                        { name: 'longitude', label: 'longitude', type: 'text' },
                        { name: 'latitude', label: 'latitude', type: 'text' },
                        {
                            name: 'adressGroup',
                            label: 'adress',
                            type: 'group',
                            fields: [
                                {
                                    name: 'streetName',
                                    label: 'Nom de rue',
                                    type: 'text',
                                    localized: true,
                                },
                                {
                                    name: 'postCode',
                                    label: 'Code postal',
                                    type: 'text',
                                    localized: true,
                                },
                                { name: 'townName', label: 'Town', type: 'text', localized: true },
                                {
                                    name: 'country',
                                    label: 'Country',
                                    type: 'text',
                                    localized: true,
                                },
                                {
                                    name: 'houseNumber',
                                    label: 'Numéro de maison',
                                    type: 'text',
                                    localized: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'equipementsTab',
                    label: 'Tab équipements',
                    type: 'array',
                    fields: [
                        {
                            name: 'equipement',
                            label: 'Equipement',
                            type: 'group',
                            fields: [
                                { name: 'label', label: 'label', type: 'text', localized: true },
                                {
                                    name: 'items',
                                    label: "tableau d'items",
                                    type: 'array',
                                    fields: [
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
                    ],
                },
                {
                    name: 'reviewsTab',
                    label: 'Tab Avis',
                    type: 'group',
                    fields: [
                        {
                            name: 'overallGroup',
                            label: 'groupe Note globale',
                            type: 'group',
                            fields: [
                                {
                                    name: 'overallText',
                                    label: 'overallText',
                                    type: 'text',
                                    localized: true,
                                },
                                {
                                    name: 'logo',
                                    label: 'Logo',
                                    type: 'upload',
                                    relationTo: 'media',
                                },
                            ],
                        },
                        {
                            name: 'reviewsGroup',
                            label: 'groupe avis',
                            type: 'group',
                            fields: [
                                {
                                    name: 'logo',
                                    label: 'Logo',
                                    type: 'upload',
                                    relationTo: 'media',
                                },
                                {
                                    name: 'reviewArray',
                                    label: 'reviewArray',
                                    type: 'array',
                                    fields: [
                                        {
                                            name: 'reviewGroup',
                                            label: 'reviewGroup',
                                            type: 'group',
                                            fields: [
                                                {
                                                    name: 'overallRating',
                                                    label: 'Note génerale',
                                                    type: 'text',
                                                    localized: true,
                                                },
                                                { name: 'author', type: 'text', localized: true },
                                                { name: 'rating', type: 'number', localized: true },
                                                {
                                                    name: 'review',
                                                    type: 'textarea',
                                                    localized: true,
                                                },
                                                {
                                                    name: 'subReview',
                                                    type: 'array',
                                                    fields: [
                                                        { name: 'rating', type: 'number' },
                                                        {
                                                            name: 'category',
                                                            type: 'text',
                                                            localized: true,
                                                        },
                                                    ],
                                                },
                                                { name: 'authorImage', type: 'text' },
                                                { name: 'date', type: 'date' },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
