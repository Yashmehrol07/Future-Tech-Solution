import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Laptop, Network, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            id: 'cctv',
            title: 'CCTV INSTALLATION',
            description: 'Intelligent surveillance systems with 4K resolution, AI-driven motion detection, and encrypted cloud storage for ultimate peace of mind.',
            icon: Camera,
            features: ['4K Ultra HD Insight', 'AI Motion Analysis', 'Smartphone Integration', 'Remote Recovery'],
            color: 'blue'
        },
        {
            id: 'repair',
            title: 'COMPUTER REPAIR',
            description: 'Precision engineering for your critical hardware. We specialize in high-end laptop repairs, workstation optimization, and data restoration.',
            icon: Laptop,
            features: ['Chip-Level Diagnostics', 'SSD/RAM Upgrades', 'Cooling Optimization', 'Zero-Loss Recovery'],
            color: 'indigo'
        },
        {
            id: 'networking',
            title: 'IT NETWORKING',
            description: 'Scalable network architectures that grow with your business. High-speed fiber deployments and secure wireless grids.',
            icon: Network,
            features: ['Fiber-Optic Setup', 'Security Firewalling', 'Mesh WiFi Grids', 'Server Management'],
            color: 'cyan'
        },
        {
            id: 'security',
            title: 'SECURITY SYSTEMS',
            description: 'Beyond visual monitoring. Integrated biometric controls, smart lock grids, and perimeter intrusion detection systems.',
            icon: Shield,
            features: ['Fingerprint/Face Id', 'Intrusion Alarms', 'Smart Logic Gates', 'Incident Logging'],
            color: 'slate'
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24"
                >
                    <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-4 block">Our Expertise</span>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-none tracking-tighter mb-8">
                        PRECISION <br /> SOLUTIONS.
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
                        We deliver mission-critical technical services with a focus on reliability, security, and performance.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                                }`}
                        >
                            <div className="lg:w-1/2">
                                <div className={`w-20 h-20 rounded-3xl bg-slate-50 text-blue-600 flex items-center justify-center mb-10 shadow-xl shadow-slate-100`}>
                                    <service.icon size={40} strokeWidth={1.5} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight uppercase">
                                    {service.title}
                                </h2>
                                <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                                    {service.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center space-x-3 group">
                                            <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle size={14} />
                                            </div>
                                            <span className="text-slate-700 font-bold tracking-tight">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    to={`/services/${service.id}`}
                                    className="inline-flex items-center space-x-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black shadow-2xl shadow-blue-500/20 hover:bg-blue-700 transition-all transform hover:-translate-y-1"
                                >
                                    <span>Learn More & Book</span>
                                    <ArrowRight size={20} />
                                </Link>
                            </div>

                            <div className="lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-700"></div>
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200">
                                    <img
                                        src={`https://images.unsplash.com/photo-${service.id === 'cctv' ? '1557862921-37829c790f19' :
                                            service.id === 'repair' ? '1597872252721-2464b3814860' :
                                                service.id === 'networking' ? '1544197150-b99a580bbcbf' :
                                                    '1558002038-1091a166111c'
                                            }?auto=format&fit=crop&w=1000&q=80`}
                                        alt={service.title}
                                        className="w-full h-full object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-600/20 blur-[100px]"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">READY TO UPGRADE <br /> YOUR SYSTEM?</h2>
                        <p className="text-slate-400 text-xl font-medium mb-12 max-w-xl mx-auto">
                            Join over 500+ businesses who trust Future Tech & solution for their critical IT infrastructure.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-slate-900 px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:bg-blue-50 transition-all transform hover:-translate-y-1"
                        >
                            Get A Detailed Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
