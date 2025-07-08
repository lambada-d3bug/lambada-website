'use client';

import React, { Fragment, useEffect, useRef } from 'react';
import type { Page } from '@/payload-types';
import { ResponsiveGalleryBlock } from '@/blocks/responsive-gallery';
import { HeroBlock } from '@/blocks/hero';
import { GridOrCarouselBlock } from '@/blocks/grid-or-carousel';
import { ReviewCarouselBlock } from '@/blocks/review-carousel';
import { OverallRatingBlock } from '@/blocks/overall-rating';
import { ResidencesPresentationBlock } from '@/blocks/residences-presentation';
import { ContactInformationBlock } from '@/blocks/contact-information';
import { BookingFormBlock } from '@/blocks/booking-form';
import { ResidenceGeneralBlock } from '@/blocks/residence-general';
import { RestaurantCarouselBlock } from '@/blocks/restaurant-carousel';
import { RestaurantMenuBlock } from '@/blocks/restaurant-menu';
import { TermsAndConditionsBlock } from '@/blocks/terms-and-conditions';

// Common interface for all block components
interface BlockComponentProps {
    scrollToNextBlock?: () => void;
}

// Define the type for blockComponents
type BlockComponentsType = {
    [key: string]: React.ComponentType<any & BlockComponentProps>;
};

const blockComponents: BlockComponentsType = {
    responsiveGallery: ResponsiveGalleryBlock,
    hero: HeroBlock,
    gridOrCarousel: GridOrCarouselBlock,
    reviewCarousel: ReviewCarouselBlock,
    overallRating: OverallRatingBlock,
    residencesPresentation: ResidencesPresentationBlock,
    contactInformation: ContactInformationBlock,
    bookingForm: BookingFormBlock,
    residenceGeneral: ResidenceGeneralBlock,
    restaurantCarousel: RestaurantCarouselBlock,
    restaurantMenu: RestaurantMenuBlock,
    termsAndConditions: TermsAndConditionsBlock,
};

export const RenderBlocks: React.FC<{
    blocks: Page['layout'];
}> = ({ blocks }) => {
    const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;
    const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
    useEffect(() => {
        blockRefs.current = blockRefs.current.slice(0, blocks?.length || 0);
    }, [blocks?.length]);
    if (!hasBlocks) return null;

    return (
        <Fragment>
            {blocks.map((block, index) => {
                const { blockType } = block;

                if (!blockType || !(blockType in blockComponents)) return null;

                const Block = blockComponents[blockType];
                const scrollToNextBlock = () => {
                    const next = blockRefs.current[index + 1];
                    if (next) next.scrollIntoView({ behavior: 'smooth' });
                };

                return (
                    <div
                        key={index}
                        ref={(el: HTMLDivElement | null) => {
                            blockRefs.current[index] = el;
                        }}>
                        <Block {...(block as any)} scrollToNextBlock={scrollToNextBlock} />
                    </div>
                );
            })}
        </Fragment>
    );
};
