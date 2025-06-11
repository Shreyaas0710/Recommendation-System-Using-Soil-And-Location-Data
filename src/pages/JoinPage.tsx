import React from 'react';
import { farmerSteps } from '../data/steps';
import StepCard from '../components/ui/StepCard';
import Button from '../components/ui/Button';

const JoinPage: React.FC = () => {
  return (
    <div>
      <div className="bg-primary-700 text-white py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join The Velaan Movement
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Become part of our mission to transform agriculture through organic farming, 
            sustainable practices, and community empowerment.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Become an Organic Farmer</h2>
              <p className="text-gray-600 mb-8">
                Join our team of skilled organic farmers and make a difference in how food is grown. 
                No prior experience is necessary – we provide complete training and support.
              </p>
              
              <div className="mb-8">
                {farmerSteps.map((step, index) => (
                  <StepCard
                    key={step.id}
                    step={step}
                    isLast={index === farmerSteps.length - 1}
                  />
                ))}
              </div>
              
              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Why Become a Velaan Farmer?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                    <span>Stable income with performance bonuses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                    <span>Learn valuable skills in sustainable agriculture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                    <span>Be part of a community making a positive impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                    <span>Career growth opportunities within Velaan</span>
                  </li>
                </ul>
              </div>
              
              <Button variant="primary" size="lg">Apply as a Farmer</Button>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Volunteer Opportunities</h2>
              <p className="text-gray-600 mb-8">
                Even if you can't commit full-time, there are many ways to contribute to our mission.
                Join us as a volunteer and help create a more sustainable food system.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Weekend Farming</h3>
                  <p className="text-gray-600 mb-4">
                    Join us on weekends to help with planting, harvesting, and general farm maintenance.
                  </p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Community Workshops</h3>
                  <p className="text-gray-600 mb-4">
                    Help conduct workshops on organic farming, composting, and sustainable living.
                  </p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Market Assistant</h3>
                  <p className="text-gray-600 mb-4">
                    Support our team at farmers' markets and events, helping to sell our produce.
                  </p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">School Programs</h3>
                  <p className="text-gray-600 mb-4">
                    Assist with our educational programs, teaching children about organic farming.
                  </p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
              
              <Button variant="secondary" size="lg">Become a Volunteer</Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Join Our Team</h2>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 p-2 border"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your contact number"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 p-2 border"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 p-2 border"
                  required
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                  I'm Interested In
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 p-2 border"
                  required
                >
                  <option value="">Select your interest</option>
                  <option value="Farmer">Becoming a Farmer</option>
                  <option value="Weekend">Weekend Volunteering</option>
                  <option value="Workshop">Community Workshops</option>
                  <option value="Market">Market Assistant</option>
                  <option value="School">School Programs</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Previous Experience (if any)
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={4}
                  placeholder="Tell us about any relevant experience you have"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 p-2 border"
                ></textarea>
              </div>

              <div>
                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinPage;