import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};

export const BookingProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openBookingModal = () => {
        setIsModalOpen(true);
    };

    const closeBookingModal = () => {
        setIsModalOpen(false);
    };

    return (
        <BookingContext.Provider value={{ isModalOpen, openBookingModal, closeBookingModal }}>
            {children}
        </BookingContext.Provider>
    );
};
