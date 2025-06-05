import React, { Fragment } from 'react';

import type { Page } from '@/payload-types';
import { ResponsiveGalleryBlock } from '@/blocks/responsive-gallery';
import { HeroBlock } from '@/blocks/hero';
import { GridOrCarouselBlock } from '@/blocks/grid-or-carousel';
import { ReviewCarouselBlock } from '@/blocks/review-carousel';
import { OverallRatingBlock } from '@/blocks/overall-rating';

const blockComponents = {
    responsiveGallery: ResponsiveGalleryBlock,
    hero: HeroBlock,
    gridOrCarousel: GridOrCarouselBlock,
    reviewCarousel: ReviewCarouselBlock,
    overallRating: OverallRatingBlock,
};

export const RenderBlocks: React.FC<{
    blocks: Page['layout'];
}> = (props) => {
    const { blocks } = props;

    const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

    if (hasBlocks) {
        return (
            <Fragment>
                {blocks.map((block, index) => {
                    const { blockType } = block;

                    if (blockType && blockType in blockComponents) {
                        const Block = blockComponents[blockType];

                        if (Block) {
                            return (
                                <div key={index}>
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    <Block {...(block as any)} />
                                </div>
                            );
                        }
                    }
                    return null;
                })}
            </Fragment>
        );
    }

    return null;
};
