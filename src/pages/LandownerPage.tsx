import React from 'react';
import Steps from '../components/sections/landowner/Steps';
import FAQ from '../components/sections/landowner/FAQ';
import EnrollForm from '../components/sections/landowner/EnrollForm';
import Testimonials from '../components/sections/home/Testimonials';

const LandownerPage: React.FC = () => {
  return (
    <div>
      <div className="bg-primary-700 text-white py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Earn from Your Idle Land
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Partner with Velaan to convert your uncultivated land into a thriving organic farm. Earn passive income while contributing to sustainable agriculture.
          </p>
        </div>
      </div>
      <Steps />
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary-50 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Benefits of Partnering With Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                    <div>
                      <h4 className="font-semibold">Passive Income</h4>
                      <p className="text-gray-600">Earn regular income from your land without any effort or investment</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                    <div>
                      <h4 className="font-semibold">Land Improvement</h4>
                      <p className="text-gray-600">We improve soil health and biodiversity, increasing your land's value</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                    <div>
                      <h4 className="font-semibold">Free Maintenance</h4>
                      <p className="text-gray-600">We handle all maintenance, security, and cultivation costs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                    <div>
                      <h4 className="font-semibold">Complete Transparency</h4>
                      <p className="text-gray-600">Regular updates and complete visibility into farming operations</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Land Cultivation"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <FAQ />
      <EnrollForm />
    </div>
  );
};

export default LandownerPage;