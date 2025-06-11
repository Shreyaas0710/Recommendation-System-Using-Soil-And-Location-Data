import React from 'react';
import { testimonials } from '../../../data/testimonials';
import TestimonialCard from '../../ui/TestimonialCard';
import SectionHeading from '../../ui/SectionHeading';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Hear From Our Community"
          subtitle="Success stories from the people who make Velaan possible - landowners, farmers, and customers."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;