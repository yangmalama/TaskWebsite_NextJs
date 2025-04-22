import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className="relative w-full h-72 ">
            <Image
                src="/newbanner.png"
                alt="Banner"
                layout="fill"
                objectFit="cover"
                priority
            />
        </div>
    )
}