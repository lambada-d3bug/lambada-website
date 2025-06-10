import { getPayload } from 'payload';
import { getJson } from 'serpapi';
import config from '@payload-config';
import { NextResponse } from 'next/server';

export async function GET() {
    const payload = await getPayload({ config });

    try {
        // Define language and collection mapping
        const langToCollection = {
            fr: 'googleReviewsFr',
            en: 'googleReviewsEn',
            it: 'googleReviewsIt',
        } as const;

        // Delete all old reviews from each language-specific collection
        for (const collection of Object.values(langToCollection)) {
            await payload.delete({ collection, where: {} });
        }

        // Fetch and save reviews for each language
        for (const [lang, collection] of Object.entries(langToCollection)) {
            const { reviews, place_info } = await getJson({
                engine: 'google_maps_reviews',
                data_id: process.env.GOOGLE_REVIEW_DATA_ID,
                hl: lang,
                api_key: process.env.SERP_API_KEY,
            });

            const slicedReviews = reviews.slice(0, 10);

            for (const review of slicedReviews) {
                const subReview = review?.details
                    ? Object.entries(review.details)
                          .filter(([_, value]) => typeof value === 'number')
                          .map(([category, rating]) => ({ category, rating: rating as number }))
                    : [];

                await payload.create({
                    collection,
                    data: {
                        author: review.user.name,
                        rating: review.rating,
                        review: review.snippet,
                        authorImage: review.user.thumbnail,
                        date: review.iso_date,
                        subReview,
                        overallRating: place_info.rating,
                    },
                });
            }
        }

        return NextResponse.json({ message: 'Fetched and saved multilingual reviews' });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Error fetching reviews' });
    }
}
