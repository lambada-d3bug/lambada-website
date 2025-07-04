'use client';

import { Media } from '@/payload-types';
import { SvgFromUrl } from '@/utilities/svgFromUrl';
import { CarouselPictureGrid } from '@/blocks/residences-presentation/_components/carousel-picture-grid';
import { Button } from '@/components/ui/button';
import { getClientSideURL } from '@/utilities/getUrl';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import { TabsResidences } from '@/blocks/residences-presentation/_components/tabs-residences';
import { cn } from '@/utilities/ui';

interface ResidencesPresentationBlockProps {
    blockDisplayBoolean?: boolean;
    headingGroup: {
        heading: string;
        starLogo: Media;
        reviewsNumber: number;
        reviewsText: string;
        rating: string;
        location: string;
        description: string;
        saveGroup: {
            label: string;
            logo: Media;
        };
        shareGroup: {
            label: string;
            logo: Media;
        };
    };
    description: string;
    imagesArray: { image: Media; id: string }[];
    tabs: {
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
        localisationTab: {
            tabTitle: string;
            longitude: number;
            latitude: number;
            adressGroup: {
                streetName: string;
                postCode: string;
                townName: string;
                country: string;
                houseNumber: string;
            };
        };
        equipementsTab: {
            equipement: { tabTitle: string; label: string; items: { label: string }[] };
        }[];
        reviewsTab: {
            tabTitle: string;
            overallGroup: {
                overallText: string;
                logo: Media;
            };
            expandToggleTexts: {
                expandLabel: string;
                collapseLabel: string;
            };
            starLogo: Media;
        };
    };
}

export function ResidencesPresentationBlock(props: ResidencesPresentationBlockProps) {
    const { headingGroup, imagesArray, tabs, blockDisplayBoolean } = props;
    const [url, setUrl] = useState<string>('');

    useEffect(() => {
        setUrl(getClientSideURL());
    }, []);

    async function sharePageUrl() {
        try {
            await navigator.share({
                title: 'Share this page',
                text: 'Share this page',
                url,
            });
        } catch (err) {
            toast(err instanceof Error ? err.message : 'Sharing failed');
        }
    }

    return (
        <div
            className={cn(
                'flex flex-col space-y-4 px-5 py-12 md:px-7 lg:px-24',
                blockDisplayBoolean && 'hidden',
            )}>
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-col space-y-2 text-xs md:text-base lg:text-xl'}>
                    <p className={'text-lg font-semibold md:text-3xl lg:text-5xl'}>
                        {headingGroup.heading}
                    </p>
                    <div className={'flex flex-row items-center space-x-2'}>
                        <SvgFromUrl
                            url={headingGroup.starLogo.url as string}
                            alt={headingGroup.starLogo.alt}
                            className={'text-primary dark:text-chart-4 h-6 w-6'}
                        />
                        <p className={'dark:text-primary'}>{headingGroup.rating}</p>

                        <p className={'dark:text-primary'}> - </p>
                        <p className={'text-chart-5 dark:text-primary'}>{headingGroup.location}</p>
                    </div>
                    <p className={'text-chart-5 dark:text-white'}>{headingGroup.description}</p>
                </div>
                <div className={'flex flex-row'}>
                    <Button
                        onClick={sharePageUrl}
                        className={
                            'group dark:bg-primary dark:hover:bg-primary/80 flex flex-col items-center bg-transparent py-8 hover:cursor-pointer'
                        }>
                        <SvgFromUrl
                            url={headingGroup.shareGroup.logo.url as string}
                            alt={headingGroup.shareGroup.logo.alt || ''}
                            className={
                                'dark:group-hover:text-secondary h-5 w-5 group-hover:text-white'
                            }
                        />
                        <p className={'dark:group-hover:text-secondary group-hover:text-white'}>
                            {headingGroup.shareGroup.label}
                        </p>
                    </Button>
                </div>
            </div>
            <CarouselPictureGrid imagesArray={imagesArray} />
            <TabsResidences tabs={tabs} />
        </div>
    );
}
