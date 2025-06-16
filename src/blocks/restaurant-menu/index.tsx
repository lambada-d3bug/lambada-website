'use client';
import { Media } from '@/payload-types';
import Image from 'next/image';

interface RestaurantMenuBlockProps {
    title: string;
    images: { image: Media }[];
    schedules: {
        title: string;
        schedulesArray: {
            schedulesGroup: {
                day: string;
                timeAM: string;
                timePM: string;
            };
        }[];
    };
    image: Media;
}

export function RestaurantMenuBlock(props: RestaurantMenuBlockProps) {
    const { title, images, schedules, image } = props;

    return (
        <div className="flex flex-col items-center space-y-4 py-32 lg:space-y-8">
            <p className="px-6 text-lg font-semibold sm:text-3xl">{title}</p>

            {images.map((image, i) => (
                <div key={i} className="relative h-[400px] w-full px-6 sm:h-[500px] md:h-[1000px]">
                    <Image
                        src={image.image.url as string}
                        alt={image.image.alt}
                        fill
                        className="object-contain"
                    />
                </div>
            ))}

            <div className={'flex w-full flex-col items-center sm:flex-row'}>
                <div className="flex w-full flex-col space-y-4 px-6 sm:order-2">
                    <p className="border-b-primary self-start border-b text-lg font-semibold sm:text-3xl lg:border-b-3 lg:text-5xl">
                        {schedules.title}
                    </p>
                    {schedules.schedulesArray.map((schedulesGroup, i) => (
                        <div
                            key={i}
                            className="flex w-full flex-row justify-between text-xs sm:text-base lg:text-3xl">
                            <p className="font-semibold">{schedulesGroup.schedulesGroup.day}</p>
                            <div className="flex flex-row space-x-6">
                                <p>{schedulesGroup.schedulesGroup.timeAM}</p>
                                <p>{schedulesGroup.schedulesGroup.timePM}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative mt-4 h-[200px] w-full sm:order-1 sm:h-[500px]">
                    <Image
                        src={image.url as string}
                        alt={image.alt}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
