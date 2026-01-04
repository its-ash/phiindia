'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const announcements = [
    {
        id: 0,
        date: "January 04, 2026",
        title: "Internship Applications Open",
        summary: "We are excited to invite passionate students to apply for our internship program. Gain hands-on experience in AI, ML, and Cyber Security.",
        category: "Hiring",
        color: "bg-green-100 text-green-700 border-green-200",
        link: "/internship"
    },
    {
        id: 1,
        date: "March 15, 2024",
        title: "New Technology Partnership",
        summary: "Reflecting our commitment to innovation, we have formed a strategic alliance with a leading AI research firm to enhance our analytics capabilities.",
        category: "Partnership",
        color: "bg-blue-100 text-blue-700 border-blue-200",
        link: "/pdfs/Partnership.pdf"
    },
    {
        id: 2,
        date: "March 10, 2024",
        title: "Upcoming Tech Conference",
        summary: "Join us at the International Tech Summit where our CEO will be speaking about the future of Digital Engineering and IoT.",
        category: "Event",
        color: "bg-purple-100 text-purple-700 border-purple-200",
        link: "/pdfs/Event.pdf"
    },
    {
        id: 3,
        date: "March 05, 2024",
        title: "Product Launch: AI Analytics Suite",
        summary: "We are proud to announce the launch of our new AI Analytics Suite, designed to provide deep insights for smarter decision making.",
        category: "Product",
        color: "bg-pink-100 text-pink-700 border-pink-200",
        link: "/pdfs/AI_Suite.pdf"
    }
];

export default function Announcements() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24 pb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600 mb-6">
                            Announcements
                        </h1>
                        <p className="text-xl text-gray-600">Latest news and updates from PHI INDIA.</p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {announcements.map((item, index) => {
                            const isInternal = !item.link.endsWith('.pdf') && item.link.startsWith('/');
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all p-6">
                                        <div className="md:w-1/4 flex flex-col items-start space-y-3 border-r border-gray-100 pr-4">
                                            <div className="flex items-center text-gray-500 text-sm font-medium">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {item.date}
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${item.color} flex items-center`}>
                                                <Tag className="w-3 h-3 mr-1" />
                                                {item.category}
                                            </span>
                                        </div>
                                        <div className="md:w-3/4 flex flex-col justify-between">
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h2>
                                                <p className="text-gray-600 leading-relaxed mb-4">{item.summary}</p>
                                            </div>
                                            <div className="flex justify-end">
                                                {isInternal ? (
                                                    <Link href={item.link}>
                                                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                                            Apply Now <ArrowRight className="ml-1 w-4 h-4" />
                                                        </Button>
                                                    </Link>
                                                ) : (
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                                            Read More <ArrowRight className="ml-1 w-4 h-4" />
                                                        </Button>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
