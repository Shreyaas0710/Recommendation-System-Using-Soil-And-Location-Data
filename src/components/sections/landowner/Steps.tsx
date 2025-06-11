import React from 'react';
import { landownerSteps } from '../../../data/steps';
import StepCard from '../../ui/StepCard';
import SectionHeading from '../../ui/SectionHeading';

const Steps: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="How It Works"
          subtitle="A simple 5-step process to turn your idle land into a source of passive income while contributing to sustainable agriculture."
        />
        <div className="mt-8 max-w-3xl">
          {landownerSteps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              isLast={index === landownerSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;