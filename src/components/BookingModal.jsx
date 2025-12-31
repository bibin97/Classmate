import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const BookingModal = () => {
    const { isModalOpen, closeBookingModal } = useBooking();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Form State
    const [formData, setFormData] = useState({
        studentName: '',
        whatsappNumber: '',
        grade: '',
        subject: '',
        place: ''
    });

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrorMessage(''); // Clear errors on type
    };

    // Mock API Call (Replace this with actual API/Google Sheet fetch)
    // Logic: "Upsert" based on Phone Number to avoid duplicates.
    // Google Sheet Web App URL (REPLACE THIS WITH YOUR ACTUAL URL)
    const SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE";

    const submitData = async (data, isFinal = false) => {
        setLoading(true);
        try {
            // Map form data to Google Sheet column headers
            // Sheet Columns: timestamp, name, number, grade, subject, place, status
            const payload = new FormData();
            payload.append("timestamp", new Date().toLocaleString());
            payload.append("name", data.studentName); // Maps 'studentName' -> 'name'
            payload.append("number", data.whatsappNumber); // Maps 'whatsappNumber' -> 'number'
            payload.append("grade", data.grade || "");
            payload.append("subject", data.subject || "");
            payload.append("place", data.place || "");
            payload.append("status", isFinal ? "Completed" : "Partial");

            // Send to Google Sheet
            if (SCRIPT_URL !== "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE") {
                await fetch(SCRIPT_URL, {
                    method: "POST",
                    body: payload,
                    mode: "no-cors"
                });
            } else {
                console.warn("Script URL missing! Data logged to console.");
                console.log("Payload:", Object.fromEntries(payload));
            }

            return true;
        } catch (error) {
            console.error("Submission Error", error);
            setErrorMessage("Connection failed. Please try again.");
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Handle Step 1 Submit (Next)
    const handleNext = async (e) => {
        e.preventDefault();
        if (!formData.studentName || !formData.whatsappNumber) {
            setErrorMessage("Please fill in all fields.");
            return;
        }

        // Hidden Submit of Step 1 Data
        const success = await submitData({
            studentName: formData.studentName,
            whatsappNumber: formData.whatsappNumber,
            status: 'Partial'
        }, false);

        if (success) {
            setStep(2);
        }
    };

    // Handle Step 2 Submit (Final)
    const handleFinalSubmit = async (e) => {
        e.preventDefault();
        if (!formData.grade || !formData.subject || !formData.place) {
            setErrorMessage("Please complete all details.");
            return;
        }

        // Final Submit of All Data
        const success = await submitData({
            ...formData,
            status: 'Completed'
        }, true);

        if (success) {
            // Show Success Message or Close
            alert("Thank you! A mentor will contact you shortly.");
            closeModal();
        }
    };

    const closeModal = () => {
        closeBookingModal();
        // Reset form after a delay to ensure smooth closing animation
        setTimeout(() => {
            setStep(1);
            setFormData({ studentName: '', whatsappNumber: '', grade: '', subject: '', place: '' });
            setErrorMessage('');
        }, 300);
    };

    if (!isModalOpen) return null;

    return (
        <AnimatePresence>
            {isModalOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000] flex items-center justify-center p-4"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                            className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative"
                        >
                            {/* Header / Progress */}
                            <div className="bg-brand-teal p-6 text-white text-center relative">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors bg-white/10 p-1 rounded-full"
                                >
                                    <X size={20} />
                                </button>

                                <h3 className="text-xl font-bold mb-2">Book Your Free Demo</h3>
                                <p className="text-sm text-teal-100 mb-4">
                                    {step === 1 ? "Step 1: Let's get to know you" : "Step 2: Academic Details"}
                                </p>

                                {/* Progress Indicators */}
                                <div className="flex justify-center gap-2">
                                    <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 1 ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}></div>
                                    <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 2 ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}></div>
                                </div>
                            </div>

                            {/* Form Content */}
                            <div className="p-8">
                                {step === 1 ? (
                                    <form onSubmit={handleNext} className="flex flex-col gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Student Name</label>
                                            <input
                                                type="text"
                                                name="studentName"
                                                value={formData.studentName}
                                                onChange={handleChange}
                                                placeholder="Ex: Adithya Kumar"
                                                className="w-full p-3.5 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-teal-50 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">WhatsApp Number</label>
                                            <div className="relative">
                                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-medium">+91</span>
                                                <input
                                                    type="tel"
                                                    name="whatsappNumber"
                                                    value={formData.whatsappNumber}
                                                    onChange={handleChange}
                                                    placeholder="98765 43210"
                                                    className="w-full p-3.5 pl-12 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-teal-50 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="mt-4 bg-brand-accent text-brand-heading py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {loading ? <Loader2 className="animate-spin" /> : <>Next Step <ArrowRight size={20} /></>}
                                        </button>
                                    </form>
                                ) : (
                                    <form onSubmit={handleFinalSubmit} className="flex flex-col gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Grade / Class</label>
                                            <select
                                                name="grade"
                                                value={formData.grade}
                                                onChange={handleChange}
                                                className="w-full p-3.5 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-teal-50 outline-none transition-all bg-white"
                                            >
                                                <option value="" disabled>Select Grade</option>
                                                <option value="Class 1-4">Class 1 - 4</option>
                                                <option value="Class 5-7">Class 5 - 7</option>
                                                <option value="Class 8-10">Class 8 - 10</option>
                                                <option value="Class 11-12">Class 11 - 12</option>
                                                <option value="Repeater">Repeater</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Subject Needed</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Ex: Maths, Physics, All Subjects"
                                                className="w-full p-3.5 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-teal-50 outline-none transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Location / Place</label>
                                            <input
                                                type="text"
                                                name="place"
                                                value={formData.place}
                                                onChange={handleChange}
                                                placeholder="Ex: Kochi, Kerala"
                                                className="w-full p-3.5 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-teal-50 outline-none transition-all"
                                            />
                                        </div>

                                        {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="mt-4 bg-brand-teal text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-teal-700 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {loading ? <Loader2 className="animate-spin" /> : <>Confirm Booking <CheckCircle size={20} /></>}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="text-xs text-gray-400 font-medium hover:text-gray-600 underline"
                                        >
                                            Go Back
                                        </button>
                                    </form>
                                )}

                                <p className="text-center text-[10px] text-gray-400 mt-6">
                                    By submitting, you agree to our Privacy Policy and allow us to contact you via WhatsApp/Call.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
