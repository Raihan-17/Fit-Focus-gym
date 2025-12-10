export interface Trainer {
  id: number;
  name: string;
  image: string;
  experience: string;
  speciality: string[];
  achievements: string[];
  bio: string;
  certification: string[];
  rating: number;
  clients: number;
}

const trainersData: Trainer[] = [
  {
    id: 1,
    name: "Mike Johnson",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=800&fit=crop&crop=face",
    experience: "10+ years",
    speciality: ["Weight Training", "Bodybuilding", "Strength"],
    achievements: ["IFBB Professional Bodybuilder"],
    bio: "Transform your body with science-backed strength programs",
    certification: ["NASM-CPT", "CSCS"],
    rating: 4.9,
    clients: 420
  },
  {
    id: 2,
    name: "Sarah Williams",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&h=800&fit=crop&crop=face",
    experience: "8 years",
    speciality: ["Yoga", "Pilates", "Flexibility"],
    achievements: ["500-hour RYT Certified"],
    bio: "Master the mind-body connection",
    certification: ["RYT-500", "PMA"],
    rating: 4.8,
    clients: 350
  },
  {
    id: 3,
    name: "Alex Chen",
    image: "https://images.unsplash.com/photo-1604480133080-602261a680df?w=600&auto=format&fit=crop&q=60",
    experience: "12 years",
    speciality: ["CrossFit", "HIIT", "Functional"],
    achievements: ["CrossFit Level 3 Trainer"],
    bio: "Push your limits with high-intensity training",
    certification: ["CrossFit L3", "OPEX"],
    rating: 4.9,
    clients: 520
  },
  {
    id: 4,
    name: "Jessica Parker",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&crop=face",
    experience: "7 years",
    speciality: ["Nutrition", "Weight Loss", "Cardio"],
    achievements: ["Precision Nutrition Level 2"],
    bio: "Sustainable weight loss through nutrition",
    certification: ["PN L2", "ISSN"],
    rating: 4.7,
    clients: 380
  },
  {
    id: 5,
    name: "David Rodriguez",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=600&auto=format&fit=crop&q=60",
    experience: "15 years",
    speciality: ["Senior Fitness", "Rehabilitation"],
    achievements: ["Physical Therapist Assistant"],
    bio: "Age-appropriate fitness for lifelong mobility",
    certification: ["PTA", "FMS L2"],
    rating: 4.9,
    clients: 410
  },
  {
    id: 6,
    name: "Emily Thompson",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&h=800&fit=crop&crop=face",
    experience: "9 years",
    speciality: ["Prenatal", "Postpartum", "Women's Health"],
    achievements: ["Pre/Post Natal Specialist"],
    bio: "Women's health through all life stages",
    certification: ["AFPA", "GGS"],
    rating: 4.8,
    clients: 320
  }
];

export const trainersAPI = {
  getAllTrainers: async (): Promise<Trainer[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [...trainersData];
  }
};

export default trainersAPI;
