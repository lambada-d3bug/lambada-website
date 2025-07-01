import { Block } from 'payload';

export const ResidencesPresentation: Block = {
    slug: 'residencesPresentation',
    labels: { singular: 'Présentation des résidences', plural: 'Présentation des résidences' },
    fields: [
        { name: 'blockDisplayBoolean', label: 'cacher le bloc', type: 'checkbox' },
        {
            name: 'headingGroup',
            label: 'Groupe titre',
            type: 'group',
            fields: [
                { name: 'heading', label: 'Titre', type: 'text', localized: true },
                { name: 'starLogo', label: 'Star Logo', type: 'upload', relationTo: 'media' },
                { name: 'rating', label: 'note', type: 'text' },
                { name: 'location', label: 'location', type: 'text', localized: true },
                { name: 'description', label: 'Description', type: 'textarea', localized: true },

                {
                    name: 'shareGroup',
                    label: 'Groupe bouton partager',
                    type: 'group',
                    fields: [
                        { name: 'label', label: 'Label', type: 'text', localized: true },

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
                        { name: 'tabTitle', label: 'Titre du tab', type: 'text', localized: true },
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
                            name: 'button',
                            label: 'bouton',
                            type: 'group',
                            fields: [
                                { name: 'label', label: 'label', type: 'text', localized: true },
                                { name: 'url', label: 'URL', type: 'text' },
                            ],
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
                },
                {
                    name: 'localisationTab',
                    label: 'Tab localisation',
                    type: 'group',
                    fields: [
                        { name: 'tabTitle', label: 'Titre du tab', type: 'text', localized: true },
                        { name: 'longitude', label: 'longitude', type: 'text' },
                        { name: 'latitude', label: 'latitude', type: 'text' },
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
                                {
                                    name: 'tabTitle',
                                    label: 'Titre du tab',
                                    type: 'text',
                                    localized: true,
                                },
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
            ],
        },
    ],
};
