import React from 'react';

const StatCard = ({ number, label }) => {
  return (
    <div className="bg-card rounded-3xl p-6 transform hover:scale-105 transition-all duration-300 group">
      <div className="flex flex-col">
        <span className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
          {number}+
        </span>
        <span className="text-muted-foreground text-sm">{label}</span>
      </div>
    </div>
  );
};

export default StatCard;
