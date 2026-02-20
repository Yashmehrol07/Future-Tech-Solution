import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Laptop, Network, Shield, ArrowRight, CheckCircle, ShieldCheck, Clock, Wrench } from 'lucide-react';

const serviceData = {
    'cctv-installation': {
        title: 'CCTV INSTALLATION & SURVEILLANCE',
        seoTitle: 'CCTV Camera Installation in Muzaffarnagar | Future Tech',
        description: 'Secure your home and business with state-of-the-art 4K Ultra HD cameras, AI-driven motion detection, and remote cloud viewing.',
        longDescription: 'At Future Tech & solution, we provide end-to-end CCTV installation services across Muzaffarnagar and surrounding regions. Whether you need a single camera for your home or a comprehensive multi-site surveillance network for your business, our expert technicians deploy the latest technology from top brands like Hikvision, CP Plus, and Dahua to ensure complete peace of mind.',
        icon: Camera,
        color: 'blue',
        image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=1600&q=80',
        benefits: [
            '24/7 Crystal Clear Night Vision',
            'Remote Viewing on Smartphone',
            'AI-Powered Intrusion Alerts',
            'Tamper-Proof Cloud Storage',
            'Expert Cable Routing & Setup',
            '1 Year Warranty on Hardware'
        ]
    },
    'computer-repair': {
        title: 'EXPERT COMPUTER & LAPTOP REPAIR',
        seoTitle: 'Computer & Laptop Repair in Muzaffarnagar | Future Tech',
        description: 'Fast, reliable chip-level diagnostics and repairs for all brands of laptops and desktop workstations.',
        longDescription: 'Experiencing slow performance, blue screens, or hardware failures? Our specialized technicians in Muzaffarnagar offer precision computer engineering services. We handle everything from simple OS installations to complex motherboard repairs, SSD upgrades, and deep data recovery without compromising your sensitive information.',
        icon: Laptop,
        color: 'indigo',
        image: 'https://images.unsplash.com/photo-1597872252721-2464b3814860?auto=format&fit=crop&w=1600&q=80',
        benefits: [
            'Chip-Level Motherboard Repair',
            'SSD & RAM Performance Upgrades',
            'Virus & Malware Removal',
            'Zero-Loss Data Recovery',
            'Screen & Keyboard Replacement',
            'Custom Gaming PC Builds'
        ]
    },
    'it-networking': {
        title: 'IT NETWORKING & STRUCTURED CABLING',
        seoTitle: 'IT Networking & Cabling Services in Muzaffarnagar | Future Tech',
        description: 'Build a robust, high-speed digital foundation for your office with our enterprise-grade networking solutions.',
        longDescription: 'A slow network costs your business money. Future Tech & solution designs and implements scalable network architectures tailored to your operational needs. We specialize in organized structured cabling, secure enterprise Wi-Fi deployments, and advanced firewall setups to keep your data flowing securely and rapidly.',
        icon: Network,
        color: 'cyan',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&w=1600&q=80',
        benefits: [
            'High-Speed Fiber Optic Setup',
            'Secure Managed Switches',
            'Seamless Mesh WiFi Coverage',
            'Server Rack Installation',
            'Network Security Firewalls',
            'Zero-Downtime Maintenance'
        ]
    },
    'security-systems': {
        title: 'ADVANCED SECURITY SYSTEMS',
        seoTitle: 'Access Control & Security Systems Muzaffarnagar | Future Tech',
        description: 'Control who enters your premises with biometric access control, intercoms, and smart lock grids.',
        longDescription: 'Physical security goes beyond just cameras. We provide comprehensive access control solutions including fingerprint scanners, facial recognition doors, and multi-tenant video intercom systems. Secure your restricted areas and log every entry and exit with our intelligent security integrations.',
        icon: Shield,
        color: 'slate',
        image: 'https://images.unsplash.com/photo-1558002038-1091a166111c?auto=format&fit=crop&w=1600&q=80',
        benefits: [
            'Biometric Fingerprint/Face ID',
            'Video Door Phones (VDP)',
            'Magnetic Smart Door Locks',
            'Time & Attendance Tracking',
            'Perimeter Intrusion Alarms',
            'Emergency Panic Systems'
        ]
    }
};

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const data = serviceData[serviceId];

    // SEO Meta Tags updates
    useEffect(() => {
        if (data) {
            document.title = data.seoTitle;
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', data.description);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = data.description;
                document.head.appendChild(meta);
            }
        }
    }, [data]);

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Service Not Found</h1>
                    <p className="text-slate-500 mb-8">The service you are looking for does not exist.</p>
                    <Link to="/services" className="text-blue-600 font-bold hover:underline">Return to Services</Link>
                </div>
            </div>
        );
    }

    const Icon = data.icon;

    return (
        <div className="bg-slate-50 min-h-screen pt-28 pb-20">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-[3rem] overflow-hidden mb-16 shadow-2xl bg-slate-900 h-[60vh] min-h-[500px] flex border border-slate-800">
                    <div className="absolute inset-0">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
                    </div>

                    <div className="relative z-10 p-12 lg:p-24 flex flex-col justify-center h-full max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-3 bg-blue-600/20 text-blue-400 px-5 py-2 rounded-full font-black text-sm uppercase tracking-widest mb-8 border border-blue-500/20 backdrop-blur-md"
                        >
                            <Icon size={16} />
                            <span>Professional Service</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter mb-6"
                        >
                            {data.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-300 font-medium leading-relaxed mb-10 max-w-2xl"
                        >
                            {data.description}
                        </motion.p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 space-y-10"
                    >
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-6 flex items-center">
                                <ShieldCheck size={32} className="text-blue-600 mr-4" />
                                Why Choose Future Tech?
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                                {data.longDescription}
                            </p>

                            <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Key Capabilities</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {data.benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start space-x-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        <div className={`w-8 h-8 rounded-full bg-${data.color}-100 text-${data.color}-600 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                            <CheckCircle size={16} strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-700 font-bold leading-tight">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-blue-600 rounded-[2.5rem] p-10 text-center sticky top-32 shadow-2xl shadow-blue-500/30 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                            <div className="w-20 h-20 bg-white/10 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner backdrop-blur-md">
                                <Wrench size={40} />
                            </div>
                            <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Need this {data.title.split(' ')[0]}?</h3>
                            <p className="text-blue-100 font-medium mb-8">
                                Our engineers are ready to deploy in Muzaffarnagar and surrounding regions.
                            </p>

                            {/* Passing the service back to the contact page */}
                            <Link
                                to={`/contact?service=${encodeURIComponent(data.title)}`}
                                className="w-full flex items-center justify-center space-x-2 bg-white text-blue-900 font-black py-5 rounded-2xl hover:scale-105 transition-transform shadow-xl mb-4"
                            >
                                <span>Book Now</span>
                                <ArrowRight size={20} />
                            </Link>

                            <div className="flex items-center justify-center space-x-2 text-blue-200 text-sm font-medium mt-6">
                                <Clock size={16} />
                                <span>Fast dispatch within 24 hours</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
