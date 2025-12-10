

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import TrainerCard from "../components/TrainerCard";
import trainersAPI, { Trainer } from "../api/trainersAPI";

import "swiper/css";
import "swiper/css/effect-coverflow";

const TrainersCarousel: React.FC = () => {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await trainersAPI.getAllTrainers();
        setTrainers(data);
      } catch (err) {
        console.error("Failed to load trainers:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-amber-600/20 border-t-amber-500 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-amber-300">Loading trainers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 py-5">
      <div className="text-center my-14">
        <h1 className="text-5xl font-bold text-red-900 mb-3">Our Trainers</h1>
        <p className="text-red-700 text-lg">
          Expert guidance for your fitness journey
        </p>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 150,
          modifier: 1.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 20 },
          480: { slidesPerView: 1.4, spaceBetween: 25 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2.5, spaceBetween: 40 },
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="max-w-[90%] mx-auto px-4 pb-10"
      >
        {trainers.map((trainer) => (
          <SwiperSlide
            key={trainer.id}
            className="!w-72 sm:!w-80 flex items-center justify-center"
          >
            <TrainerCard trainer={trainer} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrainersCarousel;
