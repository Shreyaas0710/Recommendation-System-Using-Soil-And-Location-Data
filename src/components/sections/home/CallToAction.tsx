import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow With Velaan?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Whether you have land to enroll, want fresh organic produce, or are passionate about sustainable farming, we'd love to have you join our community.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/landowners">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Enroll Your Land
            </Button>
          </Link>
          <Link to="/store">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Shop Organic
            </Button>
          </Link>
          <Link to="/join">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Join Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;