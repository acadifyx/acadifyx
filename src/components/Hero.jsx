import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div id="home" className="relative bg-white overflow-hidden pt-16">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Acadifyx – Smart Writing.</span>{' '}
                                <span className="block text-blue-600 xl:inline">Smarter Results.</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                We transform academic requirements into well-researched, high-quality content. From technical reports to creative essays, we deliver excellence.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                                        Get Started
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a href="#services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                                        Our Services
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 flex items-center justify-center">
                {/* Placeholder for a hero image or graphic */}
                <div className="text-center p-10">
                    <div className="bg-blue-50 p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">Why Choose Acadifyx?</h3>
                        <ul className="text-left space-y-3 text-gray-700">
                            <li className="flex items-center">✅ Expert Academic Writers</li>
                            <li className="flex items-center">✅ Plagiarism-free Content</li>
                            <li className="flex items-center">✅ On-time Delivery</li>
                            <li className="flex items-center">✅ Free AI Integration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
