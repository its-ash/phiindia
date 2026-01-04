'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

import Link from 'next/link';
import { products } from './data';

export default function Products() {
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
                            Our Products
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Cutting-edge software solutions designed to drive digital transformation and operational efficiency.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full flex flex-col overflow-hidden group p-0 border-0">
                                    <div className="relative overflow-hidden h-48 w-full">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white shadow-sm">{product.title}</h3>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow bg-white">
                                        <p className="text-gray-600 mb-4 flex-grow">{product.desc}</p>
                                        <ul className="space-y-2 mb-6 text-sm text-gray-500">
                                            {product.features.map((feat, i) => (
                                                <li key={i} className="flex items-center">
                                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href={`/products/${product.slug}`} passHref>
                                            <Button fullWidth className="group" as="div">
                                                View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                    </div>
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
