import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe, PenTool, User, ShieldCheck, AlertCircle, Map, ArrowRight } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { useSearchParams } from 'react-router-dom';

const Contact = () => {
    // URL Parameters
    const [searchParams] = useSearchParams();
    const defaultService = searchParams.get('service') || 'General Inquiry';

    // Two-step process state
    const [step, setStep] = useState(1);
    const [pincodeError, setPincodeError] = useState('');

    const [formData, setFormData] = useState({
        pincode: '',
        name: '',
        email: '',
        phone: '',
        service: defaultService,
        address: '',
        message: ''
    });

    // Valid Pincode check: Muzaffarnagar and nearby usually start with 251, 247 (Shamli), or 250 (Meerut/Khatauli area)
    const handlePincodeSubmit = (e) => {
        e.preventDefault();
        const pin = formData.pincode.trim();

        // Simple validation: Ensure it's 6 digits and starts with valid UP-West series
        if (/^(251|247|250)\d{3}$/.test(pin)) {
            setPincodeError('');
            setStep(2);
        } else if (pin.length === 6) {
            setPincodeError('We currently do not offer services in your area. We serve Muzaffarnagar, Shamli, Khatauli and surrounding regions.');
        } else {
            setPincodeError('Please enter a valid 6-digit Pincode.');
        }
    };

    const handleFinalSubmit = async (e) => {
        e.preventDefault();

        try {
            // 1. Save to Supabase (we will need to add pincode and address to the DB later)
            const { error } = await supabase
                .from('inquiries')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        service: formData.service,
                        message: formData.message,
                        // Adding new fields (Make sure the DB is updated!)
                        pincode: formData.pincode,
                        address: formData.address
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

*Location Details:*
*Pincode:* ${formData.pincode}
*Address:* ${formData.address}

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
            setFormData({ pincode: '', name: '', email: '', phone: '', service: defaultService, address: '', message: '' });
            setStep(1);

        } catch (err) {
            console.error("Unexpected error:", err);
            alert("An unexpected error occurred. Please try again.");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.name === 'pincode') setPincodeError('');
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
                                        <p className="text-slate-900 font-black">Muzaffarnagar and Nearby Regions<br />Uttar Pradesh, India</p>
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
                            className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-16 relative overflow-hidden min-h-[500px]"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-16 translate-x-16"></div>

                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="h-full flex flex-col justify-center"
                                    >
                                        <div className="mb-10">
                                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                                <Map size={32} />
                                            </div>
                                            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                                                SERVICE AVAILABILITY
                                            </h2>
                                            <p className="text-slate-500 font-medium text-lg">
                                                Please enter your Pincode to check if Future Tech & solution is available in your area.
                                            </p>
                                        </div>

                                        <form onSubmit={handlePincodeSubmit} className="space-y-6">
                                            <div className="relative group">
                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={24} />
                                                <input
                                                    type="text"
                                                    name="pincode"
                                                    value={formData.pincode}
                                                    onChange={handleChange}
                                                    required
                                                    maxLength={6}
                                                    className="w-full pl-14 pr-4 py-6 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-black text-2xl text-slate-900 tracking-[0.2em] transition-all"
                                                    placeholder="XXXXXX"
                                                />
                                            </div>

                                            {pincodeError && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="flex items-start space-x-3 text-red-500 bg-red-50 p-4 rounded-xl"
                                                >
                                                    <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                                                    <p className="font-bold text-sm">{pincodeError}</p>
                                                </motion.div>
                                            )}

                                            <button
                                                type="submit"
                                                className="w-full bg-slate-900 text-white font-black py-6 rounded-2xl hover:bg-blue-600 transition-colors shadow-xl flex items-center justify-center group"
                                            >
                                                <span>Check Eligibility</span>
                                                <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
                                            </button>
                                        </form>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                    >
                                        <div className="flex items-center space-x-3 mb-10 text-green-600 bg-green-50 p-4 rounded-2xl">
                                            <ShieldCheck size={24} />
                                            <p className="font-bold">Great! Service is available at {formData.pincode}.</p>
                                        </div>

                                        <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center uppercase tracking-tight">
                                            <span className="w-8 h-1 bg-blue-600 mr-4"></span> PROJECT REQUEST
                                        </h2>

                                        <form onSubmit={handleFinalSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="relative group">
                                                    <User className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 placeholder:text-slate-400 transition-all"
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
                                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 placeholder:text-slate-400 transition-all"
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
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 placeholder:text-slate-400 transition-all"
                                                    placeholder="Email Address"
                                                />
                                            </div>

                                            <div className="relative group">
                                                <MapPin className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                                                <textarea
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                    required
                                                    rows="2"
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 placeholder:text-slate-400 transition-all resize-none"
                                                    placeholder="Complete Address (Street, House No., Landmark)"
                                                ></textarea>
                                            </div>

                                            <div className="relative group">
                                                <Globe className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 appearance-none transition-all cursor-pointer"
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
                                                    rows="3"
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 placeholder:text-slate-400 transition-all resize-none"
                                                    placeholder="Mission details..."
                                                ></textarea>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-blue-600 text-white font-black py-5 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 transform flex items-center justify-center group"
                                            >
                                                <span>Book Service</span>
                                                <Send size={20} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
