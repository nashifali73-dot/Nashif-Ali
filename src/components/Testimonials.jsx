import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Jenkins',
            title: 'CMO, TechFlow',
            quote: "Nashif's strategic approach completely transformed our lead generation funnel. We saw a 300% increase in qualified leads within just 3 months.",
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Michael Chen',
            title: 'Founder, EcoBox',
            quote: "The best digital marketing investment we've ever made. His team is professional, data-driven, and incredibly creative.",
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Elena Rodriguez',
            title: 'Director, ArtSpace',
            quote: "Exceptional results and communication. He truly understands how to build a brand presence in a crowded market.",
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">THE IMPACT OF MY WORK</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                        Client <span className="text-slate-400">Testimonials</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Real feedback from business owners and marketing leaders who have seen measurable growth.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        {/* Desktop Grid View - simple for responsive, but prompt asked for 3 in row usually implies carousel or grid */}
                        {/* I'll use a responsive grid that stacks on mobile, but on desktop shows 3 cards, with middle elevated */}

                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className={`relative p-8 bg-white rounded-2xl shadow-sm border border-slate-100 flex-1 min-w-[300px] 
                   ${i === 1 ? 'md:-mt-8 md:shadow-xl md:border-blue-100 relative z-10' : ''}
                 `}
                            >
                                <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />

                                <div className="flex items-center gap-4 mb-6">
                                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-slate-200" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">{t.name}</h4>
                                        <p className="text-sm text-slate-500">{t.title}</p>
                                    </div>
                                </div>

                                <p className="text-slate-600 italic leading-relaxed">"{t.quote}"</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Navigation Arrows for Mobile (or general interaction) */}
                    <div className="flex justify-center gap-4 mt-12">
                        <button onClick={prev} className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm">
                            <ChevronLeft className="w-5 h-5 text-slate-600" />
                        </button>
                        <button onClick={next} className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5 text-slate-600" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
