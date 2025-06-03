'use client'
import {Header} from "@/payload-types";
import {HeaderDesktop} from "@/globals/header/headerDesktop";
import {HeaderMobile} from "@/globals/header/headerMobile";
import {useEffect, useState} from "react";

export interface HeaderBlockProps {
    HeaderProps: Header
}

export function HeaderBlock(props: HeaderBlockProps) {
    function useWindowWidth() {
        const [width, setWidth] = useState<number | null>(null)

        useEffect(() => {
            // Now we are in the browser
            const handleResize = () => setWidth(window.innerWidth)

            // Set initial width
            handleResize()

            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }, [])

        return width
    }


    const width = useWindowWidth()
    if (width === null) return null
    return (<>{width > 620 ?
        <HeaderDesktop {...props} /> :
        <HeaderMobile {...props} />
    }</>)
}