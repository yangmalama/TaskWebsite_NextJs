import React from 'react'
import { FaIndustry } from "react-icons/fa";
import { MdOutlineVerified, MdEco } from "react-icons/md";
import { IoRibbonOutline } from "react-icons/io5";

export default function OurProcess() {
  const processSteps = [
    {
      icon: <FaIndustry className="w-8 h-8 text-purple-500 mx-auto" />,
      title: "Advanced Facilities",
      description: "Our manufacturing plants use cutting-edge technology to ensure precision and efficiency."
    },
    {
      icon: <MdOutlineVerified className="w-8 h-8 text-pink-500 mx-auto" />,
      title: "Quality Control",
      description: "Rigorous testing at every stage ensures our products meet the highest safety standards."
    },
    {
      icon: <MdEco className="w-8 h-8 text-green-500 mx-auto" />,
      title: "Eco-Friendly",
      description: "We are committed to sustainable practices and environmentally responsible manufacturing."
    },
    {
      icon: <IoRibbonOutline className="w-8 h-8 text-orange-500 mx-auto" />,
      title: "Certified",
      description: "Our products meet international quality and safety certifications for your peace of mind."
    }
  ];
  return (
    <div>
      {/* Our process */}
      <div className="w-full py-12">
        <div className="w-11/12 mx-auto px-4 text-center">
          <div>
            {/* Subtitle */}
            <p className="text-pink-500 font-medium text-lg">Our Process</p>

            {/* Main Title */}
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent p-2">
              Manufacturing Excellence
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-md max-w-3xl mx-auto">
              Our state-of-the-art manufacturing facilities ensure the highest quality standards for all our hygiene products.
            </p>
          </div>
        </div>
      </div>
      {/* Process Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-11/12 mx-auto">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-opacity-5 hover:bg-opacity-10 transition-all duration-300"
            style={{
              background: `linear-gradient(to bottom right, ${
                index === 0 ? '#faf5ff' :
                index === 1 ? '#fdf2f8' :
                index === 2 ? '#f0fdf4' :
                '#fff7ed'
              }, white)`
            }}
          >
            {step.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2 text-center">{step.title}</h3>
            <p className="text-gray-600 text-sm text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
