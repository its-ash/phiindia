'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                reset();
            } else {
                alert(`Failed to send message: ${result.error || result.message || 'Unknown error'}`);
            }
        } catch (error: any) {
            console.error('Submission error:', error);
            alert(`Error sending message: ${error.message || 'Ensure backend is running.'}`);
        }
    };

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
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-600">We'd love to hear from you. Get in touch with us.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="p-3 bg-gradient-to-br from-pink-100 to-blue-100 rounded-lg mr-4">
                                        <MapPin className="w-6 h-6 text-pink-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Our Location</h3>
                                        <p className="text-gray-600">S 101-102, Mahaveer Nagar, Tonk Road, Jaipur</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="p-3 bg-gradient-to-br from-pink-100 to-blue-100 rounded-lg mr-4">
                                        <Mail className="w-6 h-6 text-pink-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Email Us</h3>
                                        <p className="text-gray-600">info@phiindia.org</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="p-3 bg-gradient-to-br from-pink-100 to-blue-100 rounded-lg mr-4">
                                        <Phone className="w-6 h-6 text-pink-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Phone</h3>
                                        <p className="text-gray-600">+91 9549749426</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Card className="p-8">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                                        <input
                                            {...register('name', { required: 'Name is required' })}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="Your name"
                                        />
                                        {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                                        <input
                                            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="your@email.com"
                                        />
                                        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Message</label>
                                        <textarea
                                            {...register('message', { required: 'Message is required' })}
                                            rows={4}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="How can we help you?"
                                        />
                                        {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
                                    </div>

                                    <Button fullWidth disabled={isSubmitting} type="submit">
                                        {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="ml-2 w-4 h-4" />
                                    </Button>
                                </form>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
