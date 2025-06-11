import React from 'react';
import Button from '../../ui/Button';
import SectionHeading from '../../ui/SectionHeading';

const EnrollForm: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Enroll Your Land"
          subtitle="Complete this form to start the process of enrolling your land with Velaan. Our team will contact you within 48 hours."
        />
        <div className="mt-8 max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Land Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Village, District, State"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 p-2 border"
                  required
                />
              </div>
              <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                  Land Area (in acres)
                </label>
                <input
                  type="number"
                  id="area"
                  name="area"
                  min="0.5"
                  step="0.5"
                  placeholder="Land area in acres"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 p-2 border"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="currentUse" className="block text-sm font-medium text-gray-700 mb-1">
                Current Land Use
              </label>
              <select
                id="currentUse"
                name="currentUse"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 p-2 border"
                required
              >
                <option value="">Select current usage</option>
                <option value="Unused">Unused/Idle</option>
                <option value="Conventional">Conventional Farming</option>
                <option value="Organic">Organic Farming</option>
                <option value="Plantation">Plantation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Any additional details about your land, soil type, water availability, etc."
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 p-2 border"
              ></textarea>
            </div>

            <div className="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 mt-1"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to Velaan's{' '}
                <a href="#" className="text-primary-600 hover:text-primary-800">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary-600 hover:text-primary-800">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div>
              <Button type="submit" variant="primary" size="lg" fullWidth>
                Submit Land Details
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnrollForm;