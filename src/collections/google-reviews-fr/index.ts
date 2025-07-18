import { CollectionConfig } from 'payload';

export const GoogleReviewsFr: CollectionConfig = {
    slug: 'googleReviewsFr',
    labels: { singular: 'avis google', plural: 'avis google' },
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
