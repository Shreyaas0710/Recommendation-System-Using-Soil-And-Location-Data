import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: "Arjun Sharma",
      role: "Founder & CEO",
      bio: "Agricultural engineer with 15+ years of experience in sustainable farming practices across India.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Priya Patel",
      role: "Head of Operations",
      bio: "Former logistics expert who now manages Velaan's farm operations and supply chain.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Dr. Vikram Reddy",
      role: "Chief Agronomist",
      bio: "PhD in Soil Science with expertise in organic farming methods and land regeneration.",
      image: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Meera Krishnan",
      role: "Community Relations",
      bio: "Social worker passionate about connecting farmers, landowners, and consumers for mutual benefit.",
      image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div>
      <div className="bg-primary-700 text-white py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Velaan
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            We're on a mission to transform agriculture in India through sustainable organic farming practices.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Velaan began in 2020 when our founder, Arjun Sharma, noticed a growing disconnect between land ownership, 
                farming expertise, and access to healthy food in India.
              </p>
              <p className="text-gray-600 mb-4">
                With a background in agricultural engineering and sustainable farming, Arjun saw an opportunity to bridge
                these gaps by creating a model that benefits everyone involved – landowners, farmers, and consumers.
              </p>
              <p className="text-gray-600 mb-4">
                We started with just 5 acres of land and 3 farmers in Karnataka. Today, we manage over 500 acres across 
                South India, have trained 250+ farmers in organic practices, and deliver fresh produce to thousands of 
                customers weekly.
              </p>
              <p className="text-gray-600">
                Our name "Velaan" comes from the Tamil word for farming, representing our roots in South Indian 
                agricultural traditions while embracing modern sustainable practices.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2333293/pexels-photo-2333293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Velaan Farms"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Vision</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To revive uncultivated land through sustainable organic farming, creating a positive impact for landowners, 
                farmers, consumers, and the environment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>Convert idle land into productive organic farms</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>Train and employ farmers in organic practices</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>Provide access to fresh, chemical-free produce</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>Share profits equitably with all stakeholders</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To become India's leading sustainable agriculture company, transforming 10,000 acres of land by 2030 and 
                creating a model that can be replicated across the country.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>A thriving ecosystem of organic farms across India</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>5,000 trained organic farmers by 2030</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>Organic produce accessible to 1 million customers</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>Pioneering research in regenerative agriculture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Visit Our Office</h3>
                    <p className="text-gray-600">
                      123 Farming Street, Green City<br />
                      Bangalore, Karnataka - 560001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      hello@velaan.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden h-64">
                {/* This would be a map in a real implementation */}
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <p className="text-gray-600">Map would be displayed here</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              
              <form className="bg-white rounded-lg shadow-md p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 p-2 border"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 p-2 border"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 p-2 border"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 p-2 border"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <Button type="submit" variant="primary" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;