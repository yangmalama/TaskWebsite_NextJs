import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Define TypeScript interfaces for type safety
interface CategoryItem {
  image: string;
  name: string;
  id: number;
}

// Category data with proper typing
const categoryItems: CategoryItem[] = [
  {
    id: 1,
    image: "/c1.jpg",
    name: "Sanitary Napkins",
  },
  {
    id: 2,
    image: "/c2.jpg",
    name: "Wipes",
  },
  {
    id: 3,
    image: "/c3.jpg",
    name: "Tissue Papers",
  },
  {
    id: 4,
    image: "/c4.jpg",
    name: "Diaper",
  },
];


export default function Categories(): React.ReactElement {
  return (
    <section className="px-4 w-full sm:px-8 md:px-16 lg:px-20 xl:px-24 py-12 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-1 xl:px-74 lg:px-52 md:px-32 sm:px-22">
        <h1 className="md:text-4xl font-bold text-2xl bg-gradient-to-r md:h-12 from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Explore Our Categories
        </h1>
        <p className="md:text-lg opacity-70">
          Discover the wide range of products we offer for your personal and
          professional hygiene needs.
        </p>
      </div>

      {/* Categories Carousel Section */}
      <Carousel
        className="w-full"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="-ml-1">
          {categoryItems.map((category) => (
            <CarouselItem 
              key={category.id} 
              className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-4 flex items-center justify-center">
                <Card className="max-w-xs rounded-2xl overflow-hidden group bg-gradient-to-br from-purple-200 to-pink-200 shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="space-y-4 relative p-4">
                    {/* Image Container */}
                    <div className="w-full border bg-white overflow-hidden rounded-xl">
                      <Image
                        className="rounded-xl w-full group-hover:scale-110 transition-all duration-300 h-[250px] object-cover"
                        src={category.image}
                        alt={`${category.name} category`}
                        width={600}
                        height={600}
                        priority={category.id <= 2} // Prioritize loading for first two images
                      />
                    </div>

                    {/* Category Details */}
                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold opacity-90 group-hover:translate-x-2 transition-transform duration-300">
                        {category.name}
                      </h2>
                      <p className="flex items-center group-hover:text-purple-500 transition-colors duration-300 gap-1">
                        View Category
                        <ArrowRight 
                          className="group-hover:translate-x-1 mt-1 transition-transform duration-300" 
                          size={16} 
                          strokeWidth={1.5} 
                        />
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="flex scale-75 sm:scale-100 bg-white/50 hover:bg-white/75" />
        <CarouselNext className="flex scale-75 sm:scale-100 bg-white/50 hover:bg-white/75" />
      </Carousel>
    </section>
  );
}