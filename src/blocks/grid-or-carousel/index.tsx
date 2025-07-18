'use client';

import { Media } from '@/payload-types';
import { DesktopGrid } from '@/blocks/grid-or-carousel/components/desktopGrid';
import { useWindowWidth } from '@/utilities/useWindowWidth';
import { MobileTabletCarousel } from '@/blocks/grid-or-carousel/components/mobileTabletCarousel';

export interface GridOrCarouselBlockProps {
    blockDisplayBoolean?: boolean;
    title: { titlePart: string; titlePart1: string; titlePart2: string };
    cardArray: {
        card: {
            title: string;
            description: string;
            icon: Media;
        };
    }[];
}

export function GridOrCarouselBlock(props: GridOrCarouselBlockProps) {
    const width = useWindowWidth();
    if (width === null) return null;
    return <>{width > 950 ? <DesktopGrid {...props} /> : <MobileTabletCarousel {...props} />}</>;
}
