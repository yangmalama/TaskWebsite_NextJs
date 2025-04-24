import React from "react";
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
    <section className="w-full px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 xl:px-16 2xl:px-24 space-y-6 md:space-y-8">
      {/* Header Section */}
      {/* <div className="text-center space-y-2 mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                    Explore Our Categories
                </h1>
                <p className="text-sm sm:text-base md:text-lg opacity-70 px-2">
                    Discover the wide range of products we offer for your personal and
                    professional hygiene needs.
                </p>
            </div> */}
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
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1 md:-ml-2">
          {categoryItems.map((category) => (
            <CarouselItem
              key={category.id}
              className="pl-1 md:pl-2 basis-full xs:basis-3/4 sm:basis-1/2 md:basis-2/5 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-2 sm:p-3 md:p-4 h-full">
                <Card className="rounded-xl sm:rounded-2xl overflow-hidden group bg-gradient-to-br from-purple-200 to-pink-200 shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="space-y-3 sm:space-y-4 relative p-3 sm:p-4 h-full">
                    {/* Image Container */}
                    <div className="w-full border bg-white overflow-hidden rounded-lg sm:rounded-xl aspect-square">
                      <Image
                        className="rounded-lg sm:rounded-xl w-full h-full group-hover:scale-110 transition-all duration-300 object-cover"
                        src={category.image}
                        alt={`${category.name} category`}
                        width={600}
                        height={600}
                        priority={category.id <= 2}
                      />
                    </div>

                    {/* Category Details */}
                    <div className="space-y-1">
                      <h2 className="text-base sm:text-lg font-semibold opacity-90 group-hover:translate-x-2 transition-transform duration-300">
                        {category.name}
                      </h2>
                      <p className="flex items-center text-sm sm:text-base group-hover:text-purple-500 transition-colors duration-300 gap-1">
                        View Category
                        <ArrowRight
                          className="group-hover:translate-x-1 mt-0.5 transition-transform duration-300"
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
        <div className="flex items-center justify-center mt-4 gap-2">
          <CarouselPrevious className="static transform-none mx-1 hover:bg-white/75 h-8 w-8 sm:h-10 sm:w-10 cursor-pointer bg-pink-200" />
          <CarouselNext className="static transform-none mx-1  hover:bg-white/75 h-8 w-8 sm:h-10 sm:w-10 cursor-pointer bg-pink-200" />
        </div>
      </Carousel>
    </section>
  );
}
