import { Block } from 'payload';

export const ResidenceGeneral: Block = {
    slug: 'residenceGeneral',
    labels: {
        singular: 'Présentation générale de résidences',
        plural: 'Présentation générale de résidences',
    },
    fields: [
        { name: 'blockDisplayBoolean', label: 'Cacher le footer?', type: 'checkbox' },
        {
            name: 'residencesArray',
            label: 'tableau de résidences',
            type: 'array',
            fields: [
                {
                    name: 'residenceGroup',
                    label: 'groupe de résidence',
                    type: 'group',
                    fields: [
                        { name: 'title', label: 'titre', type: 'text', localized: true },
                        { name: 'subheading', label: 'sous-titre', type: 'text', localized: true },
                        {
                            name: 'description',
                            label: 'description',
                            type: 'text',
                            localized: true,
                        },
                        {
                            name: 'imageArray',
                            label: 'tableau d"images',
                            type: 'array',
                            fields: [
                                {
                                    name: 'image',
                                    label: 'image',
                                    type: 'upload',
                                    relationTo: 'media',
                                },
                            ],
                        },
                        {
                            name: 'iconArray',
                            label: "tableau d'icones",
                            type: 'array',
                            fields: [
                                {
                                    name: 'card',
                                    label: 'carte de détails attenant à la résidence',
                                    type: 'group',
                                    fields: [
                                        {
                                            name: 'icon',
                                            label: 'icone',
                                            type: 'upload',
                                            relationTo: 'media',
                                        },
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
