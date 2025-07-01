import type { CollectionConfig } from 'payload';
import { loggedIn } from './access/loggedIn';
import { formatSlug } from './hooks/formatSlug';
import { ResponsiveGallery } from '@/blocks/responsive-gallery/config';
import { Hero } from '@/blocks/hero/config';
import { GridOrCarousel } from '@/blocks/grid-or-carousel/config';
import { ReviewCarousel } from '@/blocks/review-carousel/config';
import { OverallRating } from '@/blocks/overall-rating/config';
import { ResidencesPresentation } from '@/blocks/residences-presentation/config';
import { ContactInformation } from '@/blocks/contact-information/config';
import { BookingForm } from '@/blocks/booking-form/config';
import { ResidenceGeneral } from '@/blocks/residence-general/config';
import { RestaurantCarousel } from '@/blocks/restaurant-carousel/config';
import { RestaurantMenu } from '@/blocks/restaurant-menu/config';
import { revalidatePageHook } from '@/hooks/revalidate-page-hook';

export const Pages: CollectionConfig = {
    slug: 'pages',
    hooks: {
        afterChange: [
            (args) => {
                console.log('[Pages.afterChange] Hook fired with args:', {
                    operation: args.operation,
                    slug: args.doc?.slug,
                });

                return revalidatePageHook(args);
            },
        ],
    },
    access: {
        create: loggedIn,
        delete: loggedIn,
        read: () => true,
        update: loggedIn,
    },
    admin: {
        defaultColumns: ['title', 'slug', 'updatedAt'],
        livePreview: {
            url: ({ data }) => {
                const isHomePage = data.slug === 'home';
                return `${process.env.NEXT_PUBLIC_SERVER_URL}${!isHomePage ? `/${data.slug}` : ''}`;
            },
        },
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
            hooks: {
                beforeValidate: [formatSlug('title')],
            },
            index: true,
            label: 'Slug',
        },
        {
            name: 'layout',
            label: 'Layout',
            type: 'blocks',
            blocks: [
                ResponsiveGallery,
                Hero,
                GridOrCarousel,
                ReviewCarousel,
                OverallRating,
                ResidencesPresentation,
                ContactInformation,
                BookingForm,
                ResidenceGeneral,
                RestaurantCarousel,
                RestaurantMenu,
            ],
        },
    ],
    versions: {
        drafts: {
            autosave: {
                interval: 375,
            },
        },
    },
};
