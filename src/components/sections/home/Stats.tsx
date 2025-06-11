import React from 'react';
import { stats } from '../../../data/stats';
import StatsCard from '../../ui/StatsCard';
import SectionHeading from '../../ui/SectionHeading';

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Impact"
          subtitle="Transforming agriculture, one acre at a time. Here's what we've achieved so far."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatsCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;