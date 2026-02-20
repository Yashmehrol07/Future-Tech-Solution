import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const SupabaseTest = () => {
    const [status, setStatus] = useState('Testing connection...');

    useEffect(() => {
        const testConnection = async () => {
            try {
                // A simple query to check if we can connect to the Supabase instance
                const { data, error } = await supabase.from('_test').select('*').limit(1);

                // We expect an error if the table doesn't exist, but a specific type of error
                // If the connection fails entirely, it will be a different error
                if (error && error.code === '42P01') {
                    // 42P01 means relation does not exist - which means we connected successfully!
                    setStatus('✅ Connection successful!');
                } else if (!error) {
                    setStatus('✅ Connection successful!');
                } else {
                    console.error("Supabase connection error:", error);
                    setStatus('❌ Connection failed. Check console for details.');
                }
            } catch (err) {
                console.error("Supabase connection error:", err);
                setStatus('❌ Connection failed. Check console for details.');
            }
        };

        testConnection();
    }, []);

    return (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50">
            <h3 className="font-bold mb-2">Supabase Status</h3>
            <p>{status}</p>
        </div>
    );
};

export default SupabaseTest;
