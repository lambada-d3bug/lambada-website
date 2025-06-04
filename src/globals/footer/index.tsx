'use client'

import {Media} from "@/payload-types";
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {redirect} from "next/navigation";
import Link from "next/link";
import {SvgFromUrl} from "@/utilities/svgFromUrl";

interface FooterBlockProps {
    FooterProps: {
        blockDisplayBoolean: boolean | null | undefined
        logo: Media
        description: string
        button: {
            label: string
            url: string
        }
        navArray: {
            navItem: {
                label: string
                url: string
            }
        }[]
        terms: {
            label: string
            url: string
        }
        confidentiality: {
            label: string
            url: string
        }
        socials: {
            social: {
                icon: Media;
                url: string
            }
        }[]
        copyright: { text: string }[]
    }
}

export function FooterBlock(props: FooterBlockProps) {
    const {FooterProps} = props
    const {
        blockDisplayBoolean,
        button,
        copyright,
        logo,
        confidentiality,
        socials,
        terms,
        navArray,
        description
    } = FooterProps
    return (
        <div className={`py-32 px-6 flex flex-col items-center ${blockDisplayBoolean ? 'hidden' : ''}`}>
            <div className={'h-16 w-16 relative'}>
                <Image src={logo.url as string} alt={logo.alt} fill className={'object-contain'}/>
            </div>
            <p className={'text-[#36393E] text-xs'}>{description}</p>
            <Button onClick={() => redirect(button.url)}
                    className={'bg-primary hover:bg-primary-foreground text-white'}>{button.label}
            </Button>
            <div className={'flex flex-row'}>
                {navArray.map((item, i) => (
                    <Link key={i} href={item.navItem.url}>
                        {item.navItem.label}
                    </Link>
                ))}
            </div>
            <div className={'flex flex-row justify-between'}>
                <Link href={terms.url}>{terms.label}</Link>
                <Link href={confidentiality.url}>{confidentiality.label}</Link>
                {socials.map((item, i) => (
                    <Link href={item.social.url} key={i}>
                        <SvgFromUrl url={item?.social?.icon?.url as string}
                                    alt={item.social.icon.alt}/></Link>))}
            </div>
            <div className={'flex flex-row'}>{copyright.map((item, i) => (<p key={i}>{item.text}</p>))}</div>
        </div>
    )
}