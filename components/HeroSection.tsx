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
    // Main carousel wrapper 
    <Carousel className="relative" >
      {/* Container for carousel items with overflow control */}
      <CarouselContent className="overflow-hidden">
        {/* Map through carousel images array to create slides */}
        {carouselImages.map((item: CarouselImage, index: number) => (
          <CarouselItem 
            key={`carousel-item-${index}`} 
            className="w-full">
            {/* Card component for each carousel item */}
            <Card className="rounded-none border-none">
              {/* Content wrapper */}
              <CardContent className="flex lg:h-[80vh] md:h-88 items-center justify-center p-0">
                <Image
                  className="w-full h-full object-cover"
                  src={item.imageUrl}
                  alt={item.altText || `Carousel image ${index + 1}`}
                  width={1920}
                  height={1080}
                  priority={index === 0} 
                  quality={90} 
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation buttons for the carousel */}
      <CarouselPrevious className="left-4" aria-label="Previous slide" />
      <CarouselNext className="right-4" aria-label="Next slide" />
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