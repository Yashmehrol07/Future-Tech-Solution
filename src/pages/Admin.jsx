import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Shield, Lock, Search, Filter, RefreshCw, Mail, Phone, Clock, User, LogOut, Inbox } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
    // Authentication State
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');

    // Data State
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    const ADMIN_PIN = '7777'; // Hardcoded PIN for simplicity

    const handleLogin = (e) => {
        e.preventDefault();
        if (pin === ADMIN_PIN) {
            setIsAuthenticated(true);
            setError('');
            fetchInquiries();
        } else {
            setError('Invalid PIN. Access Denied.');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setPin('');
        setInquiries([]);
    };

    const fetchInquiries = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('inquiries')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setInquiries(data || []);
            }
        } catch (err) {
            console.error('Unexpected error:', err);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }).format(date);
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-10 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                        <Shield size={40} />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 mb-2">Admin Portal</h2>
                    <p className="text-slate-500 font-medium mb-8">Enter PIN to access service inquiries.</p>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="password"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                placeholder="Enter Access PIN"
                                maxLength={6}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none font-bold text-center tracking-widest text-xl text-slate-900 transition-all"
                            />
                        </div>
                        {error && <p className="text-red-500 font-bold text-sm">{error}</p>}

                        <button
                            type="submit"
                            className="w-full bg-slate-900 text-white font-black py-4 rounded-xl hover:bg-blue-600 transition-colors shadow-lg active:scale-95"
                        >
                            Secure Login
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 mb-1">Inquiry Management</h1>
                        <p className="text-slate-500 font-medium">Overview of all incoming service requests</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={fetchInquiries}
                            className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors flex items-center space-x-2 font-bold"
                            title="Refresh Data"
                        >
                            <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
                            <span className="hidden sm:inline">Refresh</span>
                        </button>
                        <button
                            onClick={handleLogout}
                            className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors flex items-center space-x-2 font-bold"
                            title="Logout"
                        >
                            <LogOut size={18} />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>

                {/* Data Table Area */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
                >
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <Search size={20} />
                            </div>
                            <h2 className="text-xl font-black text-slate-900">Recent Requests</h2>
                        </div>
                        <div className="bg-white text-blue-600 font-black px-4 py-2 rounded-lg border border-slate-200 text-sm">
                            Total: {inquiries.length}
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        {loading ? (
                            <div className="p-20 text-center">
                                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                                <p className="text-slate-500 font-bold animate-pulse">Loading secure data...</p>
                            </div>
                        ) : inquiries.length === 0 ? (
                            <div className="p-20 text-center flex flex-col items-center">
                                <div className="w-20 h-20 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mb-4">
                                    <Inbox size={40} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">No Inquiries Found</h3>
                                <p className="text-slate-500 max-w-md mx-auto">Your database is currently empty. Incoming service requests will appear here automatically.</p>
                            </div>
                        ) : (
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <th className="p-5 font-bold text-slate-500 uppercase tracking-wider text-xs">Client Details</th>
                                        <th className="p-5 font-bold text-slate-500 uppercase tracking-wider text-xs">Contact Info</th>
                                        <th className="p-5 font-bold text-slate-500 uppercase tracking-wider text-xs">Location</th>
                                        <th className="p-5 font-bold text-slate-500 uppercase tracking-wider text-xs">Service & Message</th>
                                        <th className="p-5 font-bold text-slate-500 uppercase tracking-wider text-xs w-48">Date Submitted</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {inquiries.map((inq) => (
                                        <tr key={inq.id} className="hover:bg-blue-50/30 transition-colors">
                                            {/* Name */}
                                            <td className="p-5 align-top">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-black flex-shrink-0">
                                                        {inq.name ? inq.name.charAt(0).toUpperCase() : '?'}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900 text-sm">{inq.name || 'Unknown'}</p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Contact */}
                                            <td className="p-5 align-top">
                                                <div className="space-y-2">
                                                    <a href={`mailto:${inq.email}`} className="flex items-center text-sm text-slate-600 hover:text-blue-600 transition-colors group">
                                                        <Mail size={14} className="mr-2 text-slate-400 group-hover:text-blue-600" />
                                                        <span className="truncate max-w-[180px] block">{inq.email || 'N/A'}</span>
                                                    </a>
                                                    <a href={`tel:${inq.phone}`} className="flex items-center text-sm text-slate-600 hover:text-blue-600 transition-colors group">
                                                        <Phone size={14} className="mr-2 text-slate-400 group-hover:text-blue-600" />
                                                        {inq.phone || 'N/A'}
                                                    </a>
                                                </div>
                                            </td>

                                            {/* Location */}
                                            <td className="p-5 align-top">
                                                <div className="mb-1 text-sm font-black text-slate-700">
                                                    PIN: {inq.pincode || 'N/A'}
                                                </div>
                                                <p className="text-sm text-slate-500 line-clamp-2 w-full max-w-[200px]" title={inq.address}>
                                                    {inq.address || 'No address provided'}
                                                </p>
                                            </td>

                                            {/* Service & Message */}
                                            <td className="p-5 align-top">
                                                <div className="mb-2 inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-black rounded-md border border-blue-100/50">
                                                    {inq.service || 'General Inquiry'}
                                                </div>
                                                <p className="text-sm text-slate-500 line-clamp-2 mt-1 italic w-full max-w-[250px]" title={inq.message}>
                                                    "{inq.message || 'No message provided.'}"
                                                </p>
                                            </td>

                                            {/* Date */}
                                            <td className="p-5 align-top">
                                                <div className="flex items-center space-x-2 text-sm text-slate-500 font-medium">
                                                    <Clock size={16} className="text-slate-400" />
                                                    <span>{formatDate(inq.created_at)}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminDashboard;
