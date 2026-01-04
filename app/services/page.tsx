'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Database, Shield, Brain, BarChart, Bot, Settings } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';

const services = [
    { icon: Code, title: "Custom Software", desc: "Tailored software solutions for your unique business needs." },
    { icon: Cloud, title: "Cloud Engineering", desc: "Migration, optimization, and management of cloud infrastructure." },
    { icon: Database, title: "Data Engineering", desc: "Building robust data pipelines and storage architectures." },
    { icon: Shield, title: "Cybersecurity", desc: "Protecting your digital assets with advanced security measures." },
    { icon: Brain, title: "AI & ML", desc: "Implementing intelligent algorithms to automate and innovate." },
    { icon: BarChart, title: "Analytics", desc: "Transforming raw data into actionable business intelligence." },
    { icon: Bot, title: "RPA", desc: "Robotic Process Automation for streamlined workflows." },
    { icon: Settings, title: "IIoT", desc: "Industrial Internet of Things for connected manufacturing." },
];

export default function Services() {
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
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive technology services to accelerate your digital journey.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card className="h-full flex flex-col items-center text-center p-6 hover:shadow-xl transition-all duration-300 group">
                                    <div className="mb-6 p-4 bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                                    <p className="text-gray-600 text-sm">{service.desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
