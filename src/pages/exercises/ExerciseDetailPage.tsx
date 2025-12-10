
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Exercise } from '../../types/exercise';
import { exercisesAPI } from '../../api/exercisesData';

const ExerciseDetailPage: React.FC = () => {
  const { id, bodyPart } = useParams<{ id: string; bodyPart: string }>();
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!id) return;
      try {
        const e = await exercisesAPI.getExerciseById(id);
        if (mounted) setExercise(e ?? null);
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-amber-400">Loading...</div>;
  if (!exercise) return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-300">Exercise not found</div>;

  return (
    <section className="min-h-screen bg-gray-900 text-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to={`/exercises/${bodyPart}`} className="text-sm text-amber-400 hover:underline">← Back</Link>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up">
          <div className="md:col-span-1">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={exercise.image} alt={exercise.name} className="w-full h-64 object-cover" />
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-3xl font-extrabold text-white">{exercise.name}</h1>
            <div className="mt-2 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-amber-600 text-black text-xs font-semibold">{exercise.type === 'free-hand' ? 'Free-hand' : 'Equipment'}</span>
              {exercise.equipment && <span className="text-sm text-gray-400">Equipment: {exercise.equipment}</span>}
            </div>

            <p className="mt-4 text-gray-300">{exercise.description}</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-neutral-800 p-4 rounded-lg">
                <h4 className="text-sm text-gray-400">Reps</h4>
                <div className="mt-1 text-white font-semibold">{exercise.reps}</div>
              </div>
              <div className="bg-neutral-800 p-4 rounded-lg">
                <h4 className="text-sm text-gray-400">Sets</h4>
                <div className="mt-1 text-white font-semibold">{exercise.sets}</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm text-gray-400">Tips</h4>
              <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
                {exercise.tips.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>

            <div className="mt-8">
              <button className="px-6 py-2 bg-amber-600 text-black rounded-lg font-semibold hover:bg-amber-500 transition">
                Start Workout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExerciseDetailPage;
