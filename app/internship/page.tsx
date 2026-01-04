'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

type InternshipFormData = {
    name: string;
    email: string;
    phone: string;
    education: string;
    interest: string;
};

export default function Internship() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<InternshipFormData>();

    const onSubmit = async (data: InternshipFormData) => {
        try {
            const response = await fetch('/api/internship', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                reset();
            } else {
                alert(`Failed to submit application: ${result.error || result.message || 'Unknown error'}`);
            }
        } catch (error: any) {
            console.error('Submission error:', error);
            alert(`Error submitting application: ${error.message || 'Ensure backend is running.'}`);
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
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600 mb-6">
                            Internship Program
                        </h1>
                        <p className="text-xl text-gray-600">Join us to shape the future of technology.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto"
                    >
                        <Card className="p-8">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                                        <input
                                            {...register('name', { required: 'Name is required' })}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="Type your name"
                                        />
                                        {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                                        <input
                                            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                        <input
                                            {...register('phone', { required: 'Phone is required' })}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="+91 98765 43210"
                                        />
                                        {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Education</label>
                                        <input
                                            {...register('education', { required: 'Education is required' })}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="Degree / University"
                                        />
                                        {errors.education && <span className="text-red-500 text-xs">{errors.education.message}</span>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Area of Interest</label>
                                    <select
                                        {...register('interest', { required: 'Please select an area' })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                                    >
                                        <option value="">Select an area...</option>
                                        <option value="Generative AI">Generative AI</option>
                                        <option value="Agentic AI">Agentic AI</option>
                                        <option value="Industrial IoT">Industrial IoT</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                        <option value="Blockchain">Blockchain</option>
                                        <option value="Antenna and Microwave Engineering">Antenna and Microwave Engineering</option>
                                        <option value="Circuit Designing">Circuit Designing</option>
                                        <option value="Frontend Development">Frontend Development</option>
                                        <option value="Backend Development">Backend Development</option>
                                        <option value="Data Science / AI">Data Science / AI</option>
                                        <option value="Cloud Engineering">Cloud Engineering</option>
                                    </select>
                                    {errors.interest && <span className="text-red-500 text-xs">{errors.interest.message}</span>}
                                </div>

                                <Button fullWidth disabled={isSubmitting} type="submit" className="mt-4">
                                    {isSubmitting ? 'Submitting...' : 'Submit Application'} <Send className="ml-2 w-4 h-4" />
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
