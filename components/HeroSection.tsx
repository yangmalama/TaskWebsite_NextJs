"use client"; 
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
    // Main carousel wrapper with -mt-[X] to remove gap
    <Carousel className="relative -mt-[24px]" >
      {/* Container for carousel items */}
      <CarouselContent>
        {carouselImages.map((item: CarouselImage, index: number) => (
          <CarouselItem 
            key={`carousel-item-${index}`} 
            className="w-full">
            <Card className="rounded-none border-none">
              <CardContent className="flex h-screen max-h-[90vh] items-center justify-center p-0">
                <div className="relative w-full h-full">
                  <Image
                    className="w-full h-full object-cover"
                    src={item.imageUrl}
                    alt={item.altText || `Carousel image ${index + 1}`}
                    width={1920}
                    height={1080}
                    priority={true} 
                    quality={90}
                    sizes="100vw"
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

      <CarouselPrevious className="left-4 z-10" aria-label="Previous slide" />
      <CarouselNext className="right-4 z-10" aria-label="Next slide" />
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