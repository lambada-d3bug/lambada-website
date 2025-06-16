'use client';

import { TabsContent } from '@/components/ui/tabs';
import type { Media } from '@/payload-types';
import { ReviewCarouselBlock } from '@/blocks/review-carousel';
import { OverallRatingBlock } from '@/blocks/overall-rating';

interface ReviewsTabProps {
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
}

export function ReviewsTab(props: ReviewsTabProps) {
    const { reviewsTab } = props;
    const { overallGroup, expandToggleTexts, starLogo } = reviewsTab;
    return (
        <TabsContent value="avis" className="mt-6">
            <OverallRatingBlock
                title={overallGroup.overallText}
                starEmptyLogo={overallGroup.logo}
            />
            <ReviewCarouselBlock
                overallText={overallGroup.overallText}
                starLogo={starLogo}
                expandToggleTexts={expandToggleTexts}
            />
        </TabsContent>
    );
}
