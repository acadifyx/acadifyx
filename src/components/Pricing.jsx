import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <div id="pricing" className="bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:flex-col sm:align-center">
                    <h1 className="text-5xl font-extrabold text-white sm:text-center">Exclusive Launch Offers</h1>
                    <p className="mt-5 text-xl text-gray-300 sm:text-center">
                        Start your journey with our limited time packages.
                    </p>
                </div>
                <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">

                    {/* Portfolio Website */}
                    <div className="border border-gray-700 rounded-lg shadow-sm divide-y divide-gray-700 bg-gray-800">
                        <div className="p-6">
                            <h2 className="text-lg leading-6 font-medium text-white">Portfolio Website</h2>
                            <p className="mt-4">
                                <span className="text-4xl font-extrabold text-white">₹999</span>
                                <span className="text-base font-medium text-gray-400">/one-time</span>
                            </p>
                            <p className="mt-4 text-sm text-gray-300">
                                Perfect for freelancers, students, and professionals.
                            </p>
                            <a href="#contact" className="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700">
                                Get Started
                            </a>
                        </div>
                        <div className="pt-6 pb-8 px-6">
                            <h3 className="text-xs font-medium text-white tracking-wide uppercase">What's included</h3>
                            <ul className="mt-6 space-y-4">
                                {['Modern UI', 'Mobile responsive', 'Contact section', 'Basic SEO', 'Fast delivery'].map((feature) => (
                                    <li key={feature} className="flex space-x-3">
                                        <Check className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Mobile App */}
                    <div className="border border-gray-700 rounded-lg shadow-sm divide-y divide-gray-700 bg-gray-800">
                        <div className="p-6">
                            <h2 className="text-lg leading-6 font-medium text-white">AI-Enabled Mobile App</h2>
                            <p className="mt-4">
                                <span className="text-4xl font-extrabold text-white">₹5,999</span>
                                <span className="text-base font-medium text-gray-400">/starting</span>
                            </p>
                            <p className="mt-4 text-sm text-gray-300">
                                React Native app with Firebase + AI integration.
                            </p>
                            <a href="#contact" className="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700">
                                Build Your App
                            </a>
                        </div>
                        <div className="pt-6 pb-8 px-6">
                            <h3 className="text-xs font-medium text-white tracking-wide uppercase">What's included</h3>
                            <ul className="mt-6 space-y-4">
                                {['User Authentication', '2–3 database modules', 'Free AI integration', 'Basic dashboard + UI', 'Deployment support'].map((feature) => (
                                    <li key={feature} className="flex space-x-3">
                                        <Check className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;
