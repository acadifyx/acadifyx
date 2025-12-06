import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div id="contact" className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="relative max-w-xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact Acadifyx</h2>
                    <p className="mt-4 text-lg leading-6 text-gray-500">
                        Where smart content meets smart technology. Reach out to us for your next project.
                    </p>
                </div>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Placeholder contact info since none was provided in the prompt, using generic structure */}
                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                            <Mail className="h-8 w-8 text-blue-600 mb-2" />
                            <h3 className="text-lg font-medium text-gray-900">Email</h3>
                            <p className="text-gray-500">acadifyx@gmail.com</p>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                            <Phone className="h-8 w-8 text-blue-600 mb-2" />
                            <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                            <p className="text-gray-500">kindly contact us on our email</p>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg sm:col-span-2 lg:col-span-1">
                            <MapPin className="h-8 w-8 text-blue-600 mb-2" />
                            <h3 className="text-lg font-medium text-gray-900">Location</h3>
                            <p className="text-gray-500">India</p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                const name = formData.get('name');
                                const email = formData.get('email');
                                const message = formData.get('message');
                                const subject = `Contact from ${name} - Acadifyx`;
                                const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                                window.location.href = `mailto:acadifyx@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
                            }}
                            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                        >
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <div className="mt-1">
                                    <input type="text" name="name" id="name" required autoComplete="name" className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md border" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <div className="mt-1">
                                    <input type="email" name="email" id="email" required autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md border" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <div className="mt-1">
                                    <textarea id="message" name="message" rows={4} required className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md" defaultValue={''} />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
