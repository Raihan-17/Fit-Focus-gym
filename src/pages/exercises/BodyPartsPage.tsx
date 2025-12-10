
import React, { useEffect, useState } from 'react';
import BodyPartCard from '../../components/BodyPartCard';
import type { BodyPartInfo } from '../../types/exercise';
import { exercisesAPI } from '../../api/exercisesData';

const BodyPartsPage: React.FC = () => {
  const [parts, setParts] = useState<BodyPartInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await exercisesAPI.getBodyParts();
        if (mounted) setParts(data);
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-amber-300">Loading body parts...</div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-900 text-gray-200 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold text-gray-300">Free exercise suggestions</h1>
          <p className="mt-3 text-gray-400">Pick a body part to see curated free-hand & equipment exercises</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="80">
          {parts.map((p) => (
            <BodyPartCard key={p.id} part={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BodyPartsPage;
