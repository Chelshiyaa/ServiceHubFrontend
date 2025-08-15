import React from 'react';
import { SearchIcon, UserGroupIcon, CalendarIcon, StarIcon } from './icons';

const steps = [
  { number: 1, icon: SearchIcon, title: 'Search & Browse', description: 'Find professionals using smart search and filters to discover exactly what you need.' },
  { number: 2, icon: UserGroupIcon, title: 'Compare Profiles', description: 'Review detailed profiles, ratings, and feedback to make the right choice.' },
  { number: 3, icon: CalendarIcon, title: 'Book & Chat', description: 'Schedule your service and communicate directly with your chosen professional.' },
  { number: 4, icon: StarIcon, title: 'Rate & Review', description: 'Share your experience to help others make informed decisions.' },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">How ServiceHub Works</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Getting help has never been easier. Follow these simple steps to connect with trusted professionals
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out flex flex-col items-center text-center relative">
              <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm">
                {step.number}
              </div>
              <div className="p-4 rounded-full bg-blue-100 text-blue-600 mb-4">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
