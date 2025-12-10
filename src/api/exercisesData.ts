import type { Exercise, BodyPartInfo } from '../types/exercise';

export const bodyParts: BodyPartInfo[] = [
  {
    id: 'cardio',
    name: 'Cardio',
    description: 'Exercises that improve cardiovascular endurance',
    mainMuscles: ['Heart', 'Lungs', 'Full Body'],
    image: 'https://plus.unsplash.com/premium_photo-1683121008092-7c4e5c75f2ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyZGlvfGVufDB8fDB8fHww'
  },
  {
    id: 'chest',
    name: 'Chest',
    description: 'Pectoral muscles development',
    mainMuscles: ['Pectoralis Major', 'Pectoralis Minor'],
    image: 'https://plus.unsplash.com/premium_photo-1663036928517-a612859220b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoZXN0JTIwbXVzY2xlfGVufDB8fDB8fHww'
  },
  {
    id: 'back',
    name: 'Back',
    description: 'Upper and middle back muscles',
    mainMuscles: ['Latissimus Dorsi', 'Rhomboids', 'Trapezius'],
    image: 'https://images.unsplash.com/photo-1630415188026-ff56c9b2738c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFjayUyMGV4ZXJjaXplfGVufDB8fDB8fHww'
  },
  {
    id: 'shoulders',
    name: 'Shoulders',
    description: 'Deltoid muscles development',
    mainMuscles: ['Anterior Deltoid', 'Lateral Deltoid', 'Posterior Deltoid'],
    image: 'https://images.unsplash.com/photo-1683586861092-596182a95463?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob3VsZGVyJTIwZXhlcmNpemV8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 'biceps',
    name: 'Biceps',
    description: 'Front upper arm muscles',
    mainMuscles: ['Biceps Brachii', 'Brachialis'],
    image: 'https://images.unsplash.com/photo-1584952449211-6b1c58806d09?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnljZXBzJTIwYW5kJTIwdHJ5Y2Vwc3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 'triceps',
    name: 'Triceps',
    description: 'Back upper arm muscles',
    mainMuscles: ['Triceps Brachii'],
    image: 'https://plus.unsplash.com/premium_photo-1661596487728-54e115969d8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJpY2Vwc3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 'abs',
    name: 'Abs',
    description: 'Core abdominal muscles',
    mainMuscles: ['Rectus Abdominis', 'Obliques', 'Transverse Abdominis'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
  },
  {
    id: 'legs',
    name: 'Legs',
    description: 'Lower body muscles',
    mainMuscles: ['Quadriceps', 'Hamstrings', 'Glutes'],
    image: 'https://images.unsplash.com/photo-1614396648745-d5de9c9e037e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJzfGVufDB8fDB8fHww'
  },
  {
    id: 'calves',
    name: 'Calves',
    description: 'Lower leg muscles',
    mainMuscles: ['Gastrocnemius', 'Soleus'],
    image: 'https://images.unsplash.com/photo-1630877268428-616cc533239a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsdmVzJTIwbXVzY2xlfGVufDB8fDB8fHww'
  },
  {
    id: 'forearms',
    name: 'Forearms',
    description: 'Lower arm muscles',
    mainMuscles: ['Flexors', 'Extensors'],
    image: 'https://images.unsplash.com/photo-1692419978726-fd68d368be7f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZWFybXN8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 'neck',
    name: 'Neck',
    description: 'Cervical muscles',
    mainMuscles: ['Sternocleidomastoid', 'Trapezius (Upper)'],
    image: 'https://plus.unsplash.com/premium_photo-1726869729637-05f0a0cc9a72?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5lY2slMjBtdXNjbGV8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 'lower-back',
    name: 'Lower Back',
    description: 'Lumbar muscles',
    mainMuscles: ['Erector Spinae', 'Latissimus Dorsi (Lower)'],
    image: 'https://images.unsplash.com/photo-1730157464700-08647c2f2536?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG93ZXIlMjBiYWNrJTIwbXVzY2xlfGVufDB8fDB8fHww'
  }
];

// Exercise data
export const exercises: Exercise[] = [
 
  {
    id: '1',
    name: 'Push-ups',
    bodyPart: 'chest',
    type: 'free-hand',
    description: 'Classic chest exercise using body weight',
    equipment: 'None',
    image: 'https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVzaHVwc3xlbnwwfHwwfHx8MA%3D%3D',
    reps: '10-15',
    sets: '3-4',
    tips: [
      'Keep your body straight from head to heels',
      'Lower until your chest almost touches the floor',
      'Engage your core throughout the movement'
    ]
  },
  {
    id: '2',
    name: 'Incline Push-ups',
    bodyPart: 'chest',
    type: 'free-hand',
    description: 'Easier variation for beginners',
    equipment: 'Bench or elevated surface',
    image: 'https://media.istockphoto.com/id/1168317781/photo/fitness-athlete-training-push-ups-in-nature.jpg?s=612x612&w=0&k=20&c=BECnEmqxiCqtlXUYh_BwgmqxBmr6Xxh2DDtXR4OP6So=',
    reps: '12-20',
    sets: '3-4',
    tips: [
      'Place hands on elevated surface',
      'Keep elbows at 45-degree angle',
      'Go slow and controlled'
    ]
  },
  
  
  {
    id: '3',
    name: 'Barbell Bench Press',
    bodyPart: 'chest',
    type: 'equipment',
    description: 'Classic chest builder with barbell',
    equipment: 'Barbell, Bench, Weights',
    image: 'https://media.istockphoto.com/id/1028273740/photo/man-during-bench-press-exercise.jpg?s=612x612&w=0&k=20&c=pTNDqP6UbgTm39u9GHFqDiH13o1cm1l4xYHBdoiSdkg=',
    reps: '8-12',
    sets: '3-4',
    tips: [
      'Arch your back slightly',
      'Grip slightly wider than shoulder width',
      'Lower bar to mid-chest'
    ]
  },
  
 
  {
    id: '4',
    name: 'Bodyweight Biceps Curls',
    bodyPart: 'biceps',
    type: 'free-hand',
    description: 'Using body resistance for biceps',
    equipment: 'None',
    image: 'https://media.istockphoto.com/id/2211262310/photo/parallel-bar-dips-cross-discipline.jpg?s=612x612&w=0&k=20&c=eiksXfs8CqTCZZFVCiQGhwNXnC2T8EANgNMAXv5EAeM=',
    reps: '15-20',
    sets: '3',
    tips: [
      'Use door frame or table edge',
      'Lean back and pull yourself up',
      'Focus on biceps contraction'
    ]
  },
  
  
  {
    id: '5',
    name: 'Dumbbell Curls',
    bodyPart: 'biceps',
    type: 'equipment',
    description: 'Isolated biceps exercise with dumbbells',
    equipment: 'Dumbbells',
    image: 'https://media.istockphoto.com/id/2194286923/photo/strong-sportswoman-exercising-biceps-with-dumbbell.jpg?s=612x612&w=0&k=20&c=hwTdL0xTPD04P8LWpQfyRLSnC20sLXzNuifmh4_H3N0=',
    reps: '10-15',
    sets: '3-4',
    tips: [
      'Keep elbows close to body',
      'Don\'t swing the weights',
      'Squeeze at the top'
    ]
  },
  
  
  {
    id: '6',
    name: 'Bodyweight Squats',
    bodyPart: 'legs',
    type: 'free-hand',
    description: 'Fundamental leg exercise',
    equipment: 'None',
    image: 'https://media.istockphoto.com/id/1327765561/photo/man-exercising-at-home.jpg?s=612x612&w=0&k=20&c=gLyU7kx_Aq_Z54hBZaDjQZB6Tiltuje8wAztlYpVlq8=',
    reps: '15-20',
    sets: '3-4',
    tips: [
      'Keep chest up and back straight',
      'Go parallel or below',
      'Push through heels'
    ]
  },
  
  
  {
    id: '7',
    name: 'Barbell Squats',
    bodyPart: 'legs',
    type: 'equipment',
    description: 'Compound leg exercise with barbell',
    equipment: 'Barbell, Squat Rack',
    image: 'https://media.istockphoto.com/id/1149242776/photo/mature-strong-man-lifting-weights-at-cross-training.jpg?s=612x612&w=0&k=20&c=pqhlsg9QHdSccbjzL0aVTbELRibJj6levS9N7jKDHy0=',
    reps: '8-12',
    sets: '3-4',
    tips: [
      'Use proper form before adding weight',
      'Keep core tight',
      'Don\'t let knees cave in'
    ]
  },
  
  // ABS - Free Hand
  {
    id: '8',
    name: 'Plank',
    bodyPart: 'abs',
    type: 'free-hand',
    description: 'Core stabilization exercise',
    equipment: 'None',
    image: 'https://media.istockphoto.com/id/1296318064/photo/exercise-at-home.jpg?s=612x612&w=0&k=20&c=0rSYKzCve-BTkx7463OszLsI7yk5cbku0ecXpAkoHQ4=',
    reps: '30-60 seconds',
    sets: '3',
    tips: [
      'Keep body in straight line',
      'Engage glutes and core',
      'Don\'t let hips sag'
    ]
  },
  
  // ABS - Equipment
  {
    id: '9',
    name: 'Cable Crunches',
    bodyPart: 'abs',
    type: 'equipment',
    description: 'Resisted ab exercise',
    equipment: 'Cable Machine',
    image: 'https://media.istockphoto.com/id/1266230423/photo/sportsman-doing-exercises-with-cable-machine-tricep-in-the-fitness-gym-fit-exercising-focus.jpg?s=612x612&w=0&k=20&c=2KjExH5GXd48R7fjCBHJFWZI7WmenK-JSFyWkR-Ovg4=',
    reps: '15-20',
    sets: '3',
    tips: [
      'Kneel below cable attachment',
      'Crunch downward, don\'t pull with arms',
      'Focus on contracting abs'
    ]
  },
  
  // CARDIO - Free Hand
  {
    id: '10',
    name: 'Jumping Jacks',
    bodyPart: 'cardio',
    type: 'free-hand',
    description: 'Full body cardio exercise',
    equipment: 'None',
    image: 'https://media.istockphoto.com/id/1320519521/photo/practicing-a-high-intensity-interval-training.jpg?s=612x612&w=0&k=20&c=OzcIb9AT86O6LB0P-npNF6AskOMzSndPG4MwGuSbYYk=',
    reps: '30-60 seconds',
    sets: '3-5',
    tips: [
      'Maintain steady rhythm',
      'Land softly on balls of feet',
      'Keep arms and legs coordinated'
    ]
  },
  
  // CARDIO - Equipment
  {
    id: '11',
    name: 'Treadmill Running',
    bodyPart: 'cardio',
    type: 'equipment',
    description: 'Running on treadmill',
    equipment: 'Treadmill',
    image: 'https://media.istockphoto.com/id/2201025242/photo/determined-black-sportswoman-running-on-treadmill-in-a-gym.jpg?s=612x612&w=0&k=20&c=LcW5NIqIMDl1ckSJHgVd-OkWo9ZjkGUkvDnwE0HP3Ss=',
    reps: '20-30 minutes',
    sets: '1',
    tips: [
      'Start with 5-minute warm-up',
      'Maintain good posture',
      'Use incline for intensity'
    ]
  },
  
  // BACK - Free Hand
  {
    id: '12',
    name: 'Superman Exercise',
    bodyPart: 'back',
    type: 'free-hand',
    description: 'Lower back strengthener',
    equipment: 'None',
    image: 'https://media.istockphoto.com/id/2158547363/photo/a-fit-asian-man-does-superman-back-extensions-on-a-black-mat-isometric-exercise-working-out.jpg?s=612x612&w=0&k=20&c=tYpjosjFhCEB5-A7O7tbCYLC-pXAiHKO4MnD_uZT4LI=',
    reps: '12-15',
    sets: '3',
    tips: [
      'Lie flat on stomach',
      'Lift arms and legs simultaneously',
      'Hold for 2 seconds at top'
    ]
  },
  
  // BACK - Equipment
  {
    id: '13',
    name: 'Lat Pulldown',
    bodyPart: 'back',
    type: 'equipment',
    description: 'Upper back developer',
    equipment: 'Cable Machine',
    image: 'https://media.istockphoto.com/id/2202976690/photo/black-sportsman-exercising-on-lat-pull-down-machine-in-a-gym.jpg?s=612x612&w=0&k=20&c=j63rkkQyTU0o7gHDLTFp8DtMVPl-vt7G0Berz1393rY=',
    reps: '10-12',
    sets: '3-4',
    tips: [
      'Pull bar to chest',
      'Squeeze shoulder blades together',
      'Control the negative'
    ]
  },
  
  // SHOULDERS - Free Hand
  {
    id: '14',
    name: 'Pike Push-ups',
    bodyPart: 'shoulders',
    type: 'free-hand',
    description: 'Shoulder-focused push-up variation',
    equipment: 'None',
    image: 'https://media.istockphoto.com/id/1310995904/photo/fitness-man-stretches-at-the-floor.jpg?s=612x612&w=0&k=20&c=3mkZltxvCQlDO7lRPM0H0IovIjbhn_8yBM9jfgSTWGo=',
    reps: '8-12',
    sets: '3',
    tips: [
      'Form inverted V with body',
      'Lower head between hands',
      'Keep legs straight'
    ]
  },
  
];
export const exercisesAPI = {
  getAllExercises: async (): Promise<Exercise[]> => {
    await new Promise((r) => setTimeout(r, 200));
    return [...exercises];
  },
  getExercisesByBodyPart: async (bodyPart: string): Promise<Exercise[]> => {
    await new Promise((r) => setTimeout(r, 150));
    return exercises.filter((e) => e.bodyPart === bodyPart);
  },
  getExerciseById: async (id: string): Promise<Exercise | undefined> => {
    await new Promise((r) => setTimeout(r, 120));
    return exercises.find((e) => e.id === id);
  },
  getBodyParts: async (): Promise<BodyPartInfo[]> => {
    await new Promise((r) => setTimeout(r, 150));
    return [...bodyParts];
  },
};

export default exercisesAPI;