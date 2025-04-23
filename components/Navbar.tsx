"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

export default function NavSection() {
    // State to handle mobile menu toggle
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // State to track screen size
    const [screenSize, setScreenSize] = useState({
        isMobile: false,
        isTablet: false,
        isDesktop: false
    });

    // Effect to handle screen resize and set responsive state
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setScreenSize({
                isMobile: width < 640,
                isTablet: width >= 640 && width < 1024,
                isDesktop: width >= 1024
            });
        };

        // Initial check
        checkScreenSize();

        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-toggle')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    // Prevent body scrolling when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    // Navigation links data
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Categories', path: '/categories' },
        { name: 'Products', path: '/products' },
        { name: 'Dealer Locator', path: '/dealerslist' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    // Social media links data
    // const socialLinks = [
    //     { icon: <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />, path: 'https://facebook.com', bgColor: 'bg-[#1877F2]' },
    //     { icon: <BsMessenger className="w-5 h-5 sm:w-6 sm:h-6" />, path: 'https://messenger.com', bgColor: 'bg-[#0099FF]' },
    //     { icon: <AiFillInstagram className="w-5 h-5 sm:w-6 sm:h-6" />, path: 'https://instagram.com', bgColor: 'bg-gradient-to-r from-[#FCAF45] via-[#E1306C] to-[#5851DB]' },
    //     { icon: <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />, path: 'https://whatsapp.com', bgColor: 'bg-[#25D366]' },
    //     { icon: <FaLocationDot className="w-5 h-5 sm:w-6 sm:h-6" />, path: 'https://maps.google.com', bgColor: 'bg-[#FFC107]' },
    // ];
    const socialLinks = [
        { 
            icon: <Image 
                src="/facebook.png" 
                alt="Facebook"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6" 
            />,
            path: 'https://www.facebook.com/softyhygiene.np',
            bgColor: 'bg-[#feedff]/60' 
        },
        { 
            icon: <Image 
                src="/messenger.png"
                alt="Messenger"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
            />,
            path: 'https://messenger.com',
            bgColor: 'bg-[#feedff]/60'
        },
        { 
            icon: <Image 
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
            />,
            path: 'https://www.instagram.com/softy_hygiene/',
            bgColor: 'bg-gradient-to-r from-[#FCAF45] via-[#E1306C] to-[#5851DB]'
        },
        { 
            icon: <Image 
                src="/whatsapp.png"
                alt="WhatsApp"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
            />,
            path: 'https://api.whatsapp.com/send?phone=%2B9779851073552&context=ARBWBVhZV2RY_YxdeetUKWZjFwrCFZ1dOOi0-rbnrJTgKcGBjPaEy25TpnbsJZI93S8Qg5H0n-7AJxZhS-h1Zf8lbaF6IijOyVydBC8tPUVl4JknHyJ8phWWYFx4C3DpwFnDDgJM7uc2Im99a_fHj8q4PQ&source=FB_Page&app=facebook&entry_point=page_cta',
            bgColor: 'bg-[#feedff]/60'
        },
        { 
            icon: <Image 
                src="/maps.png"
                alt="Location"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
            />,
            path: 'https://maps.app.goo.gl/TMshzNkVYvd3wX8LA',
            bgColor: 'bg-[#feedff]/60'
        },
    ];

    return (
        <div className="sticky top-0 z-50 w-full">
            {/* Main Navigation Bar */}
            <div className="bg-gradient-to-r from-purple-800 to-pink-600 text-white shadow-md">
                <div className="container mx-auto px-3 sm:px-4 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
                        {/* Logo and company description */}
                        <div className="flex items-center space-x-8 ">
                            {/* Company Logo */}
                            <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-18 lg:w-19">
                                <Image
                                    src="/logo.png"
                                    alt="Softy Logo"
                                    width={66}
                                    height={80}
                                    className="object-cover cursor-pointer"
                                />
                            </div>

                            {/* Company certification  */}
                            <div className="hidden md:block">
                                <Image
                                    src="/iso-text.png"
                                    alt="Logo"
                                    width={70}
                                    height={70}
                                    className="h-auto w-24"
                                />
                            </div>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.path}
                                    className={`text-base xl:text-lg font-medium hover:text-gray-200 transition-colors relative group 
                                    ${link.name === 'Home' ? 'border-b-2 border-white pb-1' : ''}`}
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>

                        {/* Social Media Icons - Desktop */}
                        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${social.bgColor} p-1.5 sm:p-2 rounded-full text-white hover:opacity-90 transition-opacity`}
                                    aria-label={`Social media link ${index + 1}`}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            id="menu-toggle"
                            className="lg:hidden text-white p-1.5 sm:p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle navigation menu"
                        >
                            {isMenuOpen ? (
                                <IoMdClose className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                            ) : (
                                <GiHamburgerMenu className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 cursor-pointer" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {!screenSize.isDesktop && (
                <div
                    id="mobile-menu"
                    className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-50
                    ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                    <div
                        className={`fixed right-0 top-0 h-full w-60 sm:w-72 md:w-80 bg-gradient-to-b from-purple-800 to-pink-600 shadow-xl
                        transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        <div className="p-4 sm:p-5">
                            <div className="flex justify-between items-center mb-5 sm:mb-6">
                                <h2 className="text-white text-lg sm:text-xl font-bold">Menu</h2>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white p-1"
                                    aria-label="Close menu"
                                >
                                    <IoMdClose className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
                                </button>
                            </div>

                            {/* Mobile Navigation Links */}
                            <nav className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.path}
                                        className={`text-white py-2 px-3 sm:px-4 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors hover:text-black
                                        ${link.name === 'Home' ? ' bg-opacity-10' : ''}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            {/* Mobile Social Media Icons */}
                            <div className="mt-6 sm:mt-8">
                                <h3 className="text-white text-sm mb-3 sm:mb-4">Connect with us</h3>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {socialLinks.map((social, index) => (
                                        <Link
                                            key={index}
                                            href={social.path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${social.bgColor} p-1.5 sm:p-2 rounded-full text-white hover:opacity-90 transition-opacity`}
                                            aria-label={`Social media link ${index + 1}`}
                                        >
                                            {social.icon}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}