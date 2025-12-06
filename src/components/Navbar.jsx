import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <img src="/logo.jpg" alt="Acadifyx Logo" className="h-10 w-auto rounded-full" />
                        <span className="ml-2 text-xl font-bold text-gray-900">Acadifyx</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                        <a href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                        <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Contact Us</a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">About</a>
                        <a href="#services" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Services</a>
                        <a href="#pricing" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Pricing</a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
