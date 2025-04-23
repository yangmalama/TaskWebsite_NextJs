import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Banner from "@/components/Banner";


// Add interfaces
interface Product {
  img: string;
  productType: string;
  productName: string;
}


const ProductsPage: React.FC = () => {
  return (
    
   <div>
    <Banner />
     <div className="px-4 w-full sm:px-8 md:px-16 lg:px-20 xl:px-24 py-12 space-y-8">
      
      {/* Header section */}
      <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mb-3">Explore Products</h1>
                    <p className="text-gray-600 text-lg mt-1">Explore our wide range of products and find the perfect one for your needs</p>
                </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
        {products.map((item: Product, index: number) => (
          <Card
            key={index}
            className="rounded-2xl overflow-hidden group bg-gradient-to-br from-purple-200 to-pink-200 shadow-sm cursor-pointer group px-6"
          >
            <CardHeader></CardHeader>
            <CardContent className="border overflow-hidden bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <Image
                className=" px-6 object-cover group-hover:scale-110 duration-400"
                src={item.img}
                alt={item.productName}
                width={500}
                height={500}
              />
            </CardContent>
            <CardFooter>
              <div className="space-y-2">
                <p className="text-sm text-purple-700">
                  {item.productType.toLocaleUpperCase()}
                </p>
                <p className="font-semibold tracking-wide text-lg opacity-80 group-hover:translate-x-2 duration-400">
                  {item.productName}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
   </div>
  );
};

const products: Product[] = [
    {
      img: "/premium-wipes.png",
      productType: "WIPES",
      productName: "Premium Wipes",
    },
    {
      img: "/makeup-remover.png",
      productType: "WIPES",
      productName: "Makeup Remover Wipes",
    },
    {
      img: "/anti-bacterial-wipes.png",
      productType: "WIPES",
      productName: "Anti-Bacterial Wipes",
    },
    {
      img: "/travel-wipes.png",
      productType: "WIPES",
      productName: "Travel Wipes",
    },
    {
      img: "/classic-baby-wipes.png",
      productType: "WIPES",
      productName: "Classic Baby Wipes",
    },
  
    {
      img: "/facial-tissue.png",
      productType: "TISSUE PAPERS",
      productName: "Facial Tissue",
    },
    {
      img: "/hand-towel.png",
      productType: "TISSUE PAPERS",
      productName: "Hand Towel",
    },
    {
      img: "/ultra-thin.png",
      productType: "SANITARY NAPKINS",
      productName: "Ultra Thin (240mm)",
    },
    {
      img: "/party-napkin.png",
      productType: "TISSUE PAPERS",
      productName: "Party Napkin",
    },
    {
      img: "/panty-liners.png",
      productType: "SANTITARY NAPKINS",
      productName: "Panty Liners (180mm)",
    },
    {
      img: "/premium-maxi.png",
      productType: "SANITARY NAPKINS",
      productName: "Premium Maxi (240mm)",
    },
    {
      img: "/premium-maxi2.png",
      productType: "SANITARY NAPKINS",
      productName: "Premium Maxi (290mm)",
    },
    {
      img: "/premium-family.png",
      productType: "SANITARY NAPKINS",
      productName: "Premium Family Ultra Thin (320mm)",
    },
    {
      img: "/silver-foil.png",
      productType: "TISSUE PAPERS",
      productName: "Silver Foil",
    },
    {
      img: "/c3.jpg",
      productType: "DIAPERS",
      productName: "Baby Diapers (XXL)",    },
];

export default ProductsPage;