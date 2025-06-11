import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Organic Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/30" />
      </div>

      {/* Content */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Turn Your Idle Land Into A Thriving Organic Farm
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-lg">
              Join Velaan to transform uncultivated land into productive organic farms. Create income, jobs, and healthy food while making a positive impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/landowners">
                <Button size="lg" variant="primary">
                  Enroll Your Land
                </Button>
              </Link>
              <Link to="/store">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Buy Organic Produce
                </Button>
              </Link>
              <Link to="/join">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Join Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;