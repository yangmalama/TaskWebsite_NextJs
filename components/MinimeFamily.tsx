import Image from "next/image";
import React from "react";

export default function MinimeFamily() {
  interface Product {
    img: string;
    alt: string;
  }

  const Product = [
    {
      img: "/minime1.png",
      alt: "Minime1",
    },
    {
      img: "/minime2.jpg",
      alt: "Minime2",
    },
    {
      img: "/minime3.jpg",
      alt: "Minime3",
    },
  ];

  return (
    <div>
      <div className="w-full py-14">
        <h2 className="text-4xl text-center px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text font-semibold max-w-3xl mx-auto lg:text-4xl md:text-3xl sm:text-2xl">
          Introducing our latest addition to the Minime family - the Minime 360!
        </h2>
        <p className="text-center text-gray-700">
          Introducing our latest addition to the Minime family - the Minime 360!
        </p>
      </div>
      <div className="w-11/12 mx-auto mb-8 grid sm:grid-cols-1 sm:w-8/12 md:grid-cols-2 md:w-10/12 lg:grid-cols-3 lg:w-11/12 gap-6">
        {Product.map((item: Product, index: number) => (
          <Image
            key={index}
            src={item.img}
            alt={item.alt}
            width={500}
            height={500}
            className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
}
