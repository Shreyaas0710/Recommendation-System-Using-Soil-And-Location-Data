import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqType } from '../../types';

interface AccordionItemProps {
  faq: FaqType;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-900"
        onClick={onClick}
      >
        <span>{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 pr-10">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  faqs: FaqType[];
}

const Accordion: React.FC<AccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className="border-t border-gray-200">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={faq.id}
          faq={faq}
          isOpen={index === openIndex}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;