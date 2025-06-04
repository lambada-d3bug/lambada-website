'use client'

import {GridOrCarouselBlockProps} from "@/blocks/grid-or-carousel/index";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import {SvgFromUrl} from "@/utilities/svgFromUrl";
import {useEffect, useState} from "react";

export function MobileTabletCarousel(props: GridOrCarouselBlockProps) {
    const {title, cardArray} = props;
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.scrollTo(2);
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    return (
        <div className={"w-full py-16 space-y-16"}>
            <div className="flex flex-row justify-center">
                <p className="text-center text-3xl font-semibold">
                    {title.titlePart}
                    <span className="text-[#0E7269]">{title.titlePart1}</span>
                    {title.titlePart2}
                </p>
            </div>
            <Carousel setApi={setApi}>
                <CarouselContent>
                    {cardArray.map((item, index) => (
                        <CarouselItem key={index} className={'basis-7/12 gap-8'}>
                            <Card
                                className={`group rounded-none  text-black hover:text-white transition-transform duration-300 ${current - 1 === index ? "bg-[#FBC965] scale-100" : "bg-[#FFF9EC] scale-85"} `}>
                                <CardContent className={'flex flex-col items-center px-6 py-10 space-y-4'}>
                                    <div className={"relative h-8 w-8"}>
                                        <SvgFromUrl url={item.card.icon.url as string} alt={item.card.icon.alt}
                                                    className={`h-8 w-8  ${current - 1 === index ? "text-[#FFF9EC]" : "text-[#FBC965]"} `}/>
                                    </div>
                                    <div
                                        className={`flex flex-col space-y-2 text-center ${current - 1 === index ? "text-white" : ""}`}>
                                        <p
                                            className={'text-2xl'}>{item.card.title}</p>
                                        <p className={'text-sm'}>{item.card.description}</p></div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>)
}