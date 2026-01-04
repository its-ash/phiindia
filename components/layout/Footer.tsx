import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                            PHI INDIA
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Innovating Tomorrow's Technology through digital excellence, engineering solutions, and future-ready platforms.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link></li>
                            <li><Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link></li>
                            <li><Link href="/announcements" className="hover:text-blue-600 transition-colors">News</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/internship" className="hover:text-blue-600 transition-colors">Careers / Internship</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact Support</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li className="flex items-start space-x-3">
                                <MapPin size={16} className="mt-1 text-pink-500" />
                                <span>S 101-102, Mahaveer Nagar, Tonk Road, Jaipur</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={16} className="text-pink-500" />
                                <a href="mailto:info@phiindia.org" className="hover:text-blue-600">info@phiindia.org</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={16} className="text-pink-500" />
                                <span>+91 9549749426</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} PHI INDIA. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
