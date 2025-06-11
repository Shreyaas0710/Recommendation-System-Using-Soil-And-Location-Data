import React from 'react';
import * as LucideIcons from 'lucide-react';
import { StepType } from '../../types';

interface StepCardProps {
  step: StepType;
  isLast?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, isLast = false }) => {
  const IconComponent = (LucideIcons as any)[step.icon];

  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white">
          {step.id}
        </div>
        {!isLast && <div className="h-full w-0.5 bg-primary-300 mt-2"></div>}
      </div>
      <div className="pb-8">
        <div className="flex items-center mb-2">
          {IconComponent && <IconComponent className="mr-2 text-primary-600" size={20} />}
          <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
        </div>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </div>
  );
};

export default StepCard;