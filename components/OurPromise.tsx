import React from 'react'
import Image from 'next/image';

export default function OurPromise() {
  const products = [
    {
      title: 'Premium Sanitary Napkins',
      bgColor: 'bg-pink-50',
      imageUrl: '/sanitary-napkins.png'
    },
    {
      title: 'Ultra-Soft Baby Diapers',
      bgColor: 'bg-blue-50',
      imageUrl: '/baby-diapers.png'
    },
    {
      title: 'Gentle Wet Wipes',
      bgColor: 'bg-green-50',
      imageUrl: '/wet-wipes.png'
    },
    {
      title: 'Soft Tissue Papers',
      bgColor: 'bg-yellow-50',
      imageUrl: '/tissue-papers.png'
    }
  ];

  const promises = [
    'Dermatologically tested for sensitive skin',
    'Hypoallergenic materials for maximum safety',
    'Continuous innovation for better products',
    'Affordable quality for everyone'
  ];

  return (
    <div className="py-16 px-4">
      <div className="w-11/12 mx-auto bg-pink-50 rounded-lg shadow-lg p-8">
        {/* Header Section */}
        <div className="max-w-3xl">
          <h3 className="text-purple-600 font-medium mb-2">Our Promise</h3>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Committed to Your Health & Comfort
          </h2>
          <p className="text-gray-600 mb-8">
            At HYGIENE PVT.LTD., we understand the importance of reliable hygiene products in 
            your daily life. Our commitment goes beyond manufacturing – we are dedicated to 
            enhancing your quality of life through products that provide comfort, safety, and peace of mind.
          </p>

          {/* Promise List */}
          <ul className="space-y-3">
            {promises.map((promise, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                </div>
                <span className="text-gray-600">{promise}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${product.bgColor} rounded-lg p-6 text-center transition-transform hover:scale-105`}
            >
              <div className="aspect-square relative mb-4">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <h3 className="font-medium text-gray-900">{product.title}</h3>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}
