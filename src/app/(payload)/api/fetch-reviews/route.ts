// pages/api/fetch-reviews.ts

import { getPayload } from 'payload';
import { getJson } from 'serpapi';
import config from '@payload-config';
import { NextResponse } from 'next/server';

export async function GET() {
    const payload = await getPayload({ config });

    try {
        const { reviews, place_info } = await getJson({
            engine: 'google_maps_reviews',
            data_id: process.env.GOOGLE_REVIEW_DATA_ID,
            hl: 'fr',
            api_key: process.env.SERP_API_KEY,
        });

        await payload.delete({ collection: 'googleReviews', where: {} });

        for (const review of reviews.slice(0, 10)) {
            const subreview =
                review.details &&
                Object.entries(review.details)
                    .filter(([_, value]) => typeof value === 'number')
                    .map(([category, rating]) => ({
                        category,
                        rating,
                    }));
            await payload.create({
                collection: 'googleReviews',
                data: {
                    author: review.user.name,
                    rating: review.rating,
                    review: review.snippet,
                    authorImage: review.user.thumbnail,
                    date: review.iso_date,
                    subReview: subreview,
                    overallRating: place_info.rating,
                },
            });
        }

        // Set key with 24h expiration to avoid duplicate runs

        return NextResponse.json({ message: 'Fetched and saved reviews' });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Error fetching reviews' });
    }
}
