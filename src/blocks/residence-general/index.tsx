'use client';

import type { Media } from '@/payload-types';
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { SvgFromUrl } from '@/utilities/svgFromUrl';
import { useEffect, useState } from 'react';
import { cn } from '@/utilities/ui';
import { useWindowWidth } from '@/utilities/useWindowWidth';

interface ResidenceGeneralBlockProps {
    blockDisplayBoolean?: boolean;
    residencesArray: {
        residenceGroup: {
            title: string;
            subheading: string;
            description: string;
            imageArray: { image: Media }[];
            iconArray: { card: { icon: Media; label: string } }[];
        };
    }[];
}

function chunkArray<T>(arr: T[], size: number): T[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size),
    );
}

export function ResidenceGeneralBlock(props: ResidenceGeneralBlockProps) {
    const { residencesArray, blockDisplayBoolean } = props;
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on('select', handleSelect);
        return () => {
            api.off('select', handleSelect);
        };
    }, [api]);

    const handleDotClick = (index: number) => {
        api?.scrollTo(index);
    };
    const width = useWindowWidth();
    if (!width) return null;
    return (
        <div
            className={cn(
                'dark:bg-background flex w-full flex-col items-center space-y-6 py-16 lg:px-40',
                blockDisplayBoolean && 'hidden',
            )}>
            <Carousel setApi={setApi} className="w-full max-w-full">
                <CarouselContent className="ml-0 w-full">
                    {residencesArray.map((residence, index) => {
                        const imageGroups = chunkArray(residence.residenceGroup.imageArray, 3);
                        return (
                            <CarouselItem
                                key={index}
                                className="flex w-full flex-col items-center space-y-4">
                                {/* Title & Description */}
                                <div className="flex w-full flex-col justify-between space-y-2 sm:flex-row sm:space-y-0 md:space-x-4">
                                    <div className="flex flex-col space-y-2">
                                        <p className="dark:text-primary text-lg sm:text-2xl md:text-3xl">
                                            {residence.residenceGroup.title}
                                        </p>
                                        <p className="text-chart-5 text-xs sm:text-sm md:text-base dark:text-white">
                                            {residence.residenceGroup.subheading}
                                        </p>
                                    </div>
                                    <p className="hidden max-w-md text-sm sm:block md:text-base">
                                        {residence.residenceGroup.description}
                                    </p>
                                </div>

                                {/* Image Carousel */}
                                <Carousel className="w-full">
                                    <CarouselContent className="w-full">
                                        {width < 768 &&
                                            residence.residenceGroup.imageArray.map((item, id) => (
                                                <CarouselItem key={id} className="w-full">
                                                    <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2">
                                                        {/* Large Image */}

                                                        <div className="relative col-span-1 h-[200px] sm:col-span-1 sm:row-span-2 sm:h-full md:col-span-2 md:h-[400px]">
                                                            <Image
                                                                className="rounded-lg object-cover"
                                                                src={
                                                                    item.image.url ||
                                                                    '/placeholder.svg' ||
                                                                    '/placeholder.svg'
                                                                }
                                                                alt={item.image.alt}
                                                                fill
                                                            />
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        {width > 768 &&
                                            imageGroups.map((group, i) => (
                                                <CarouselItem key={i} className="w-full">
                                                    <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2">
                                                        {/* Large Image */}
                                                        {group[0] && (
                                                            <div className="relative col-span-1 h-[200px] sm:col-span-1 sm:row-span-2 sm:h-full md:col-span-2 md:h-[400px]">
                                                                <Image
                                                                    className="rounded-lg object-cover"
                                                                    src={
                                                                        group[0].image.url ||
                                                                        '/placeholder.svg' ||
                                                                        '/placeholder.svg'
                                                                    }
                                                                    alt={group[0].image.alt}
                                                                    fill
                                                                />
                                                            </div>
                                                        )}
                                                        {/* Small Image 1 */}
                                                        {group[1] && (
                                                            <div className="relative col-span-1 h-[100px] max-sm:hidden sm:h-[195px] md:row-span-1">
                                                                <Image
                                                                    className="rounded-lg object-cover"
                                                                    src={
                                                                        group[1].image.url ||
                                                                        '/placeholder.svg' ||
                                                                        '/placeholder.svg'
                                                                    }
                                                                    alt={group[1].image.alt}
                                                                    fill
                                                                />
                                                            </div>
                                                        )}
                                                        {/* Small Image 2 */}
                                                        {group[2] && (
                                                            <div className="relative col-span-1 h-[100px] max-sm:hidden sm:h-[195px] md:row-span-1">
                                                                <Image
                                                                    className="rounded-lg object-cover"
                                                                    src={
                                                                        group[2].image.url ||
                                                                        '/placeholder.svg' ||
                                                                        '/placeholder.svg'
                                                                    }
                                                                    alt={group[2].image.alt}
                                                                    fill
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="left-2" />
                                    <CarouselNext className="right-6" />
                                </Carousel>

                                {/* Icons Carousel */}
                                <Carousel className="w-full">
                                    <CarouselContent className="w-full max-sm:-ml-4 lg:justify-center">
                                        {residence.residenceGroup.iconArray.map((icon, i) => (
                                            <CarouselItem
                                                key={i}
                                                className="mx-0 basis-1/3 sm:basis-1/4 sm:px-2 md:basis-1/6">
                                                <div className="bg-ring/25 dark:bg-primary flex h-full min-h-[100px] flex-col items-center justify-center space-y-2 rounded-lg p-2 text-center">
                                                    <SvgFromUrl
                                                        url={icon.card.icon.url as string}
                                                        alt={icon.card.icon.alt}
                                                        className="text-secondary h-6 w-6 flex-shrink-0 lg:h-8 lg:w-8"
                                                    />
                                                    <p className="dark:text-secondary text-xs leading-tight font-medium sm:text-sm lg:text-base">
                                                        {icon.card.label}
                                                    </p>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="left-2 lg:hidden" />
                                    <CarouselNext className="right-6 lg:hidden" />
                                </Carousel>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>

            {/* Dotted Navigation */}
            <div className="flex justify-center space-x-2 pb-4">
                {residencesArray.map((_, index) => (
                    <button
                        key={index}
                        className={cn(
                            'h-2 w-2 rounded-full transition-all',
                            current === index
                                ? 'bg-secondary dark:bg-primary/70 w-4'
                                : 'bg-secondary/30 dark:bg-primary',
                        )}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
