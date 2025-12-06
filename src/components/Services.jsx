import React from 'react';
import { BookOpen, Code, FileText, Bot } from 'lucide-react';

const services = [
    {
        title: 'Academic Writing',
        description: 'Assignments, Essays, Reports, Case Studies, Literature Reviews, Capstone Projects.',
        icon: BookOpen,
    },
    {
        title: 'Technical Documentation',
        description: 'Software documentation, Project reports, Research papers, Engineering & IT content.',
        icon: Code,
    },
    {
        title: 'Non-Technical Writing',
        description: 'Communication studies, HR & management papers, Business analysis & reports.',
        icon: FileText,
    },
    {
        title: 'AI Solutions',
        description: 'AI chatbot integration, Website automation, Smart writing tools. FREE AI Integration!',
        icon: Bot,
    },
];

const Services = () => {
    return (
        <div id="services" className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Services</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Comprehensive Writing Solutions
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We cover everything from academic essays to complex technical documentation and AI integration.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {services.map((service) => (
                            <div key={service.title} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                        <service.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.title}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{service.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Services;
