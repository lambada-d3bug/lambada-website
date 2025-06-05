import { Block } from 'payload';

export const ReviewCarousel: Block = {
    slug: 'reviewCarousel',
    labels: { singular: 'Carousselle de review google', plural: 'Carousselle de review google' },
    fields: [
        {
            name: 'headingGroup',
            label: "Groupe de l'en-tête",
            type: 'group',
            fields: [
                { name: 'title', label: 'titre', type: 'text', localized: true },
                { name: 'overallRating', label: 'note globale', type: 'text', localized: true },
                {
                    name: 'starEmptyLogo',
                    label: 'logo étoile creuse',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
        {
            name: 'reviewArray',
            label: 'Tableau de reviews',
            type: 'array',
            fields: [
                {
                    name: 'starLogo',
                    label: 'logo étoile pleine',
                    type: 'upload',
                    relationTo: 'media',
                },
                {
                    name: 'reviewCard',
                    label: 'Carte de review',
                    type: 'group',
                    fields: [
                        {
                            name: 'personalOverall',
                            label: 'note personelle principale',
                            type: 'number',
                        },
                        {
                            name: 'reviewContent',
                            label: "corps d'avis",
                            type: 'text',
                            localized: true,
                        },
                        {
                            name: 'secondaryNoteArray',
                            label: 'tableau des notes secondaires',
                            type: 'array',
                            fields: [
                                {
                                    name: 'secondaryNoteDescription',
                                    label: 'description de la note secondaire',
                                    type: 'text',
                                    localized: true,
                                },
                                {
                                    name: 'secondaryNote',
                                    label: 'Note secondaire(valeur)',
                                    type: 'number',
                                },
                            ],
                        },
                        {
                            name: 'reviewUser',
                            label: 'Utilisateur qui a émis la review',
                            type: 'group',
                            fields: [
                                { name: 'UserName', label: "Nom de l'utilisateur", type: 'text' },
                                {
                                    name: 'UserAvatar',
                                    label: "Image de l'utilisateur",
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
};
