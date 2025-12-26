import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MapPin, Star } from 'lucide-react';
import heroStudent from '../assets/hero_student.png'; // Using existing asset as placeholder

const TrustCredibility = () => {

    // Data for Premium Image Cards (Section 1)
    const featuredReviews = [
        {
            id: 1,
            image: heroStudent, // Ideally different images
            quote: "My child became more confident and enjoys learning every day. The 1:1 attention is exactly what we needed.",
            parentName: "Lakshmi Nair",
            studentDetails: "Niranjan | Grade 5 CBSE",
            location: "Kochi, Kerala"
        },
        {
            id: 2,
            image: heroStudent,
            quote: "Marks improved significantly, but more importantly, he understands the concepts now. No more mugging up.",
            parentName: "Rajesh Menon",
            studentDetails: "Aditya | Grade 8 ICSE",
            location: "Dubai, UAE"
        },
        {
            id: 3,
            image: heroStudent,
            quote: "The mentors are so patient. My daughter used to hate Math, now she waits for her Classmate sessions.",
            parentName: "Sarah Thomas",
            studentDetails: "Diya | Grade 6 State",
            location: "Bangalore, India"
        }
    ];

    // Data for Text Carousel (Section 2)
    const textReviews = [
        {
            text: "Thank you Mash Magic 🥰 My child enjoyed the class and is now asking for more sessions.",
            author: "Sreeja Sunil",
            details: "Mother of Ranadev | Grade 4 CBSE | Thrissur"
        },
        {
            text: "Finally a tuition platform that actually cares about the child's understanding.",
            author: "Mohammed Aslam",
            details: "Father of Ziyan | Grade 7 | Kozhikode"
        },
        {
            text: "The gap identification test was an eye opener. We know exactly where to focus now.",
            author: "Anjali P.",
            details: "Mother of Meenakshi | Grade 5 | Trivandrum"
        },
        {
            text: "Supportive mentors and excellent teaching quality. Highly recommend Classmate.",
            author: "Deepak K.",
            details: "Father of Rohan | Grade 9 CBSE | Mumbai"
        },
        {
            text: "Convenient, safe, and effective. The best decision for my daughter's studies.",
            author: "Fathima S.",
            details: "Mother of Ayesha | Grade 6 ICSE | Malappuram"
        }
    ];

    return (
        <>
            {/* SECTION 1: VISUAL TRUST + PREMIUM SHOWCASE */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Parents Who Saw <span className="text-brand-teal">Real Change</span></h2>
                        <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                            Consistent daily learning with personal mentor support
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredReviews.map((review) => (
                            <motion.div
                                key={review.id}
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden group cursor-default"
                            >
                                {/* Top Image Area */}
                                <div className="h-64 overflow-hidden bg-gray-100 relative">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                        src={review.image}
                                        alt={review.studentDetails}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                {/* Content Area */}
                                <div className="p-8 relative">
                                    {/* Quote Icon */}
                                    <div className="absolute -top-6 right-8 bg-brand-teal text-white p-3 rounded-full shadow-md">
                                        <Quote size={20} fill="currentColor" />
                                    </div>

                                    <p className="text-gray-700 font-medium italic leading-relaxed mb-6">
                                        "{review.quote}"
                                    </p>

                                    <div className="border-t border-gray-100 pt-6">
                                        <h4 className="font-bold text-lg text-gray-900">{review.parentName}</h4>
                                        <p className="text-brand-teal text-sm font-semibold mb-1">{review.studentDetails}</p>
                                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                                            <MapPin size={12} />
                                            {review.location}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 2: TEXT-ONLY REVIEWS CAROUSEL */}
            <section className="py-20 bg-[#f9f9f9] overflow-hidden border-t border-gray-100">
                <div className="container text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">What Parents Say <span className="text-brand-teal">Every Day</span></h2>
                    <p className="text-gray-500">Real words from real families across the globe</p>
                </div>

                {/* Infinite Carousel Wrapper */}
                <div className="relative w-full">
                    {/* Gradients for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f9f9f9] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f9f9f9] to-transparent z-10 pointer-events-none"></div>

                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-8 px-8"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 40 // Slow speed
                            }}
                        >
                            {/* Double the list for seamless loop */}
                            {[...textReviews, ...textReviews].map((review, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex-shrink-0 w-[400px] bg-white p-8 rounded-xl shadow-sm border-l-4 border-l-brand-teal"
                                >
                                    <p className="text-gray-600 mb-6 leading-relaxed relative">
                                        <span className="text-4xl text-brand-teal/20 absolute -top-4 -left-2 font-serif">"</span>
                                        {review.text}
                                    </p>
                                    <div>
                                        <h5 className="font-bold text-gray-900 text-sm">{review.author}</h5>
                                        <p className="text-xs text-gray-400 mt-1">{review.details}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TrustCredibility;
