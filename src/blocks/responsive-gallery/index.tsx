import { Card, CardContent } from "@/components/ui/card"
import {Button } from "@/components/ui/button"
import { Media } from "@/payload-types"
import { useState } from "react"
import Image from "next/image"
import {ChevronLeft, ChevronRight} from "lucide-react";
import {cn} from "@/utilities/ui";


interface ResponsiveGalleryProps {
    imagesArray: Media[]
}

export function ResponsiveGalleryBlock (props: ResponsiveGalleryProps){
    const {imagesArray}= props
    const [currentIndex, setCurrentIndex] = useState(0)

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
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">La plage de Farinole</h1>

            <div className="relative">
                {/* Mobile View (1 image) */}
                <div className="md:hidden relative">
                    <Card className="overflow-hidden">
                        <CardContent className="p-0 relative aspect-[4/3]">
                            <Image
                                src={imagesArray[currentIndex % totalImages].url || "/placeholder.svg"}
                                alt={imagesArray[currentIndex % totalImages].alt}
                                fill
                                className="object-cover"
                            />
                        </CardContent>
                    </Card>
                    <Button
                        variant="secondary"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 hover:bg-white/90"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous slide</span>
                    </Button>
                    <Button
                        variant="secondary"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 hover:bg-white/90"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next slide</span>
                    </Button>
                </div>

                {/* Tablet View (2 images) */}
                <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
                    {[0, 1].map((offset) => (
                        <Card key={offset} className="overflow-hidden">
                            <CardContent className="p-0 relative aspect-[4/3]">
                                <Image
                                    src={imagesArray[(currentIndex + offset) % totalImages].url || "/placeholder.svg"}
                                    alt={imagesArray[(currentIndex + offset) % totalImages].alt}
                                    fill
                                    className="object-cover"
                                />
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Desktop View (3 images) */}
                <div className="hidden lg:grid grid-cols-3 gap-4">
                    {[0, 1, 2].map((offset) => (
                        <Card key={offset} className="overflow-hidden">
                            <CardContent className="p-0 relative aspect-[4/3]">
                                <Image
                                    src={imagesArray[(currentIndex + offset) % totalImages].url || "/placeholder.svg"}
                                    alt={imagesArray[(currentIndex + offset) % totalImages].alt}
                                    fill
                                    className="object-cover"
                                />
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Navigation dots (optional) */}
                <div className="flex justify-center mt-4 gap-2">
                    {Array.from({ length: totalImages }).map((_, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            size="icon"
                            className={cn("w-2 h-2 rounded-full p-0", currentIndex === index ? "bg-primary" : "bg-muted")}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <span className="sr-only">Go to slide {index + 1}</span>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}