import { CollectionConfig } from 'payload';

export const GoogleReviewsEn: CollectionConfig = {
    slug: 'googleReviewsEn',
    labels: { singular: 'avis google en anglais', plural: 'avis google en anglais' },
    fields: [
        { name: 'overallRating', label: 'Note génerale', type: 'text' },
        { name: 'author', type: 'text', required: true },
        { name: 'rating', type: 'number', required: true },
        { name: 'review', type: 'textarea' },
        {
            name: 'subReview',
            type: 'array',
            fields: [
                { name: 'rating', type: 'number' },
                { name: 'category', type: 'text' },
            ],
        },
        { name: 'authorImage', type: 'text' },
        { name: 'date', type: 'date' },
    ],
};
