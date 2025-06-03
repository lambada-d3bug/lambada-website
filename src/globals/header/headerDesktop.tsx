import Image from "next/image";
import {Button} from "@/components/ui/button";
import {HeaderBlockProps} from "./index";
import {redirect} from "next/navigation";

export function HeaderDesktop(props: HeaderBlockProps) {
    const {logo, navItems, navButton} = props;

    return (<div className={'flex flex-row w-full justify-between py-10 px-24'}>
        <div>
            <div className={'relative h-8 w-8'}>
                <Image src={logo.url as string} alt={logo.alt} fill className={'object-cover'}/>
            </div>
            {navItems.map((item, i) =>
                (<a key={i} href={item.url} className={'text-lg'}>{item.label}</a>))}
        </div>
        <Button className={'text-white text-lg uppercase'}
                onClick={() => redirect(navButton.url)}>{navButton.label}</Button>

    </div>)
}