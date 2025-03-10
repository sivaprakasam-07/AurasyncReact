import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { usePatientContext } from '../context/PatientContext';

const AddPatient = () => {
    const [formData, setFormData] = useState({
        patient_id: '',
        user_id: '',
        patient_name: '',
        age: '',
        gender: '',
    });
    const navigate = useNavigate();
    const { addPatient } = usePatientContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newPatient = {
                id: parseInt(formData.patient_id),
                name: formData.patient_name,
                age: parseInt(formData.age),
                lastVisit: new Date().toISOString().split('T')[0],
            };
            addPatient(newPatient);
            toast.success('Patient added successfully!');
            navigate('/patients');
        } catch (error) {
            toast.error('Failed to add patient. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h1
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-3xl font-bold text-gray-900 mb-8"
                >
                    Add Patient
                </motion.h1>
                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
                    <div>
                        <label htmlFor="patient_id" className="block text-sm font-medium text-gray-700 mb-1">
                            Patient ID
                        </label>
                        <input
                            type="text"
                            id="patient_id"
                            name="patient_id"
                            value={formData.patient_id}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="user_id" className="block text-sm font-medium text-gray-700 mb-1">
                            User ID
                        </label>
                        <input
                            type="number"
                            id="user_id"
                            name="user_id"
                            value={formData.user_id}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="patient_name" className="block text-sm font-medium text-gray-700 mb-1">
                            Patient Name
                        </label>
                        <input
                            type="text"
                            id="patient_name"
                            name="patient_name"
                            value={formData.patient_name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                            Gender
                        </label>
                        <input
                            type="text"
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-colors"
                    >
                        Add Patient
                    </motion.button>
                </form>
            </div>
        </div>
    );
};

export default AddPatient;
