import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Clock, Shield, Star, Rocket } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Split Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-4 block">Our Story</span>
                            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-none tracking-tighter mb-8">
                                ENGINEERING <br /> TRUST.
                            </h1>
                            <p className="text-xl text-slate-500 font-bold leading-relaxed mb-10 max-w-lg">
                                Since 2013, Future Tech & Solution has been at the forefront of security and IT innovation in Mumbai and beyond.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-xl">
                                    <Shield size={32} />
                                </div>
                                <div>
                                    <p className="text-slate-900 font-black text-xl">High-Security Grids</p>
                                    <p className="text-slate-500 font-bold text-sm tracking-wide">ISO Certified Standards</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border-8 border-slate-50">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Our Team"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-[2rem] border border-blue-100 shadow-2xl">
                                <div className="text-4xl font-black text-blue-600">10+</div>
                                <div className="text-slate-900 font-black tracking-tighter uppercase text-sm">Years of Success</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
                    <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">THE BEDROCK OF OUR SERVICE</h2>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: 'INNOVATION', icon: Rocket, desc: 'We constantly integrate the latest hardware and AI algorithms into our solutions.', color: 'blue' },
                        { title: 'INTEGRITY', icon: Target, iconColor: 'indigo', desc: 'Transparent pricing and genuine hardware are non-negotiable standards for us.', color: 'indigo' },
                        { title: 'EXCELLENCE', icon: Star, iconColor: 'yellow', desc: 'We aim for zero-fail deployments and long-term maintenance success.', color: 'cyan' },
                    ].map((val, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-white p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-10">
                                <val.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight uppercase">{val.title}</h3>
                            <p className="text-slate-500 font-bold leading-relaxed">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stats - High Impact */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-blue-600/5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { label: 'Active Grids', value: '500+', icon: Shield },
                            { label: 'Total Clients', value: '1.2K', icon: Users },
                            { label: 'Happy Assets', value: '5K+', icon: Award },
                            { label: 'City Coverage', value: '100%', icon: Globe }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-5xl font-black text-white mb-4 tracking-tighter">{stat.value}</div>
                                <div className="text-blue-500 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team/Expertise Statement */}
            <section className="py-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-widest leading-none">A Team of Certified Specialists</h2>
                    <p className="text-xl text-slate-500 font-bold leading-relaxed mb-12 italic">
                        "Technology is only as good as the people who install and maintain it. Our engineers are trained to handle high-pressure deployments and critical system restores."
                    </p>
                    <div className="flex justify-center space-x-2">
                        <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                        <div className="w-4 h-1 bg-slate-200 rounded-full"></div>
                        <div className="w-4 h-1 bg-slate-200 rounded-full"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
