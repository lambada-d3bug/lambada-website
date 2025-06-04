'use client'

import {Media} from "@/payload-types"
import {useState} from "react"
import Image from "next/image"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";


interface ResponsiveGalleryProps {
    imagesArray: { image: Media, id: string }[]
}

export function ResponsiveGalleryBlock(props: ResponsiveGalleryProps) {
    const {imagesArray} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    console.log(imagesArray)

    const totalImages = imagesArray.length
    const visibleImages = {
        mobile: 1,
        tablet: 2,
        desktop: 3,
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 >= totalImages ? 0 : prevIndex + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? totalImages - 1 : prevIndex - 1))
    }

    return (
        <div className="w-full max-w-full mx-auto px-4 py-8 flex flex-col lg:bg-[#fbc96526]">
            <h1 className="text-lg lg:text-5xl font-bold mb-6">La plage de Farinole</h1>
            <Carousel className="w-full max-w-full overflow-visible">
                <CarouselContent className="h-82 lg:h-48 -ml-2 md:-ml-4">
                    {imagesArray.map((image, index) => (
                        <CarouselItem key={index} className="basis-full md:basis-[60%] lg:basis-[40%] pl-2 md:pl-4">
                            <div className="relative w-full h-full rounded-lg">
                                <Image
                                    src={(image.image.url as string) || "/placeholder.svg"}
                                    alt={image.image.alt}
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ml-14 md:ml-24" />
                <CarouselNext className="mr-14 md:mr-24" />
            </Carousel>
        </div>
    )
}