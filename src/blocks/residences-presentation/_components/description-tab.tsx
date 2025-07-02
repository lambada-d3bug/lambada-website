'use client';

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { SvgFromUrl } from '@/utilities/svgFromUrl';
import { TabsContent } from '@/components/ui/tabs';
import type { Media } from '@/payload-types';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

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
        <TabsContent value="description" className="mt-6 flex flex-col justify-center lg:px-24">
            <div className="mx-auto w-full max-w-6xl flex-col p-4">
                <Carousel
                    opts={{
                        align: 'start',
                        loop: false,
                        skipSnaps: false,
                        dragFree: false,
                    }}
                    setApi={setApi}
                    className="w-full">
                    <CarouselContent className="ml-0 flex justify-center gap-2 md:gap-4">
                        {iconArray.map((iconGroup, i) => (
                            <CarouselItem
                                key={i}
                                className="flex-shrink-0 basis-1/3 pl-2 md:basis-1/3 md:pl-4 lg:basis-1/6">
                                <div className="bg-ring/25 mx-0 flex h-full min-h-[120px] flex-col items-center justify-center space-y-2 rounded-lg p-2 text-center md:mx-2">
                                    <SvgFromUrl
                                        url={iconGroup.iconGroup.icon.url as string}
                                        alt={iconGroup.iconGroup.icon.alt}
                                        className="text-secondary h-6 w-6 flex-shrink-0 lg:h-8 lg:w-8"
                                    />
                                    <p className="text-xs leading-tight font-medium lg:text-base">
                                        {iconGroup.iconGroup.label}
                                    </p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="ml-4 flex lg:hidden" />
                    <CarouselNext className="mr-4 flex lg:hidden" />
                </Carousel>
            </div>
            <div
                className={'flex flex-col space-y-4 md:mt-4 md:flex-row md:space-y-0 md:space-x-4'}>
                <div className={'flex w-full flex-col space-y-4'}>
                    <div className={'flex flex-row items-center justify-start space-x-4'}>
                        <div className={'border-t-primary h-0 w-8 border-t-4 lg:w-16'}></div>
                        <p className={'text-primary text-sm capitalize md:text-xl lg:text-3xl'}>
                            {descriptionGroup.heading}
                        </p>
                    </div>
                    <div className={'flex w-full flex-col text-xs md:text-lg'}>
                        <p className={`${expanded ? '' : 'line-clamp-2'}`}>
                            {descriptionGroup.description}
                        </p>
                        <p
                            className={'cursor-pointer self-start underline'}
                            onClick={() => setExpanded((prev) => !prev)}>
                            {expanded
                                ? expandToggleTexts.collapseLabel
                                : expandToggleTexts.expandLabel}
                        </p>
                    </div>
                </div>
            </div>
            <Button
                className={
                    'bg-secondary hover:bg-secondary-foreground mt-4 rounded-2xl text-white hover:cursor-pointer md:w-1/2 lg:self-center'
                }
                onClick={() => redirect(button.url)}>
                {button.label}
            </Button>
        </TabsContent>
    );
}
