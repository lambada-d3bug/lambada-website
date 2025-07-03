'use client';

import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { SvgFromUrl } from '@/utilities/svgFromUrl';
import type { Media } from '@/payload-types';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import { TabsContent } from '@/components/ui/tabs';

interface DescriptionTabProps {
    descriptionTab: {
        tabTitle: string;
        iconArray: {
            iconGroup: {
                icon: Media;
                label: string;
            };
        }[];
        descriptionGroup: {
            heading: string;
            description: string;
        };
        button: {
            label: string;
            url: string;
        };
        expandToggleTexts: {
            expandLabel: string;
            collapseLabel: string;
        };
    };
}

export function DescriptionTab(props: DescriptionTabProps) {
    const { descriptionTab } = props;
    const { descriptionGroup, button, iconArray, expandToggleTexts } = descriptionTab;
    const [api, setApi] = useState<CarouselApi>();
    const [expanded, setExpanded] = useState(false);

    return (
        <TabsContent value="description" className="mx-auto w-full max-w-6xl flex-col p-4 py-8">
            <Carousel
                opts={{
                    align: 'start',
                    loop: false,
                    skipSnaps: false,
                    dragFree: true,
                    containScroll: 'trimSnaps',
                }}
                setApi={setApi}
                className="w-full overflow-visible">
                <CarouselContent className="-ml-2 h-[140px] overflow-visible md:-ml-4 md:h-[160px] lg:h-[180px] lg:justify-center">
                    {iconArray.map((iconGroup, i) => (
                        <CarouselItem
                            key={i}
                            className="flex h-full basis-[calc(50%-8px)] items-center pl-2 sm:basis-[calc(33.333%-12px)] md:basis-[calc(25%-16px)] md:pl-4 lg:basis-[calc(16.666%-20px)]">
                            <div className="group relative h-[85%] w-full overflow-hidden rounded-xl border border-gray-200/50 bg-gray-50/80 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
                                {/* Content */}
                                <div className="flex h-full flex-col items-center justify-center space-y-3 p-4 text-center">
                                    <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                        <SvgFromUrl
                                            url={iconGroup.iconGroup.icon.url as string}
                                            alt={iconGroup.iconGroup.icon.alt}
                                            className="text-secondary h-8 w-8 drop-shadow-sm lg:h-10 lg:w-10"
                                        />
                                    </div>
                                    <p className="text-foreground/90 text-xs leading-tight font-medium lg:text-sm xl:text-base">
                                        {iconGroup.iconGroup.label}
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 h-8 w-8 border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:bg-gray-50" />
                <CarouselNext className="right-2 h-8 w-8 border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:bg-gray-50" />
            </Carousel>

            <div className="flex flex-col space-y-4 md:mt-6 md:flex-row md:space-y-0 md:space-x-6">
                <div className="flex w-full flex-col space-y-4">
                    <div className="flex flex-row items-center justify-start space-x-4">
                        <div className="border-t-primary h-0 w-8 border-t-4 lg:w-16"></div>
                        <h2 className="text-primary text-sm font-semibold capitalize md:text-xl lg:text-3xl">
                            {descriptionGroup.heading}
                        </h2>
                    </div>
                    <div className="flex w-full flex-col text-xs md:text-lg">
                        <p className={`leading-relaxed ${expanded ? '' : 'line-clamp-2'}`}>
                            {descriptionGroup.description}
                        </p>
                        <button
                            className="text-primary hover:text-primary/80 mt-2 cursor-pointer self-start underline underline-offset-2 transition-colors duration-200"
                            onClick={() => setExpanded((prev) => !prev)}>
                            {expanded
                                ? expandToggleTexts.collapseLabel
                                : expandToggleTexts.expandLabel}
                        </button>
                    </div>
                </div>
            </div>

            <Button
                className="bg-secondary hover:bg-secondary/90 mt-6 rounded-2xl px-8 py-3 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl md:w-1/2 lg:self-center"
                onClick={() => redirect(button.url)}>
                {button.label}
            </Button>
        </TabsContent>
    );
}
