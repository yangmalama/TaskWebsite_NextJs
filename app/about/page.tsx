import Banner from "@/components/Banner";
import HearFrom from "@/components/HearFrom";
import OurProcess from "@/components/OurProcess";
import OurPromise from "@/components/OurPromise";
import ProductSection from "@/components/ProductSection";
import React from "react";

export default function About() {
  return (
    <div>
      {/* Banner Image at top */}
      <Banner />

      {/* about us  */}
      <div className="text-center mt-8">
        <div className="inline-block px-8 py-2 text-white text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-md">
          About Us
        </div>
        <div className="mt-6 px-4 py-4 bg-pink-50 text-gray-800 rounded-lg shadow-md text-xl w-11/12 mx-auto">
          <p className="text-justify m-6 ">
            At Softy Hygiene, we believe that care begins with comfort,
            cleanliness, and trust. As one of Nepal's largest private-label
            manufacturers of personal hygiene products—including baby wipes,
            diapers, sanitary napkins, and tissues—we are committed to creating
            reliable, high-quality essentials for women and babies.
          </p>
        </div>
      </div>
      {/*  Why softy. */}
      <div className="text-center mt-8">
        <div className="inline-block px-8 py-2 text-white text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md">
          Why softy.
        </div>
        <div className="mt-6 px-4 py-4 bg-blue-50 text-gray-800 rounded-lg shadow-md text-xl w-11/12 mx-auto">
          <p className="text-justify m-6 ">
            At Softy Hygiene, we believe that care begins with comfort,
            cleanliness, and trust. As one of Nepal's largest private-label
            manufacturers of personal hygiene products—including baby wipes,
            diapers, sanitary napkins, and tissues—we are committed to creating
            reliable, high-quality essentials for women and babies.
          </p>
        </div>
      </div>
      {/*  Hear from us. */}
      <HearFrom />

      <ProductSection />
      {/*  Our Process */}
      <OurProcess />
      {/*  Our Promise */}
      <OurPromise />
      {/*  Footer */}
      
    </div>
  );
}
