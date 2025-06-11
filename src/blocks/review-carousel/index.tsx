'use client';
import { useEffect, useRef, useState } from 'react';
import { Media } from '@/payload-types';
import { SvgFromUrl } from '@/utilities/svgFromUrl';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export type Review = {
    overallRating?: number;
    author: string;
    authorImage: string;
    date: string;
    rating: number;
    review: string;
    subReview: { category: string; rating: number }[];
};

interface ReviewCarouselBlockProps {
    overallText: string;
    hideBoolean?: boolean;
    starLogo: Media;
    expandToggleTexts: {
        expandLabel: string;
        collapseLabel: string;
    };
}

function ReviewText({ review, expandToggleTexts }) {
    const textRef = useRef<HTMLParagraphElement>(null);
    const [expanded, setExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const el = textRef.current;
        if (el) {
            setIsOverflowing(el.scrollHeight > el.clientHeight);
        }
    }, [review]); // re-check if review text changes

    return (
        <div className="flex flex-col justify-center">
            <p
                ref={textRef}
                className={`border-secondary border-l-2 pr-6 pl-2 text-xs transition-all sm:text-sm ${expanded ? '' : 'line-clamp-3'}`}>
                {review}
            </p>

            {isOverflowing && (
                <p
                    onClick={() => setExpanded((prev) => !prev)}
                    className="text-chart-5 mt-1 cursor-pointer pl-2 text-xs hover:underline sm:text-sm">
                    {expanded ? expandToggleTexts.collapseLabel : expandToggleTexts.expandLabel}
                </p>
            )}
        </div>
    );
}

export function ReviewCarouselBlock(props: ReviewCarouselBlockProps) {
    const { starLogo, expandToggleTexts, overallText, hideBoolean } = props;
    const [fetchedReviews, setFetchedReviews] = useState<Review[]>([]);
    const params = useParams();
    const rawLocale = params?.locale;
    const locale = Array.isArray(rawLocale) ? rawLocale[0] : rawLocale;

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch(`/api/get-reviews-${locale}`);
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
    }, [locale]);
    if (hideBoolean) {
        return null;
    }
    return (
        <>
            <Carousel>
                <CarouselContent className={'ml-4 w-full max-w-full md:ml-8'}>
                    {fetchedReviews.map((review, i) => (
                        <CarouselItem
                            key={i}
                            className={'basis-full p-8 sm:basis-2/3 lg:basis-1/3 lg:p-4'}>
                            <Card>
                                <CardContent
                                    className={
                                        'flex min-h-48 flex-col items-center justify-between space-y-2 lg:min-h-52'
                                    }>
                                    <div
                                        className={
                                            'flex w-full flex-col justify-between space-y-1'
                                        }>
                                        <p className={'text-xs font-semibold sm:text-sm'}>
                                            {overallText}
                                        </p>
                                        <div
                                            className={
                                                'flex flex-row items-center space-x-2 self-start'
                                            }>
                                            <p className={'text-chart-5 text-xs sm:text-sm'}>
                                                {review.rating}/5
                                            </p>
                                            <SvgFromUrl
                                                url={starLogo.url as string}
                                                alt={starLogo.alt}
                                                className={'text-primary h-4 w-4 sm:h-6 sm:w-6'}
                                            />
                                        </div>
                                    </div>
                                    <div className={'flex flex-row justify-between'}>
                                        <ReviewText
                                            expandToggleTexts={expandToggleTexts}
                                            review={review.review}
                                        />
                                        <div
                                            className={
                                                'flex flex-col items-center text-center lg:space-y-2'
                                            }>
                                            <div className={'relative h-10 w-10'}>
                                                <Image
                                                    src={review.authorImage}
                                                    alt={'user avatar'}
                                                    fill
                                                />
                                            </div>
                                            <p className={'text-xs sm:text-sm'}>{review.author}</p>
                                        </div>
                                    </div>
                                    {review.subReview && (
                                        <div className={'grid w-full grid-cols-2 gap-1 self-start'}>
                                            {review.subReview.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className={`flex flex-row items-center space-x-2 ${
                                                        i % 2 === 0
                                                            ? 'justify-start'
                                                            : 'justify-end'
                                                    }`}>
                                                    <p
                                                        className={
                                                            'text-chart-5 text-xs sm:text-sm'
                                                        }>
                                                        {item.rating}/5
                                                    </p>
                                                    <SvgFromUrl
                                                        url={starLogo.url as string}
                                                        alt={starLogo.alt}
                                                        className={
                                                            'text-primary h-3 w-3 sm:h-5 sm:w-5'
                                                        }
                                                    />
                                                    <p
                                                        className={
                                                            'text-chart-5 text-xs sm:text-sm'
                                                        }>
                                                        {item.category}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="max-lg:hidden lg:ml-20" />
                <CarouselNext className="max-lg:hidden lg:mr-20" />
            </Carousel>
        </>
    );
}
