'use client'

import {HeaderBlockProps} from "@/globals/header/index";
import {isMedia} from "@/utilities/isMedia";
import {cn} from '@/utilities/ui'
import {Button} from '@/components/ui/button'
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import Image from 'next/image'
import {useState} from "react";
import {redirect} from "next/navigation";
import Link from "next/link";

export function HeaderMobile(props: HeaderBlockProps) {
    const [open, setOpen] = useState(false)
    const {HeaderProps} = props
    const {navLogo, navItems, navButton} = HeaderProps

    return (<Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
            <div className={'flex flex-row justify-between px-4 py-4 items-center absolute top-0 left-0 w-full'}>
                <div className={'w-12 h-12 relative '}>
                    {isMedia(navLogo) && navLogo.url && (
                        <Image src={navLogo.url as string} alt={navLogo.alt} fill className={'object-contain'}/>
                    )}
                </div>

                <Button variant="ghost" size="icon" className="md:hidden hover:bg-[#0E7269]">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 12H21"
                            stroke="#1A1A1A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3 6H21"
                            stroke="#1A1A1A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3 18H21"
                            stroke="#1A1A1A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </div>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-1/2 max-w-full  border-none">
            <div className="flex flex-col h-full bg-white rounded-lg">
                <div className="flex justify-center items-center p-4">
                    <div className="flex-1 flex justify-center mt-24">
                        {isMedia(navLogo) && navLogo.url && (
                            <Image
                                src={navLogo.url as string}
                                alt={navLogo.alt}
                                width={150}
                                height={50}
                                className="object-cover"
                            />
                        )}
                    </div>
                </div>

                <nav className="flex flex-col px-0 py-6 space-y-4 justify-center">
                    {navItems?.map((item, i) => (
                        <div key={i} className="mx-4 hover:text-white">
                            <Link
                                href={item.itemsGroup?.url as string}
                                className={cn(
                                    'flex items-center gap-4 rounded-md py-3 text-sm font-medium pl-4 hover:bg-[#FBC965] ',
                                )}
                            >

                                <span>{item.itemsGroup?.label}</span>
                            </Link>
                        </div>
                    ))}
                </nav>
                <Button className={"mx-4 rounded-2xl bg-[#FBC965] hover:bg-[#f2ba49]"}
                        onClick={() => redirect(navButton?.url as string)}>{navButton?.labelMobile}</Button>

            </div>
        </SheetContent>
    </Sheet>)
}