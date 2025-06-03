'use client'

import {Media} from "@/payload-types";

interface HeroBlockProps {
    bgImage: Media
    heading: string
    button: {
        label: string
        url: string
    }
}

export function HeroBlock(props: HeroBlockProps) {
    const {bgImage, button, heading} = props
    return (<main className={'h-screen w-screen '} style={{
        backgroundColor: "#668E2E",
        ...(bgImage?.url && {
            backgroundImage: `url(${bgImage.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
        }),
    }}>

    </main>)


}