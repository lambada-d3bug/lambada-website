'use client';

import { SvgFromUrl } from '@/utilities/svgFromUrl';
import { Media } from '@/payload-types';

interface ResidencesPresentationBlockProps {
    headingGroup: {
        heading: string;
        starLogo: Media;
        reviewNumber: number;
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
    imagesArray: Media[];
    tabs: {
        descriptionTab: {
            tabTitle: string;
            iconArray: {
                iconGroup: {
                    icon: Media;
                    label: string;
                };
            }[];
        };
        localisationTab: {
            tabTitle: string;
            iconArray: {
                iconGroup: {
                    icon: Media;
                    label: string;
                };
            }[];
        };
    };
}

export function ResidencesPresentationBlock(props: ResidencesPresentationBlockProps) {
    return (
        <div className={'px-5'}>
            <div className={'flex flex-col items-start'}>
                <p className={'text-lg font-semibold'}></p>
                <div className={'flex flex-row'}>
                    <SvgFromUrl className={'h-2 w-2'}></SvgFromUrl>
                </div>
            </div>
        </div>
    );
}
