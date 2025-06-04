'use client'
import {Media} from "@/payload-types";

import {DesktopGrid} from "@/blocks/grid-or-carousel/desktopGrid";

export interface GridOrCarouselBlockProps {
    title: { titlePart: string, titlePart1: string, titlePart2: string }
    cardArray: {
        card: {
            title: string,
            description: string,
            icon: Media
        }
    }[]

}

export function GridOrCarouselBlock(props: GridOrCarouselBlockProps) {


    return (<DesktopGrid {...props} />)
}