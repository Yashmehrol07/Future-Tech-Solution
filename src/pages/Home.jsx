import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Laptop, Network, Camera, ChevronRight, Star, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden bg-slate-50">
                {/* Animated Background Blobs */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-blue-400/20 rounded-full blur-[80px] animate-blob"></div>
                    <div className="absolute bottom-[20%] right-[10%] w-[25rem] h-[25rem] bg-indigo-400/20 rounded-full blur-[80px] animate-blob animation-delay-2000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-6 cursor-default"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                                <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">Future-Ready Technology</span>
                            </motion.div>

                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
                                SMART <span className="text-blue-600">SECURITY</span> <br /> SOLUTIONS.
                            </h1>

                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
                                Professional CCTV systems, enterprise networking, and expert computer repairs. We empower your growth with cutting-edge technology.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <Link
                                    to="/contact"
                                    className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-blue-600/30 hover:bg-blue-700 transition-all flex items-center justify-center transform hover:-translate-y-1 hover:scale-[1.02]"
                                >
                                    Work With Us <ArrowRight className="ml-2" />
                                </Link>
                                <Link
                                    to="/services"
                                    className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center shadow-lg shadow-slate-200/50"
                                >
                                    Our Services
                                </Link>
                            </div>

                            <div className="mt-12 flex items-center space-x-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 overflow-hidden shadow-sm">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <div className="flex text-yellow-500 mb-0.5">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                                    </div>
                                    <p className="text-slate-500 font-bold">Trusted by 500+ Local Businesses</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/40 transform hover:rotate-1 transition-transform duration-700">
                                <img
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Technology"
                                    className="w-full h-full object-cover aspect-[4/5] md:aspect-square"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/20">
                                    <p className="text-white text-lg font-bold leading-tight uppercase tracking-widest text-center mb-1">State-of-the-Art</p>
                                    <p className="text-blue-100 text-xs font-semibold uppercase tracking-widest text-center">Equipment & Security Grid</p>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-600 rounded-full blur-3xl opacity-40"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-40"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Services Grid */}
            <section className="py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div>
                            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Superior Services</span>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">HIGH-PERFORMANCE <br /> TECHNOLOGY.</h2>
                        </div>
                        <p className="text-slate-500 max-w-sm font-medium leading-relaxed">
                            We provide industry-leading IT infrastructure and security engineering for home, office, and industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'CCTV SYSTEMS', icon: Camera, desc: 'Ultra HD surveillance with AI facial recognition and 24/7 cloud monitoring.', color: 'blue' },
                            { title: 'IT REPAIR', icon: Laptop, desc: 'Advanced chip-level repairs for laptops, workstations, and high-end gear.', color: 'indigo' },
                            { title: 'NETWORKING', icon: Network, desc: 'Enterprise-grade fiber-optic setups, secure VPNs, and WiFi-6 solutions.', color: 'cyan' },
                            { title: 'SECURITY', icon: Shield, desc: 'Integrated biometric access, alarm grids, and perimeter protection.', color: 'slate' },
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                                <div className="relative bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:translate-y-[-8px] transition-all duration-300 h-full flex flex-col">
                                    <div className="w-16 h-16 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                        <s.icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight uppercase">{s.title}</h3>
                                    <p className="text-slate-500 font-medium mb-8 flex-grow leading-relaxed">{s.desc}</p>
                                    <Link to="/services" className="inline-flex items-center text-blue-600 font-bold text-sm tracking-widest uppercase hover:gap-2 transition-all">
                                        Explore <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Enhanced */}
            <section className="py-32 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/5 blur-[120px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-sm mb-6 block">Our Edge</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter mb-10">THE GOLD STANDARD <br /> IN LOCAL IT.</h2>
                            <p className="text-slate-400 text-lg font-medium mb-12 max-w-lg leading-relaxed">
                                We don't just fix problems; we engineer long-term solutions that prevent them from happening again.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    '10+ Years Success', 'Certified Engineers',
                                    'Premium Hardware', '99.9% Client Retention'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-3 group">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                        <span className="text-slate-300 font-bold tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative z-10 p-1 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[2.5rem] shadow-2xl shadow-blue-500/20"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    className="rounded-[2.4rem] w-full"
                                    alt="Expert Team"
                                />
                            </motion.div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
