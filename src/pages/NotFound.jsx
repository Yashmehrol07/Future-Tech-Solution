import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="flex justify-center mb-6"
                >
                    <div className="p-4 bg-red-100 rounded-full text-red-500">
                        <AlertTriangle size={64} />
                    </div>
                </motion.div>

                <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Oops! The page you are looking for does not exist. It might have been moved or deleted.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                    <Home className="mr-2" size={20} />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
