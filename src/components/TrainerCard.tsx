// src/components/TrainerCard.tsx
import React from 'react';
import type { Trainer } from '../api/trainersAPI';

interface TrainerCardProps {
  trainer: Trainer;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => {
  return (
    <div className="relative group">
      {/* Glowing border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-30 group-hover:opacity-70 transition-opacity"></div>
      
      {/* Main card */}
      <div className="relative bg-gray-900 rounded-3xl p-6 h-full">
        {/* Image */}
        <div className="relative mb-6">
          <div className="aspect-square rounded-2xl overflow-hidden border-2 border-amber-500/30">
            <img 
              src={trainer.image} 
              alt={trainer.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {trainer.experience}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
            <div className="flex items-center gap-1 bg-amber-900/30 px-3 py-1 rounded-full">
              <span className="text-amber-400 font-bold">{trainer.rating}</span>
              <span className="text-gray-400 text-sm">({trainer.clients})</span>
            </div>
          </div>

          <div>
            <p className="text-gray-400 text-sm mb-2">Specializes in</p>
            <div className="flex flex-wrap gap-2">
              {trainer.speciality.map((spec, index) => (
                <span key={index} className="px-3 py-1 bg-amber-900/30 text-amber-300 rounded-full text-sm">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">{trainer.bio}</p>

          <button className="w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-xl hover:from-amber-500 hover:to-orange-500 transition-all">
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;