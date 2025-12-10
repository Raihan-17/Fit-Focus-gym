
import React from 'react';
import type { BodyPartInfo } from '../types/exercise';
import { Link } from 'react-router-dom';

type Props = {
  part: BodyPartInfo;
};

const BodyPartCard: React.FC<Props> = ({ part }) => {
  return (
    <Link
      to={`/exercises/${part.id}`}
      className="relative block overflow-hidden rounded-2xl shadow-lg group"
    >
      <div className="w-full h-48 sm:h-64 lg:h-72 overflow-hidden">
        <img
          src={part.image}
          alt={part.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors" />

      
      <div className="absolute left-4 bottom-4">
        <div className="inline-flex items-center gap-3">
          <div className="px-5 py-3 rounded-full bg-amber-600/90 text-sm font-semibold text-white">
            {part.name}
          </div>
        </div>
        <p className="mt-2 max-w-xs text-sm text-gray-200 hidden sm:block">
          {part.description}
        </p>
      </div>
    </Link>
  );
};

export default BodyPartCard;
