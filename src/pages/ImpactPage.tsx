import React from 'react';
import { stats } from '../data/stats';
import StatsCard from '../components/ui/StatsCard';

const ImpactPage: React.FC = () => {
  return (
    <div>
      <div className="bg-primary-700 text-white py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Impact
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Together with our community of landowners, farmers, and customers, we're creating
            a more sustainable and equitable food system.
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatsCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Environmental Impact</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Environmental Impact"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reduced Carbon Footprint</h3>
                  <p className="text-gray-600">
                    Our organic farming practices sequester carbon in the soil instead of releasing it into the atmosphere.
                    To date, we've sequestered an estimated 1,200 tons of carbon dioxide.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Water Conservation</h3>
                  <p className="text-gray-600">
                    Through drip irrigation and rainwater harvesting, we use 60% less water than conventional farming methods,
                    saving approximately 120 million liters of water annually.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Biodiversity Protection</h3>
                  <p className="text-gray-600">
                    Our farms have documented a 40% increase in bird and insect species, contributing to healthier ecosystems
                    and natural pest control.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Chemical-Free Farming</h3>
                  <p className="text-gray-600">
                    We've prevented over 25,000 kg of synthetic fertilizers and pesticides from entering the soil and water systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Social Impact</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Employment Generation</h3>
                  <p className="text-gray-600">
                    We've created over 250 full-time jobs, primarily in rural areas where employment opportunities are limited.
                    85% of our workforce comes from economically disadvantaged backgrounds.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
                  <p className="text-gray-600">
                    Our farmer training program has equipped 325 individuals with valuable skills in organic farming,
                    enabling them to earn sustainable livelihoods.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Health</h3>
                  <p className="text-gray-600">
                    By providing access to chemical-free produce, we're improving health outcomes in communities where
                    access to organic food was previously limited.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education & Awareness</h3>
                  <p className="text-gray-600">
                    Our workshops and school programs have educated over 5,000 people about sustainable agriculture and food systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/6690721/pexels-photo-6690721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Social Impact"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Before"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Land Transformation</h3>
                <p className="text-gray-600">
                  This 10-acre plot in Karnataka was barren for 8 years. Within 18 months of Velaan's intervention,
                  it became a thriving organic farm producing over 40 tons of vegetables annually.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2382657/pexels-photo-2382657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Farmer Success"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Farmer Success</h3>
                <p className="text-gray-600">
                  After losing his conventional farm to debt, Ramesh joined Velaan as a trainee. Today, he manages
                  a 15-acre organic farm and mentors new farmers in sustainable practices.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8253219/pexels-photo-8253219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Community Impact"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
                <p className="text-gray-600">
                  By establishing a farming hub in Chikkaballapur district, we've created 50+ jobs and established
                  a direct market for 200+ small-scale farmers in surrounding villages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;