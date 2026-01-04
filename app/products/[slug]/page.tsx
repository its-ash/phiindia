'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, CheckCircle, Shield, Zap, Target } from 'lucide-react';
import Link from 'next/link';
import { products } from '../data';
import { motion } from 'framer-motion';

export default function ProductBrochure({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                {/* Hero Section */}
                <div className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
                    <div className="container mx-auto px-4 relative z-10 text-white">
                        <Link href="/products">
                            <Button variant="outline" className="mb-8 text-white border-white hover:bg-white/20" as="div">
                                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Products
                            </Button>
                        </Link>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold mb-4"
                        >
                            {product.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-gray-200 max-w-2xl"
                        >
                            {product.desc}
                        </motion.p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <section>
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {product.details.longDescription}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Benefits</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {product.details.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Technical Specifications</h2>
                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                    <dl className="space-y-4">
                                        {Object.entries(product.details.technicalSpecs).map(([key, value], index) => (
                                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                                                <dt className="font-semibold text-gray-900">{key}</dt>
                                                <dd className="sm:col-span-2 text-gray-600">{value}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center">
                                    <Target className="w-5 h-5 mr-2" /> Target Audience
                                </h3>
                                <ul className="space-y-3">
                                    {product.details.targetAudience.map((audience, index) => (
                                        <li key={index} className="flex items-center text-blue-800">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                                            {audience}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl text-white text-center">
                                <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                                <p className="mb-6 text-gray-300">
                                    Contact our sales team to schedule a demo or discuss your specific requirements.
                                </p>
                                <Link href="/contact">
                                    <Button fullWidth variant="primary" className="bg-white text-gray-900 hover:bg-gray-100" as="div">
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
