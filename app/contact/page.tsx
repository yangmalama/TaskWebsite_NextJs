import Banner from "@/components/Banner";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <div>
      <Banner />

      <div className="w-11/12 mx-auto py-15">
      {/* heading section */}
      <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r  from-purple-600 to-pink-500 text-transparent bg-clip-text mb-4">
            Get in touch with us
          </h1>
          <p className="text-gray-600 text-lg">
            We are here to help you with any questions or concerns you may have.
          </p>
        </div>

        {/* Contact Header */}
        <div className="bg-pink-50 rounded-lg shadow-md p-6 ">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-12 ">
              <h3 className="text-purple-600 font-medium mb-2">Contact Us</h3>
              <h2 className="text-3xl font-bold mb-4">
                Let us know how{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  we can help
                </span>
              </h2>

              <p className="text-gray-600 max-w-4xl">
                SOFTY HYGIENE PVT.LTD. is one of the largest private level
                manufacturing of disposable wet wipes, Baby wipes ,Baby Diaper,
                Sanitary Napkins and Tissue papers.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-100 rounded-full">
                  <IoLocationOutline className="w-6 h-6 text-purple-600" />
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Our office</h4>
                  <p className="text-gray-600">
                    Maitighar, Kathmandu, Nepal (NP).
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-100 rounded-full">
                  <MdOutlineEmail className="w-6 h-6 text-purple-600" />
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Email</h4>
                  <p className="text-gray-600">softy.corporate@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-100 rounded-full">
                  <FiPhone className="w-6 h-6 text-purple-600" />
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Phone</h4>
                  <p className="text-gray-600">+01-5191390</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5361450808287!2d85.32200731501726!3d27.694795982799273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a7c6cd102b%3A0x78f652cf3a5b220f!2sMaitighar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1650632774072!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
