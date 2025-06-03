'use client'
import {Media} from "@/payload-types";
import {Card, CardContent} from "@/components/ui/card";
import {SvgFromUrl} from "@/utilities/svgFromUrl";

interface GridOrCarouselBlockProps {
    title: string;
    card: {
        title: string,
        description: string,
        icon: Media
    }[]
}

export function GridOrCarouselBlock(props: GridOrCarouselBlockProps) {
    const {card, title} = props;


    return (<div className={'w-full'}>
        <p>{title}</p>
        <div className={'grid grid-cols-3'}>
            {card.map((card, index) => (<Card key={index}>
                <CardContent className={'flex flex-col items-center'}>
                    <div className={"relative h-8 w-8"}>
                        <SvgFromUrl url={card.icon.url as string} alt={card.icon.alt} className={'h-8 w-8 text-[#FBC965] group-hover:text-[#FFF9EC]'} />
                    </div>
                    <p>{card.title}</p>
                    <p>{card.description}</p>
                </CardContent>
            </Card>))}
        </div>


    </div>)
}