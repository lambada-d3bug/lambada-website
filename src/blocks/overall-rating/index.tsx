'use client';

import { useEffect, useState } from 'react';
import { Review } from '@/blocks/review-carousel';
import { Media } from '@/payload-types';
import Image from 'next/image';

interface OverallRatingBlockProps {
    title: string;
    starEmptyLogo: Media;
}

export function OverallRatingBlock(props: OverallRatingBlockProps) {
    const { title, starEmptyLogo } = props;
    const [fetchedRating, setFetchedRating] = useState<number | undefined>(0);
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch('/api/get-review');
                if (!res.ok) {
                    console.error('Failed to fetch', res.status);
                    return;
                }
                const data: Review = await res.json();

                setFetchedRating(data.overallRating);
            } catch (err) {
                console.error('Error fetching testimonials:', err);
            }
        };

        fetchTestimonials();
    }, []);
    return (
        <div className={'flex flex-row'}>
            <p className={'text-lg'}>{title}</p>
            <div></div>
            <p>{fetchedRating}/5</p>
            <div className={'relative h-6 w-6'}>
                <Image src={starEmptyLogo.url as string} alt={starEmptyLogo.alt} fill />
            </div>
        </div>
    );
}
