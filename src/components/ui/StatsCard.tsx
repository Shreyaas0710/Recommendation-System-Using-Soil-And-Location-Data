import React from 'react';
import * as LucideIcons from 'lucide-react';
import { StatType } from '../../types';

interface StatsCardProps {
  stat: StatType;
}

const StatsCard: React.FC<StatsCardProps> = ({ stat }) => {
  const IconComponent = (LucideIcons as any)[stat.icon];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
          {IconComponent && <IconComponent className="w-8 h-8 text-primary-600" />}
        </div>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
      <p className="text-gray-600">{stat.label}</p>
    </div>
  );
};

export default StatsCard;