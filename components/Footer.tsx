import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

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
    <footer className="bg-gradient-to-r from-purple-700 via-pink-500 to-purple-700 text-white py-16">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Description */}
        <div className="col-span-1">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="Softy Logo"
              width={80}
              height={80}
              className="rounded-full bg-purple-700 p-2"
            />
          </div>
          <p className="text-center md:text-left text-sm leading-relaxed">
            Your Trusted Partner in Personal Hygiene.You deserve a hygiene partner that works as hard as you do. Softy— quality you can trust, affordability you deserve.
          </p>
          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.path}
                className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className="hover:text-gray-200 flex items-center gap-2">
                  {link.name} ↗
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className="hover:text-gray-200 flex items-center gap-2">
                  {link.name} ↗
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Description */}
        <div className="col-span-1">
          <p className="text-sm leading-relaxed">
          &quot;As action speaks louder than words.&quot;We SOFTY HYGIENE PVT.LTD. is one of the largest private level manufacturing company of disposable wet wipes, Baby wipes ,Baby Diaper, Sanitary Napkins and Tissue paper. We ensure feminine care and baby care for their safety and comfort. So, we specially manufacture our product in women and Baby base.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-11/12 mx-auto mt-12 pt-8 border-t border-white/20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2024 softy hygienic. All rights reserved.</p>
          <p className="text-sm">
            Designed and Developed by{' '}
            <Link href="https://zyluxitsolution.com" className="hover:text-gray-200">
              Zylux IT Solution
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}