import React from 'react';
import { Leaf, Users, BarChart4 } from 'lucide-react';
import SectionHeading from '../../ui/SectionHeading';

const WhyVelaan: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-primary-600" />,
      title: 'Healthy Food',
      description:
        'We grow 100% organic produce without harmful chemicals or pesticides, resulting in healthier, more nutritious food for your family.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary-600" />,
      title: 'Decent Jobs',
      description:
        'We train and employ local farmers, providing stable incomes and dignified work while preserving traditional farming knowledge.',
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-primary-600" />,
      title: 'Transparent Profits',
      description:
        'Our profit-sharing model ensures landowners, farmers, and customers all benefit fairly from the value we create together.',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Why Choose Velaan?"
          subtitle="We're not just farming organically; we're building a sustainable ecosystem that benefits everyone involved."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Sustainable Approach
              </h3>
              <p className="text-gray-700 mb-4">
                We practice regenerative agriculture that enriches the soil, conserves water, and promotes biodiversity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>No synthetic fertilizers or pesticides</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>Crop rotation and natural pest management</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>Water conservation through drip irrigation</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>Composting and natural soil enrichment</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Sustainable Farming"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVelaan;