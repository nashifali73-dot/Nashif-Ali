import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Home', 'Service', 'About', 'Projects', 'Blog', 'Contact'];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#f6f7f8]/80 backdrop-blur-md border-b border-primary/10 transition-all duration-300`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-primary/20">
                        N
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-800">
                        NASHIF<span className="text-primary">.</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`text-sm font-medium transition-colors ${item === 'Home' ? 'font-semibold text-primary' : 'text-slate-600 hover:text-primary'}`}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <button className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary/20 transition-all hidden sm:block">
                        <span className="material-icons text-[20px] align-middle">light_mode</span>
                    </button>
                    <button className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                        Get Started
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-800"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-primary/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-slate-600 hover:text-primary py-2 border-b border-slate-50 transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation;
