'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Users, Heart } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import FloatingCubes from '@/components/3d/FloatingCubes';
import { Card } from '@/components/ui/Card';

export default function About() {
    const values = [
        { icon: Target, name: "Innovation at Core", color: "text-blue-500", desc: "Pushing boundaries to create new possibilities." },
        { icon: Award, name: "Commitment to Excellence", color: "text-purple-500", desc: "Delivering the highest quality in everything we do." },
        { icon: Users, name: "Integrity and Transparency", color: "text-green-500", desc: "Building trust through honest and transparent actions." },
        { icon: Heart, name: "Customer-Centric Approach", color: "text-pink-500", desc: "Focusing on customer success and satisfaction." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24 pb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600 mb-6">
                            About Us
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            At PHI INDIA, we are dedicated to driving innovation, excellence, and impact across industries. As a forward-thinking organization, we specialize in delivering cutting-edge solutions that blend advanced technology with visionary strategies to empower businesses and individuals alike. Join us on this journey of transformation and growth—together, we can achieve extraordinary outcomes.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
                            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white">
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Founded in 2020 in Jaipur, PHI INDIA was established with a bold vision to lead the future of innovation and transformation in Artificial Intelligence (AI), Machine Learning (ML), Data Science, Internet of Things (IoT), and Digital Transformation. From a passion project to a dynamic organization, our journey has been fueled by relentless innovation, adaptability, and a drive to solve real-world challenges.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Guided by a commitment to excellence, we have helped our clients reimagine their operations, enhance efficiency, and achieve remarkable growth. Looking ahead, PHI INDIA remains dedicated to pushing boundaries, pioneering new solutions, and making an enduring impact across industries and communities.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <FloatingCubes />
                        </motion.div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((val, index) => (
                                <Card key={index} className="flex flex-col items-center text-center p-6 h-full">
                                    <val.icon className={`h-12 w-12 mb-4 ${val.color}`} />
                                    <h3 className="text-xl font-bold mb-2">{val.name}</h3>
                                    <p className="text-sm text-gray-600">{val.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
