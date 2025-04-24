import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// TypeScript interface for carousel image data structure
interface CarouselImage {
    imageUrl: string;
    altText?: string;
}

export function HeroSection(): React.JSX.Element {
    return (
        // Main carousel wrapper with full width and responsive height
        <Carousel className="relative w-full -mt-[24px]">
            {/* Container for carousel items */}
            <CarouselContent>
                {carouselImages.map((item: CarouselImage, index: number) => (
                    <CarouselItem
                        key={`carousel-item-${index}`}
                        className="w-full">
                        <Card className="rounded-none border-none">
                            <CardContent className="flex items-center justify-center p-0">
                                <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] lg:aspect-[16/6]">
                                    <Image
                                        src={item.imageUrl}
                                        alt={`item.altText || Carousel image ${index + 1}`}
                                        fill
                                        priority={index === 0}
                                        quality={85}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        }}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/*  navigation buttons */}
            <CarouselPrevious
                className="left-2 sm:left-4 z-10 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 opacity-70 hover:opacity-100"
                aria-label="Previous slide"
            />
            <CarouselNext
                className="right-2 sm:right-4 z-10 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 opacity-70 hover:opacity-100"
                aria-label="Next slide"
            />
        </Carousel>
    );
}

// Array containing carousel image data
const carouselImages: CarouselImage[] = [
    {
        imageUrl: "/hero1.jpg",
        altText: "Hero carousel image 1"
    },
    {
        imageUrl: "/hero2.jpg",
        altText: "Hero carousel image 2"
    },
    {
        imageUrl: "/hero3.jpg",
        altText: "Hero carousel image 3"
    },
];