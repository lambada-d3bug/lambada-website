import { Block } from 'payload';

export const BookingForm: Block = {
    slug: 'bookingForm',
    labels: { singular: 'Formulaire de réservation', plural: 'Formulaire de réservation' },
    fields: [
        { name: 'blockDisplayBoolean', label: 'Cacher le footer?', type: 'checkbox' },
        { name: 'title', label: 'titre', type: 'text', localized: true },
        {
            name: 'selectionArray',
            label: 'tableau de choix sélectables',
            type: 'array',
            fields: [{ name: 'label', label: 'label', type: 'text', localized: true }],
        },
        {
            name: 'formGroup',
            label: 'formulaire',
            type: 'group',
            fields: [
                {
                    name: 'lastName',
                    label: 'nom',
                    type: 'group',
                    fields: [
                        { name: 'label', label: 'label', type: 'text', localized: true },
                        {
                            name: 'placeholder',
                            label: 'placeholder',
                            type: 'text',
                            localized: true,
                        },
                    ],
                },
                {
                    name: 'firstName',
                    label: 'prénom',
                    type: 'group',
                    fields: [
                        { name: 'label', label: 'label', type: 'text', localized: true },
                        {
                            name: 'placeholder',
                            label: 'placeholder',
                            type: 'text',
                            localized: true,
                        },
                    ],
                },
                {
                    name: 'mail',
                    label: 'mail',
                    type: 'group',
                    fields: [
                        { name: 'label', label: 'label', type: 'text', localized: true },
                        {
                            name: 'placeholder',
                            label: 'placeholder',
                            type: 'text',
                            localized: true,
                        },
                    ],
                },
                {
                    name: 'tel',
                    label: 'tel',
                    type: 'group',
                    fields: [
                        { name: 'label', label: 'label', type: 'text', localized: true },
                        {
                            name: 'placeholder',
                            label: 'placeholder',
                            type: 'text',
                            localized: true,
                        },
                    ],
                },
                {
                    name: 'other',
                    label: 'autre',
                    type: 'group',
                    fields: [
                        { name: 'label', label: 'label', type: 'text', localized: true },
                        {
                            name: 'placeholder',
                            label: 'placeholder',
                            type: 'text',
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
                        { name: 'url', label: 'url', type: 'text' },
                    ],
                },
                {
                    name: 'calendarGroup',
                    label: 'calendrier',
                    type: 'group',
                    fields: [
                        {
                            name: 'dynamicTitle',
                            label: 'titre dynamique',
                            type: 'group',
                            fields: [
                                {
                                    name: 'singular',
                                    label: 'singulier',
                                    type: 'text',
                                    localized: true,
                                },
                                { name: 'plural', label: 'pluriel', type: 'text', localized: true },
                            ],
                        },
                        {
                            name: 'dateSuffix',
                            label: 'suffixe date',
                            type: 'text',
                            localized: true,
                        },
                        {
                            name: 'deleteDateText',
                            label: 'texte supprimer date',
                            type: 'text',
                            localized: true,
                        },
                    ],
                },
            ],
        },
    ],
};
