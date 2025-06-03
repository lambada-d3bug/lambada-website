'use client'

import {Media} from "@/payload-types";
import {Button} from "@payloadcms/ui";
import {redirect} from "next/navigation";

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
    return (
        <main className={'h-screen w-screen flex flex-col justify-center'} style={{
            backgroundColor: "#668E2E",
            ...(bgImage?.url && {
                backgroundImage: `url(${bgImage.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }),
        }}>
            <div className={'ml-4 md:ml-8 lg:ml-20 space-y-2'}>
                <p className={"uppercase text-8xl text-white break-words lg:w-2/3"}>{heading}</p>
                <Button className={"bg-[#0E7269] text-white px-3 py-1 rounded-xl"}
                        onClick={() => redirect(button.url)}>{button.label}</Button>
            </div>

        </main>
    )


}