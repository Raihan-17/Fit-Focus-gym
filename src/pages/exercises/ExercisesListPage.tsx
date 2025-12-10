
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Exercise } from '../../types/exercise';
import ExerciseCard from '../../components/ExerciseCard';
import { exercisesAPI } from '../../api/exercisesData';

const ExercisesListPage: React.FC = () => {
  const { bodyPart } = useParams<{ bodyPart: string }>();
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [filter, setFilter] = useState<'all' | 'free-hand' | 'equipment'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!bodyPart) return;
      try {
        setLoading(true);
        const data = await exercisesAPI.getExercisesByBodyPart(bodyPart);
        if (mounted) setExercises(data);
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [bodyPart]);

  const filtered = exercises.filter((e) => (filter === 'all' ? true : e.type === filter));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-amber-300">Loading exercises...</div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-900 text-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8" data-aos="fade-down">
          <div>
            <h2 className="text-3xl font-bold capitalize">{bodyPart?.replace('-', ' ')}</h2>
            <p className="text-gray-400 mt-1">Showing {filtered.length} exercises</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-amber-600 text-white' : 'bg-neutral-800 text-gray-300'} transition`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('free-hand')}
              className={`px-4 py-2 rounded-md ${filter === 'free-hand' ? 'bg-amber-600 text-white' : 'bg-neutral-800 text-gray-300'} transition`}
            >
              Free-hand
            </button>
            <button
              onClick={() => setFilter('equipment')}
              className={`px-4 py-2 rounded-md ${filter === 'equipment' ? 'bg-amber-600 text-white' : 'bg-neutral-800 text-gray-300'} transition`}
            >
              Equipment
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="60">
          {filtered.map((ex) => (
            <ExerciseCard key={ex.id} exercise={ex} basePath="/exercises" />
          ))}
        </div>

        <div className="mt-10" data-aos="fade-up" data-aos-delay="120">
          <Link to="/exercises" className="text-sm text-amber-400 hover:underline">← Back to body parts</Link>
        </div>
      </div>
    </section>
  );
};

export default ExercisesListPage;
