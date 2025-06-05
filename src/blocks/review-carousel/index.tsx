'use client';
import { useEffect, useState } from 'react';

export type Review = {
    overallRating?: number;
    author: string;
    authorImage: string;
    date: string;
    rating: number;
    review: string;
    subReview: { category: string; rating: number }[];
};

interface ReviewCarouselBlockProps {}

export function ReviewCarouselBlock(props: ReviewCarouselBlockProps) {
    const [fetchedReviews, setFetchedReviews] = useState<Review[]>([]);
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch('/api/get-reviews');
                if (!res.ok) {
                    console.error('Failed to fetch', res.status);
                    return;
                }
                const data: Review[] = await res.json();

                setFetchedReviews(data);
            } catch (err) {
                console.error('Error fetching testimonials:', err);
            }
        };

        fetchTestimonials();
    }, []);
    return <></>;
}
