'use client'
import {Media} from "@/payload-types";
import Image from 'next/image'
import {Button} from "@/components/ui/button"
import {HeaderDesktop} from "@/globals/header/headerDesktop";

export interface HeaderBlockProps {
    logo: Media
    navItems: {
        label: string,
        url: string,
    }[]
    navButton: {
        label: string,
        url: string,
    }
}

export function HeaderBlock(props: HeaderBlockProps) {


    return (<HeaderDesktop {...props}/>)
}