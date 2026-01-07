import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, Loader2, User, Phone, MapPin, BookOpen, GraduationCap, Target } from 'lucide-react';
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
        place: '',
        learningRequirement: ''
    });

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrorMessage(''); // Clear errors on type
    };

    // Google Sheet Web App URL (REPLACE THIS WITH YOUR ACTUAL URL)
    const SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE";

    const submitData = async (data, isFinal = false) => {
        setLoading(true);
        try {
            // Map form data to Google Sheet column headers
            const payload = new FormData();
            payload.append("timestamp", new Date().toLocaleString());
            payload.append("name", data.studentName);
            payload.append("number", data.whatsappNumber);
            payload.append("grade", data.grade || "");
            payload.append("subject", data.subject || "");
            payload.append("place", data.place || "");
            payload.append("requirement", data.learningRequirement || "");
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
            setFormData({ studentName: '', whatsappNumber: '', grade: '', subject: '', place: '', learningRequirement: '' });
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
                        className="fixed inset-0 bg-black/40 backdrop-blur-md z-[2000] flex items-center justify-center p-4"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                            className="bg-white rounded-[20px] w-full max-w-md overflow-hidden shadow-2xl relative"
                        >
                            {/* Header / Progress */}
                            <div className="bg-yellow-400 py-6 px-8 text-black text-center relative">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-5 right-5 text-black/60 hover:text-black transition-colors p-1"
                                >
                                    <X size={24} />
                                </button>

                                <h3 className="text-2xl font-bold mb-1 tracking-tight">Book Your Free Demo</h3>
                                <p className="text-sm text-black/70 font-medium mb-5 opacity-90">
                                    {step === 1 ? "Step 1: Let's get to know you" : "Step 2: Academic Details"}
                                </p>

                                {/* Progress Indicators */}
                                <div className="flex justify-center gap-2">
                                    <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 1 ? 'w-8 bg-black' : 'w-2 bg-black/20'}`}></div>
                                    <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 2 ? 'w-8 bg-black' : 'w-2 bg-black/20'}`}></div>
                                </div>
                            </div>

                            {/* Form Content */}
                            <div className="p-8 pt-6">
                                {step === 1 ? (
                                    <form onSubmit={handleNext} className="flex flex-col gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Student Name</label>
                                            <div className="relative group">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#008080] transition-colors" size={20} />
                                                <input
                                                    type="text"
                                                    name="studentName"
                                                    value={formData.studentName}
                                                    onChange={handleChange}
                                                    placeholder="Ex: Adithya Kumar"
                                                    className="w-full py-3.5 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#008080] focus:ring-4 focus:ring-teal-50/50 outline-none transition-all placeholder:text-gray-400 font-medium"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">WhatsApp Number</label>
                                            <div className="relative group">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#008080] transition-colors" size={20} />
                                                <span className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-500 font-medium border-r border-gray-300 pr-2 leading-none">+971</span>
                                                <input
                                                    type="tel"
                                                    name="whatsappNumber"
                                                    value={formData.whatsappNumber}
                                                    onChange={handleChange}
                                                    placeholder="50 123 4567"
                                                    className="w-full py-3.5 pl-[5.5rem] pr-4 rounded-xl border border-gray-200 focus:border-[#008080] focus:ring-4 focus:ring-teal-50/50 outline-none transition-all placeholder:text-gray-400 font-medium"
                                                />
                                            </div>
                                        </div>

                                        {errorMessage && <p className="text-red-500 text-sm text-center font-medium bg-red-50 py-2 rounded-lg">{errorMessage}</p>}

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="mt-2 bg-[#008080] text-white py-4 rounded-full font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed w-full"
                                        >
                                            {loading ? <Loader2 className="animate-spin" /> : <>Next Step <ArrowRight size={20} /></>}
                                        </button>
                                    </form>
                                ) : (
                                    <form onSubmit={handleFinalSubmit} className="flex flex-col gap-5">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Grade / Class</label>
                                                <div className="relative group">
                                                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#008080] transition-colors" size={20} />
                                                    <select
                                                        name="grade"
                                                        value={formData.grade}
                                                        onChange={handleChange}
                                                        className="w-full py-3.5 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#008080] focus:ring-4 focus:ring-teal-50/50 outline-none transition-all bg-white font-medium appearance-none text-sm"
                                                    >
                                                        <option value="" disabled>Select Grade</option>
                                                        {Array.from({ length: 12 }, (_, i) => (
                                                            <option key={i + 1} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
                                                        ))}
                                                        <option value="Repeater">Repeater</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Location / City</label>
                                                <div className="relative group">
                                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#008080] transition-colors" size={20} />
                                                    <input
                                                        type="text"
                                                        name="place"
                                                        value={formData.place}
                                                        onChange={handleChange}
                                                        placeholder="Eg: Dubai, Sharjah"
                                                        className="w-full py-3.5 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#008080] focus:ring-4 focus:ring-teal-50/50 outline-none transition-all placeholder:text-gray-400 font-medium text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Subject Needed</label>
                                            <div className="relative group">
                                                <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#008080] transition-colors" size={20} />
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    placeholder="Ex: Maths, Physics, All Subjects"
                                                    className="w-full py-3.5 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#008080] focus:ring-4 focus:ring-teal-50/50 outline-none transition-all placeholder:text-gray-400 font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Learning Requirement <span className='text-gray-400 font-normal'>(Optional)</span></label>
                                            <div className="relative group">
                                                <Target className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#008080] transition-colors" size={20} />
                                                <select
                                                    name="learningRequirement"
                                                    value={formData.learningRequirement}
                                                    onChange={handleChange}
                                                    className="w-full py-3.5 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#008080] focus:ring-4 focus:ring-teal-50/50 outline-none transition-all bg-white font-medium appearance-none"
                                                >
                                                    <option value="" disabled>Select Requirement</option>
                                                    <option value="Regular Support">Regular support</option>
                                                    <option value="Exam Preparation">Exam preparation</option>
                                                    <option value="Concept Clarity">Concept clarity</option>
                                                    <option value="Not Sure">Not sure yet</option>
                                                </select>
                                            </div>
                                        </div>

                                        {errorMessage && <p className="text-red-500 text-sm text-center font-medium bg-red-50 py-2 rounded-lg">{errorMessage}</p>}

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="mt-2 bg-[#008080] text-white py-4 rounded-full font-bold text-lg shadow-md hover:bg-teal-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed w-full"
                                        >
                                            {loading ? <Loader2 className="animate-spin" /> : <>Confirm Booking <CheckCircle size={20} /></>}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="text-xs text-gray-400 font-medium hover:text-[#008080] transition-colors underline decoration-dotted underline-offset-4"
                                        >
                                            Go Back
                                        </button>
                                    </form>
                                )}

                                <p className="text-center text-[10px] text-gray-400 mt-6 leading-tight max-w-xs mx-auto">
                                    By submitting, you agree to our Privacy Policy and allow us to contact you via WhatsApp or Call.
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
