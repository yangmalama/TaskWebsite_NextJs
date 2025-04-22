import React from "react";
import Image from "next/image";

export default function HearFrom() {
  return (
    <div className="w-11/12 mx-auto mt-8">
      <div className=" p-8 rounded-lg shadow-md text-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-pink-100 to-blue-100 rounded-lg">
          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src="/HearFromUs.jpg"
              alt="Chairperson"
              width={400}
              height={500}
              className="rounded-lg shadow-md object-cover  hover:scale-110 transition-all duration-500"
            />
          </div>
          {/* Information Section */}
          <div className="bg-pink-50 p-8 shadow-md text-gray-800 rounded-r-lg text-sm w-full">
          <div className="flex items-center gap-2">
              <span className="text-pink-400 text-7xl font-serif leading-none">"</span>
              <h2 className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent text-xl font-medium tracking-wide">
                HEAR FROM OUR CHAIRPERSON
              </h2>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              At Softy Hygiene, our purpose goes beyond producing hygiene
              products—we strive to enrich lives through care, comfort, and
              trust. For over a decade, our journey has been driven by one
              simple vision: to make hygiene a reliable companion in every
              individual’s life. Hygiene, to us, is not just about cleanliness;
              it is about dignity, well-being, and empowerment. From supporting
              women during their most sensitive days to caring for the needs of
              infants, we are proud to deliver products that meet real needs
              with compassion and quality.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              As we continue to grow, we remain deeply grateful for the faith
              placed in us by our customers, partners, and communities. Their
              support inspires us to innovate responsibly and act with
              integrity. Our commitment extends beyond business—we actively
              invest in improving hygiene awareness and contributing to
              healthier, more resilient societies.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Looking forward, Softy is preparing to explore new
              frontiers—expanding our product offerings while staying rooted in
              what matters most: care, reliability, and a human touch. We are
              excited about the future, and we invite you to be a part of our
              journey.
            </p>
            <div className="mt-6 flex items-center">
              <div className="bg-gradient-to-br from-pink-500 to-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                YG
              </div>
              <div className="ml-4">
                <p className="font-bold text-gray-800">Yadav Ghimire</p>
                <p className="text-gray-600 text-sm">Chairman & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}