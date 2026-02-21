import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Shield, Heart, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src="/logo.svg" alt="Future Tech & solution" className="h-10 w-auto object-contain" />
                            <span className="text-2xl font-black tracking-tight">Future Tech <span className="text-cyan-500">& solution</span></span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Pioneering NEXT-GEN security, enterprise networking, and AI-driven IT solutions. The future of technology, delivered today.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-blue-500 inline-block pb-2">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Services', 'About Us', 'Contact', 'Admin Portal'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-blue-500 inline-block pb-2">Our Services</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'CCTV Installation', path: '/services/cctv-installation' },
                                { name: 'Computer Repair', path: '/services/computer-repair' },
                                { name: 'Networking', path: '/services/it-networking' },
                                { name: 'Security Systems', path: '/services/security-systems' }
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link to={service.path} className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-blue-500 inline-block pb-2">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                                <span> Chaudhary Complex Main Road,<br />Jansat, Muzaffarnagar 251314</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone className="text-blue-500 flex-shrink-0" size={20} />
                                <span>+91 8430092577, +91 8273970956</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail className="text-blue-500 flex-shrink-0" size={20} />
                                <div className="flex flex-col">
                                    <span>sangamkumarmzn@gmail.com</span>
                                    <span>futuretechsolution77@gmail.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p
                        onDoubleClick={() => window.location.href = '/admin'}
                        className="cursor-default select-none group relative"
                    >
                        © {new Date().getFullYear()} Future Tech & solution. All rights reserved.
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none delay-1000 hidden md:block">
                            Double click for Admin
                        </span>
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
                        <a href="https://www.instagram.com/futuretechsolution2026?igsh=MTlobmJ0eDk1Mzd0cA==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                    </div>
                </div>

                <div className="text-center mt-8 text-gray-600 text-xs flex items-center justify-center space-x-1">
                    <span>Made with</span>
                    <Heart size={12} className="text-red-500 fill-current" />
                    <span>for Excellence</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
