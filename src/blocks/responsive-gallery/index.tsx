'use client';

import { Media } from '@/payload-types';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/utilities/ui';

interface ResponsiveGalleryProps {
    blockDisplayBoolean?: boolean;
    imagesArray: { image: Media; id: string }[];
    title: string;
}

export function ResponsiveGalleryBlock(props: ResponsiveGalleryProps) {
    const { imagesArray, title, blockDisplayBoolean } = props;

    return (
        <div
            className={cn(
                blockDisplayBoolean && 'hidden',
                'mx-auto flex w-full max-w-full flex-col px-4 py-8 lg:bg-[#fbc96526]',
            )}>
            <h1 className="mb-6 text-lg font-bold lg:text-5xl">{title}</h1>
            <Carousel className="w-full max-w-full overflow-visible">
                <CarouselContent className="-ml-2 h-82 md:-ml-4 lg:h-84">
                    {imagesArray.map((image, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-full pl-2 md:basis-[60%] md:pl-4 lg:basis-[40%]">
                            <div className="relative h-full w-full rounded-lg">
                                <Image
                                    src={(image.image.url as string) || '/placeholder.svg'}
                                    alt={image.image.alt}
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ml-14 md:ml-24" />
                <CarouselNext className="mr-14 md:mr-24" />
            </Carousel>
        </div>
    );
}
