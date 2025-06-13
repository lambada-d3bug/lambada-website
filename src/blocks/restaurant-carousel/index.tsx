'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Media } from '@/payload-types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

interface RestaurantCarouselBlockProps {
    title: string;
    subheading: string;
    description: string;
    imageSubheading: string;
    imagesArray: { images: { image: Media; label: string } }[];
    button: { label: string; url: string };
}

export function RestaurantCarouselBlock(props: RestaurantCarouselBlockProps) {
    const { title, subheading, imagesArray, description, button, imageSubheading } = props;
    console.log(imagesArray);
    return (
        <div className={'grid grid-cols-1 gap-4 py-8 sm:grid-cols-3 sm:px-0'}>
            <div className={'col-span-1 flex flex-col space-y-2 px-6 sm:order-1 sm:pl-4'}>
                <p className={'text-lg font-semibold'}>{title}</p>
                <div className={'flex items-center justify-end space-x-4 text-xs'}>
                    <div className={'border-t-primary h-0 w-8 border-t-2 lg:w-16'}></div>
                    <p className={'text-primary'}>{subheading}</p>
                </div>
                <p className={'text-xs'}>{description}</p>
            </div>
            <Carousel className={'order-3 col-span-2'}>
                <CarouselContent className={'flex justify-center space-x-4'}>
                    {imagesArray.map((images, i) => (
                        <CarouselItem key={i} className={'relative h-[200px] basis-1/3'}>
                            <Image
                                fill
                                src={images.images.image.url as string}
                                alt={images.images.image.alt}
                                className={'rounded-lg object-cover'}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div
                className={
                    'order-5 flex flex-row items-center justify-end space-x-4 self-end sm:col-span-2'
                }>
                <div className={'border-t-sidebar-primary/75 h-0 w-12 border-t-2 lg:w-20'}></div>
                <p className={'text-primary font-semibold'}>{imageSubheading}</p>
                <div className={'border-t-primary h-0 w-8 border-t-2 lg:w-16'}></div>
            </div>
            <Button
                onClick={() => redirect('restaurant')}
                className={
                    'bg-secondary hover:bg-secondary-foreground order-4 mx-auto self-start rounded-2xl text-white'
                }>
                {button.label}
            </Button>
        </div>
    );
}
