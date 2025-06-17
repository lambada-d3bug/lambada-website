'use client';

import { useEffect, useState } from 'react';
import { Review } from '@/blocks/review-carousel';
import { Media } from '@/payload-types';
import { SvgFromUrl } from '@/utilities/svgFromUrl';

interface OverallRatingBlockProps {
    title: string;
    starEmptyLogo: Media;
}

export function OverallRatingBlock(props: OverallRatingBlockProps) {
    const { title, starEmptyLogo } = props;
    const [fetchedRating, setFetchedRating] = useState<string | undefined>();
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch('/api/get-review');
                if (!res.ok) {
                    console.error('Failed to fetch', res.status);
                    return;
                }
                const data: Review = await res.json();
                setFetchedRating(data[0].overallRating);
            } catch (err) {
                console.error('Error fetching testimonials:', err);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <div
            className={
                'flex flex-row items-center justify-between px-8 py-8 font-semibold max-lg:space-x-4 md:px-20 lg:px-48'
            }>
            <p className={'text-lg md:text-3xl'}>{title}</p>
            <div className={'border-t-primary h-1 w-10 border-t-4 md:w-28'}></div>
            <p className={'text-primary text-lg md:text-3xl'}>{fetchedRating}/5</p>
            <div className={''}>
                <SvgFromUrl
                    url={starEmptyLogo.url as string}
                    alt={starEmptyLogo.alt}
                    className={'text-primary h-6 w-6 md:h-12 md:w-12'}
                />
            </div>
        </div>
    );
}
