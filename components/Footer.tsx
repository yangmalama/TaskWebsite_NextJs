import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6"
import { FaLocationDot } from "react-icons/fa6"

// Interface for Quick Links and Company Links
interface NavLink {
    name: string;
    path: string;
}

// Interface for Social Media Links
interface SocialLink {
    icon: React.ReactNode;
    path: string;
}

export default function Footer() {
    // Quick Links Data
    const quickLinks: NavLink[] = [
        { name: 'Home', path: '/' },
        { name: 'Categories', path: '/categories' },
        { name: 'Products', path: '/products' },
    ];

    // Company Links Data
    const companyLinks: NavLink[] = [
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Dealer Locator', path: '/dealer-locator' },
    ];

    // Social Media Links Data
    const socialLinks: SocialLink[] = [
        { icon: <FaFacebookF className="w-4 h-4" />, path: 'https://facebook.com' },
        { icon: <FaXTwitter className="w-4 h-4" />, path: 'https://twitter.com' },
        { icon: <FaInstagram className="w-4 h-4" />, path: 'https://instagram.com' },
        { icon: <FaWhatsapp className="w-4 h-4" />, path: 'https://whatsapp.com' },
        { icon: <FaLocationDot className="w-4 h-4" />, path: 'https://maps.google.com' },
    ];

    return (
        <footer className="bg-gradient-to-r from-purple-700 via-pink-500 to-purple-700 text-white py-8 sm:py-12 md:py-16">
            <div className="w-[90%] sm:w-[95%] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {/* Company Description */}
                    <div className="mb-8 sm:mb-0">
                        <div className="flex justify-center sm:justify-start mb-4 sm:mb-6">
                            <Image
                                src="/logo.png"
                                alt="Softy Logo"
                                width={80}
                                height={80}
                                className="rounded-full bg-purple-700 p-2"
                            />
                        </div>
                        <p className="text-center sm:text-left text-sm leading-relaxed">
                            Your Trusted Partner in Personal Hygiene. You deserve a hygiene partner that works as hard as you do. Softy— quality you can trust, affordability you deserve.
                        </p>
                        {/* Social Links */}
                        <div className="flex justify-center sm:justify-start gap-3 mt-5">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.path}
                                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-8 sm:mb-0">
                        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-center sm:text-left">Quick Links</h3>
                        <ul className="space-y-2 text-center sm:text-left">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.path} className="hover:text-gray-200 flex items-center gap-2 justify-center sm:justify-start">
                                        {link.name} <span className="text-xs">↗</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="mb-8 sm:mb-0">
                        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-center sm:text-left">Company</h3>
                        <ul className="space-y-2 text-center sm:text-left">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.path} className="hover:text-gray-200 flex items-center gap-2 justify-center sm:justify-start">
                                        {link.name} <span className="text-xs">↗</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Description */}
                    <div>
                        <p className="text-sm leading-relaxed text-center sm:text-left">
                            &quot;As action speaks louder than words.&quot; We SOFTY HYGIENE PVT.LTD. is one of the largest private level manufacturing company of disposable wet wipes, Baby wipes, Baby Diaper, Sanitary Napkins and Tissue paper. We ensure feminine care and baby care for their safety and comfort.
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 md:mt-12 pt-6 border-t border-white/20">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xs sm:text-sm text-center sm:text-left">© 2024 Softy Hygienic. All rights reserved.</p>
                        <p className="text-xs sm:text-sm text-center sm:text-right">
                            Designed and Developed by{' '}
                            <Link href="https://zyluxitsolution.com" className="hover:text-gray-200 underline" target="_blank" rel="noopener noreferrer">
                                Zylux IT Solution
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}