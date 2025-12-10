
import React from 'react';
import type { Exercise } from '../types/exercise';
import { Link } from 'react-router-dom';

type Props = {
  exercise: Exercise;
  basePath?: string; 
};

const ExerciseCard: React.FC<Props> = ({ exercise, basePath = '/exercises' }) => {
  return (
    <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-neutral-800">
      <div className="h-44 overflow-hidden">
        <img
          src={exercise.image}
          alt={exercise.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{exercise.name}</h3>
        <p className="text-sm text-gray-400 mt-2 line-clamp-2">{exercise.description}</p>

        <div className="flex items-center justify-between mt-4">
          <div className="text-xs text-amber-400 font-semibold">{exercise.type === 'free-hand' ? 'Free-hand' : 'Equipment'}</div>
          <Link
            to={`${basePath}/${exercise.bodyPart}/${exercise.id}`}
            className="text-xs px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded-md transition"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
