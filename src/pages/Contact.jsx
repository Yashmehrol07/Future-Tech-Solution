import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, User, Globe, PenTool } from 'lucide-react';
import { supabase } from '../supabaseClient';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'General Inquiry',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // 1. Save to Supabase
            const { error } = await supabase
                .from('inquiries')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        service: formData.service,
                        message: formData.message,
                    }
                ]);

            if (error) {
                console.error("Error saving inquiry:", error);
                alert("There was an issue saving your request, but we will still try to connect you to WhatsApp.");
            }

            // 2. Format the message for WhatsApp
            const whatsappMessage = `
*New Service Request!* 🚀

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Service Required:* ${formData.service}

*Message:*
${formData.message}
            `.trim();

            // 3. Encode the message for the URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // 4. Admin WhatsApp Number
            const adminWhatsAppNumber = "918430092577";

            // 5. Create the WhatsApp URL
            const whatsappUrl = `https://wa.me/${adminWhatsAppNumber}?text=${encodedMessage}`;

            // 6. Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');

            alert('Request saved! Redirecting to WhatsApp...');
            setFormData({ name: '', email: '', phone: '', service: 'General Inquiry', message: '' });

        } catch (err) {
            console.error("Unexpected error:", err);
            alert("An unexpected error occurred. Please try again.");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Left: Contact Info */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-4 block">Connect</span>
                            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-none tracking-tighter mb-8">
                                START A <br /> CONVERSATION.
                            </h1>
                            <p className="text-lg text-slate-500 font-bold mb-12">
                                We're here to answer any questions about our specialized security and IT services.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-6 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Call Us Now</p>
                                        <p className="text-lg font-black text-slate-900">+91 84300 92577</p>
                                        <p className="text-lg font-black text-slate-900">+91 82739 70956</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Inquiry</p>
                                        <p className="text-slate-900 font-black">sangamkumarmzn@gmail.com</p>
                                        <p className="text-slate-900 font-black">futuretechsolution77@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Visit Office</p>
                                        <p className="text-slate-900 font-black">123 Tech Park, Digital Avenue, <br />Mumbai, MH 400001</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Premium Form */}
                    <div className="lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-16 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-16 translate-x-16"></div>

                            <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center uppercase tracking-tight">
                                <span className="w-8 h-1 bg-blue-600 mr-4"></span> PROJECT REQUEST
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <User className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 placeholder:text-slate-400 transition-all"
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <Phone className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 placeholder:text-slate-400 transition-all"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>

                                <div className="relative group">
                                    <Mail className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-12 pr-4 py-5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 placeholder:text-slate-400 transition-all"
                                        placeholder="Email Address"
                                    />
                                </div>

                                <div className="relative group">
                                    <Globe className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 appearance-none transition-all cursor-pointer"
                                    >
                                        <option>General Inquiry</option>
                                        <option>CCTV Installation</option>
                                        <option>Laptop / Computer Repair</option>
                                        <option>Networking Solutions</option>
                                        <option>Security Systems</option>
                                    </select>
                                </div>

                                <div className="relative group">
                                    <PenTool className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full pl-12 pr-4 py-5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 placeholder:text-slate-400 transition-all resize-none"
                                        placeholder="Mission details..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-black py-6 rounded-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20 active:scale-95 transform flex items-center justify-center group"
                                >
                                    <span>Send Request</span>
                                    <Send size={20} className="ml-3 group-hover:rotate-12 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
