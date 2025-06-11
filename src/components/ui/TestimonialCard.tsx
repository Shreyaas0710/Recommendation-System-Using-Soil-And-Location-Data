import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialType } from '../../types';

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <Quote 
        className="absolute top-4 right-4 text-primary-200" 
        size={32} 
      />
      <p className="text-gray-700 italic mb-6">{testimonial.content}</p>
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;