import React from 'react';

const About = () => {
    return (
        <div id="about" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-10">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Where Smart Content Meets Smart Technology
                    </p>
                </div>
                <div className="mt-10">
                    <div className="prose prose-blue prose-lg text-gray-500 mx-auto">
                        <p>
                            Acadifyx was founded with one purpose — to make academic writing effortless, reliable, and smart.
                            Backed by a skilled writing team and AI-powered systems, we ensure quality that stands out.
                        </p>
                        <p className="mt-4">
                            We don’t just write. We understand, analyze, create, and refine — ensuring your ideas shine through professionally.
                        </p>
                        <h3 className="mt-8 text-2xl font-bold text-gray-900">Our Commitment</h3>
                        <ul className="mt-4 space-y-2 list-disc list-inside">
                            <li>Quality</li>
                            <li>Accuracy</li>
                            <li>Originality</li>
                            <li>Deadline discipline</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
