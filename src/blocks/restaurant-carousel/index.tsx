'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Media } from '@/payload-types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { cn } from '@/utilities/ui';
import { useEffect, useState } from 'react';

interface RestaurantCarouselBlockProps {
    blockDisplayBoolean?: boolean;
    title: string;
    subheading: string;
    description: string;
    imageSubheading: string;
    imagesArray: { images: { image: Media; label: string } }[];
    button: { label: string; url: string };
    scrollToNextBlock?: () => void;
}

export function RestaurantCarouselBlock(props: RestaurantCarouselBlockProps) {
    const {
        title,
        subheading,
        imagesArray,
        description,
        button,
        imageSubheading,
        blockDisplayBoolean,
        scrollToNextBlock,
    } = props;
    const [isInRestaurant, setIsInRestaurant] = useState(false);
    const params = useParams();
    const pathname = usePathname();
    const router = useRouter();

    const rawLocale = params?.locale;
    const locale = Array.isArray(rawLocale) ? rawLocale[0] : rawLocale;

    useEffect(() => {
        setIsInRestaurant(pathname.includes('restaurant'));
    }, [pathname]);
    return (
        <div
            className={cn(
                blockDisplayBoolean && 'hidden',
                'dark:bg-background grid grid-cols-1 gap-4 py-8 sm:grid-cols-3 sm:px-0',
            )}>
            <div
                className={
                    'col-span-2 flex w-full flex-col space-y-2 px-6 sm:order-1 sm:col-span-1 sm:pl-4 lg:pl-44'
                }>
                <p className={'text-lg font-semibold lg:text-3xl'}>{title}</p>
                <div className={'flex items-center justify-end space-x-4 text-xs lg:text-xl'}>
                    <div className={'border-t-primary h-0 w-8 border-t-2 lg:w-16'}></div>
                    <p className={'text-primary'}>{subheading}</p>
                </div>
                <p className={'text-xs md:text-lg'}>{description}</p>
            </div>
            <Carousel className={'order-3 col-span-2'}>
                <CarouselContent className={'flex justify-center space-x-4 rounded-l-lg'}>
                    {imagesArray.map((images, i) => (
                        <CarouselItem
                            key={i}
                            className={'relative h-[200px] basis-1/3 lg:h-[400px]'}>
                            <Image
                                fill
                                src={images.images.image.url as string}
                                alt={images.images.image.alt}
                                className={'rounded-lg object-cover'}
                            />
                            <div
                                className={cn(
                                    'absolute bottom-2 left-0 flex h-8 w-20 items-center justify-center rounded-r-lg bg-black sm:bottom-4 lg:bottom-6 lg:w-32',
                                    i === 0 && 'md:w-32 lg:w-44',
                                )}>
                                <p
                                    className={cn(
                                        'text-primary text-xs',
                                        i === 0 && 'md:ml-6 lg:ml-12',
                                    )}>
                                    {images.images.label}
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div
                className={
                    'order-5 flex flex-row items-center justify-end space-x-4 self-end sm:col-span-2'
                }>
                <div className={'border-t-sidebar-primary/75 h-0 w-12 border-t-2 lg:w-full'}></div>
                <p className={'text-primary font-semibold'}>{imageSubheading}</p>
                <div className={'border-t-primary h-0 w-8 border-t-2 lg:w-16'}></div>
            </div>
            <Button
                onClick={
                    isInRestaurant
                        ? scrollToNextBlock
                        : () => {
                              router.push(`/${locale}/restaurant`);
                          }
                }
                className={
                    'bg-secondary hover:bg-secondary-foreground order-4 mx-auto self-start rounded-full px-4 py-4 text-lg text-white lg:ml-44 lg:py-6 lg:text-xl'
                }>
                {button.label}
            </Button>
        </div>
    );
}
