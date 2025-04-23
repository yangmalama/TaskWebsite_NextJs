import Banner from '@/components/Banner'
import DealersList from '@/components/DealersList'
import React from 'react'


export default function Dealer() {
    return (
        <div className="min-h-screen">
            {/* Banner Image Section */}
            <div>
                <Banner />
            </div>

            <div className='w-11/12 mx-auto py-10 md:py-15'>
                {/* Title */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mb-3">Find Our Nearest Dealers</h1>
                    <p className="text-gray-600 text-lg mt-1">Find our nearest dealer locations and get in touch with them for any queries</p>
                </div>

                {/* Dealers Listing Component */}
                <DealersList />
            </div>
        </div>
    )
}