import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, ChevronRight, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                ? 'py-3 bg-white/80 backdrop-blur-xl shadow-lg border-b border-blue-100/50'
                : 'py-5 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center relative group"
                        onDoubleClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/admin';
                        }}
                    >
                        <img src="/logo.svg" alt="Future Tech & solution" className="h-16 w-auto object-contain cursor-pointer" />
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none delay-1000 hidden md:block whitespace-nowrap">
                            Double click Admin
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${isActive(link.path)
                                    ? 'text-blue-600'
                                    : 'text-slate-600 hover:text-blue-600'
                                    }`}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {isActive(link.path) && (
                                    <motion.span
                                        layoutId="nav-active"
                                        className="absolute inset-0 bg-blue-50 rounded-full z-0"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-blue-500/30 group"
                        >
                            <span>Get a Quote</span>
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-xl transition-colors ${scrolled ? 'text-slate-900 bg-slate-100' : 'text-slate-900 bg-white/50 backdrop-blur-sm'
                                }`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-2xl md:hidden overflow-hidden"
                    >
                        <div className="px-6 py-8 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`block text-lg font-bold p-3 rounded-2xl transition-all ${isActive(link.path)
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                        : 'text-slate-600 hover:bg-slate-50'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    to="/contact"
                                    className="flex items-center justify-center w-full bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-slate-900/10"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get Quote Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
