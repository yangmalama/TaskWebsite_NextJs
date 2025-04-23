import React from 'react';
import { Heart, Shield, Leaf } from 'lucide-react';

export default function ProductSection() {
  const products = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Feminine Care",
      description: "Our sanitary napkins are designed for maximum comfort and protection, using the finest materials for sensitive skin.",
      bgColor: "from-pink-50 to-pink-100",
      iconBg: "bg-pink-100",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Baby Care",
      description: "Our diapers and baby wipes are gentle on baby's skin while providing superior absorption and cleanliness.",
      bgColor: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Wet Wipes & Tissues",
      description: "Our disposable wet wipes and tissue papers provide convenient cleanliness for all ages and situations.",
      bgColor: "from-green-50 to-green-100",
      iconBg: "bg-green-100",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-11/12 mx-auto">
        {/* Products section */}
        <div className="w-full py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div>
              {/* Subtitle */}
              <p className="text-pink-500 font-medium text-lg">Our Products</p>

              {/* Main Title */}
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent p-2">
                Comprehensive Hygiene Solutions
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-md max-w-3xl mx-auto">
                We specialize in manufacturing a wide range of hygiene products
                designed with care and precision for ultimate comfort and
                protection.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 bg-gradient-to-br ${product.bgColor} shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className={`${product.iconBg} w-16 h-16 rounded-full border-6 border-red-100 flex items-center justify-center mb-6 mx-auto`}>
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {product.title}
              </h3>
              <p className="text-gray-600 text-center">
                {product.description}
              </p>
              
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}