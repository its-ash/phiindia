'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ArrowRight, Cpu, Globe, Rocket } from 'lucide-react';
import Link from 'next/link';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import HeroScene from '@/components/3d/HeroScene';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <HeroScene />
          <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600 mb-6"
            >
              Innovating Tomorrow's Technology
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-10"
            >
              Empowering the future with digital innovation, engineering excellence, and cutting-edge solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/services">
                <Button size="lg" className="mr-4" as="div">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" as="div">Learn More</Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper rounded-2xl shadow-2xl h-[400px] w-full"
            >
              {[
                {
                  title: "Cyber Security and Digital Innovation",
                  desc: "Transforming businesses with next-gen digital solutions.",
                  img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
                },
                {
                  title: "Engineering Excellence",
                  desc: "Building robust infrastructure for the modern world.",
                  img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
                },
                {
                  title: "Future Technology",
                  desc: "Pioneering AI and IoT developments.",
                  img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80",
                },
              ].map((slide, index) => (
                <SwiperSlide key={index} className="relative">
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <img src={slide.img} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-xl md:text-2xl">{slide.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Globe, title: "Digital Engineering", desc: "Crafting digital experiences that drive growth and engagement." },
                { icon: Rocket, title: "Innovation Lab", desc: "Researching and developing the technologies of tomorrow." },
                { icon: Cpu, title: "Expert Team", desc: "A dedicated team of professionals delivering excellence." },
              ].map((feature, i) => (
                <Card key={i} className="flex flex-col items-center text-center p-8">
                  <div className="mb-6 p-4 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full">
                    <feature.icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
