'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
// Moving cn to a separate file would be better, but for now I'll duplicate or import if I can.
// Actually, let's create a utils file if I can, but I'll validly just inline cn or import it if I exported it.
// I exported it in Button/Card. Let's act clean and create lib/utils.ts next.
// For now, I will assume I can just use template literal or inline code for cn if imports fail, but I will fix this shortly.

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Announcements', path: '/announcements' },
    { name: 'Internship', path: '/internship' },
    { name: 'Contact', path: '/contact' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [showAnnouncement, setShowAnnouncement] = useState(true);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-md shadow-md' : 'bg-transparent'
                }`}
        >
            {showAnnouncement && (
                <div className="bg-gradient-to-r from-blue-600 to-pink-600 text-white text-sm py-2 px-4 relative">
                    <div className="container mx-auto flex items-center justify-center text-center pr-8">
                        <span className="mr-2">🚀 Internship applications are now open!</span>
                        <Link href="/internship" className="underline font-bold hover:text-blue-100 transition-colors">
                            Apply Now
                        </Link>
                    </div>
                    <button
                        onClick={() => setShowAnnouncement(false)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <X size={16} />
                    </button>
                </div>
            )}
            <div className={`transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <img src="/phiindialogo.svg" alt="PHI INDIA Logo" className="h-10 w-auto" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">

                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-md'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl p-4 flex flex-col space-y-2 origin-top animate-in slide-in-from-top-5">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-4 py-3 rounded-xl text-center font-medium transition-colors ${isActive
                                        ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </header>
    );
}
