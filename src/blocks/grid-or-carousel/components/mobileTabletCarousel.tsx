'use client';

import { GridOrCarouselBlockProps } from '@/blocks/grid-or-carousel';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { SvgFromUrl } from '@/utilities/svgFromUrl';
import { useEffect, useState } from 'react';
import { cn } from '@/utilities/ui';

export function MobileTabletCarousel(props: GridOrCarouselBlockProps) {
    const { title, cardArray, blockDisplayBoolean } = props;
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [_count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        api.scrollTo(2);
        setCurrent(3);
        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
    return (
        <div className={cn(blockDisplayBoolean && 'hidden', 'w-full space-y-16 py-16')}>
            <div className="flex flex-row justify-center">
                <p className="px-2 text-center text-3xl font-semibold">
                    {title.titlePart} <span className="text-[#0E7269]"> {title.titlePart1}</span>{' '}
                    {title.titlePart2}
                </p>
            </div>
            <Carousel setApi={setApi}>
                <CarouselContent>
                    {cardArray.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className={`basis-7/12 gap-8 ${
                                index === 0
                                    ? 'ml-[8%]'
                                    : index === cardArray.length - 1
                                      ? 'mr-[8%]'
                                      : ''
                            }`}>
                            <Card
                                className={`group rounded-none text-black transition-transform duration-300 hover:text-white ${current - 1 === index ? 'dark:bg-secondary/80 scale-100 bg-[#FBC965]' : 'dark:bg-secondary scale-85 bg-[#FFF9EC]'} `}>
                                <CardContent
                                    className={'flex flex-col items-center space-y-4 px-6 py-10'}>
                                    <div className={'relative h-8 w-8'}>
                                        <SvgFromUrl
                                            url={item.card.icon.url as string}
                                            alt={item.card.icon.alt}
                                            className={`dark:group-hover:text-accent dark:text-accent h-8 w-8 ${current - 1 === index ? 'dark:text-accent/80 text-[#FFF9EC]' : 'dark:text-accent text-[#FBC965]'} `}
                                        />
                                    </div>
                                    <div
                                        className={`flex flex-col space-y-2 text-center ${current - 1 === index ? 'text-white' : ''}`}>
                                        <p className={'dark:text-accent text-2xl'}>
                                            {item.card.title}
                                        </p>
                                        <p className={'dark:text-accent text-sm'}>
                                            {item.card.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
