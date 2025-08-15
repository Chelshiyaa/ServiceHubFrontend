import React from 'react';
import {
  WrenchIcon,
  BoltIcon,
  HammerIcon,
  SparklesIcon,
  BrushIcon,
  CarIcon,
  TreePineIcon,
  ShieldCheckIcon
} from './icons';

const iconMap = {
  WrenchIcon,
  BoltIcon,
  HammerIcon,
  SparklesIcon,
  BrushIcon,
  CarIcon,
  TreePineIcon,
  ShieldCheckIcon
};

const iconColors = [
  'text-blue-500',
  'text-yellow-500',
  'text-red-500',
  'text-green-500',
  'text-purple-500',
  'text-orange-500',
  'text-teal-500',
  'text-indigo-500'
];

const PopularServices = ({ services }) => {
  return (
    <section id="services" className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Popular Services</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Browse our most requested services and find the perfect professional for your needs
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName] || WrenchIcon;
            const displayAvailable =
              service.available >= 100 ? '100+' : `${service.available}+`;

            return (
              <div
                key={service._id || service.name}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out flex flex-col items-center text-center"
              >
                <div
                  className={`p-4 rounded-full ${iconColors[index % iconColors.length]} bg-opacity-10 mb-4`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <span className="text-green-600 font-medium text-sm">
                  {displayAvailable} available
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
