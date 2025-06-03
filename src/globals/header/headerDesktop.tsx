import Image from "next/image";
import {Button} from "@/components/ui/button";
import {HeaderBlockProps} from "./index";
import {redirect} from "next/navigation";
import {isMedia} from "@/utilities/isMedia";
import Link from "next/link";

export function HeaderDesktop(props: HeaderBlockProps) {
    const {HeaderProps} = props;
    const {navLogo, navItems, navButton} = HeaderProps

    return (<div className={'flex flex-row w-full justify-between py-10 px-16 lg:px-24'}>
        <div className={'flex flex-row'}>
            <div className="relative h-12 w-12">
                {isMedia(navLogo) && navLogo.url && (
                    <Image src={navLogo.url} alt={navLogo.alt || "Logo"}
                           fill className="object-contain"/>
                )}
            </div>
            <div
                className={'flex flex-row space-x-8 ml-8 text-sm max-lg:leading-tight lg:text-lg text-white uppercase hover:underline'}>
                {navItems?.map((item, i) => (
                    <Link key={i} href={item?.itemsGroup?.url as string} className={'flex items-center'}>
                        {item?.itemsGroup?.label}
                    </Link>))}</div>
        </div>
        <Button className={'text-white text-lg uppercase rounded-2xl bg-[#FBC965] hover:bg-[#f2ba49]'}
                onClick={() => redirect(navButton?.url as string)}>
            {navButton?.labelMobile}
        </Button>
    </div>)
}