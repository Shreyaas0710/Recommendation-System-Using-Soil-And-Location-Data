import React from 'react';
import { landownerFaqs } from '../../../data/faqs';
import Accordion from '../../ui/Accordion';
import SectionHeading from '../../ui/SectionHeading';

const FAQ: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Get answers to common questions about enrolling your land with Velaan."
        />
        <div className="mt-8 max-w-3xl">
          <Accordion faqs={landownerFaqs} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;