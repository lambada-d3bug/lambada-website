'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Media } from '@/payload-types';
import chunk from 'lodash.chunk';
import { useWindowWidth } from '@/utilities/useWindowWidth';

interface CarouselPictureGridProps {
    imagesArray: { image: Media; id: string }[];
}

export function CarouselPictureGrid({ imagesArray }: CarouselPictureGridProps) {
    const width = useWindowWidth();
    const chunkedImages = chunk(imagesArray, 3);

    if (!width) return null;

    return (
        <Carousel>
            <CarouselContent>
                {width > 800 &&
                    chunkedImages.map((imageGroup, index) => (
                        <CarouselItem key={index}>
                            <div className="grid h-[200px] grid-cols-3 grid-rows-2 gap-2 lg:h-[500px]">
                                <div className="relative col-span-2 row-span-2">
                                    {imageGroup[0]?.image?.url && (
                                        <Image
                                            src={imageGroup[0].image.url}
                                            alt={imageGroup[0].image.alt || `Image ${index * 3}`}
                                            fill
                                            className="rounded-xl object-cover"
                                        />
                                    )}
                                </div>
                                <div className="relative col-span-1 row-span-1">
                                    {imageGroup[1]?.image?.url && (
                                        <Image
                                            src={imageGroup[1].image.url}
                                            alt={
                                                imageGroup[1].image.alt || `Image ${index * 3 + 1}`
                                            }
                                            fill
                                            className="rounded-xl object-cover"
                                        />
                                    )}
                                </div>
                                <div className="relative col-span-1 row-span-1">
                                    {imageGroup[2]?.image?.url && (
                                        <Image
                                            src={imageGroup[2].image.url}
                                            alt={
                                                imageGroup[2].image.alt || `Image ${index * 3 + 2}`
                                            }
                                            fill
                                            className="rounded-xl object-cover"
                                        />
                                    )}
                                </div>
                            </div>
                        </CarouselItem>
                    ))}

                {width <= 800 &&
                    imagesArray.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="relative grid h-[200px] grid-cols-1 rounded-lg">
                                {image?.image?.url && (
                                    <Image
                                        src={image.image.url}
                                        alt={image.image.alt || `Image ${index}`}
                                        fill
                                        className="rounded-lg object-cover"
                                    />
                                )}
                            </div>
                        </CarouselItem>
                    ))}
            </CarouselContent>
            <CarouselPrevious className={'ml-20'} />
            <CarouselNext className={'mr-20'} />
        </Carousel>
    );
}
