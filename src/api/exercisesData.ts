import type { Exercise, BodyPartInfo } from '../types/exercise';

// Body parts information
export const bodyParts: BodyPartInfo[] = [
  {
    id: 'cardio',
    name: 'Cardio',
    description: 'Exercises that improve cardiovascular endurance',
    mainMuscles: ['Heart', 'Lungs', 'Full Body'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
  },
  {
    id: 'chest',
    name: 'Chest',
    description: 'Pectoral muscles development',
    mainMuscles: ['Pectoralis Major', 'Pectoralis Minor'],
    image: 'https://images.unsplash.com/photo-1534367507877-0edd93bd013b?w=300&h=300&fit=crop'
  },
  {
    id: 'back',
    name: 'Back',
    description: 'Upper and middle back muscles',
    mainMuscles: ['Latissimus Dorsi', 'Rhomboids', 'Trapezius'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
  },
  {
    id: 'shoulders',
    name: 'Shoulders',
    description: 'Deltoid muscles development',
    mainMuscles: ['Anterior Deltoid', 'Lateral Deltoid', 'Posterior Deltoid'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
  },
  {
    id: 'biceps',
    name: 'Biceps',
    description: 'Front upper arm muscles',
    mainMuscles: ['Biceps Brachii', 'Brachialis'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
  },
  {
    id: 'triceps',
    name: 'Triceps',
    description: 'Back upper arm muscles',
    mainMuscles: ['Triceps Brachii'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
  },
  {
    id: 'calves',
    name: 'Calves',
    description: 'Lower leg muscles',
    mainMuscles: ['Gastrocnemius', 'Soleus'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
  },
  {
    id: 'forearms',
    name: 'Forearms',
    description: 'Lower arm muscles',
    mainMuscles: ['Flexors', 'Extensors'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
  },
  {
    id: 'neck',
    name: 'Neck',
    description: 'Cervical muscles',
    mainMuscles: ['Sternocleidomastoid', 'Trapezius (Upper)'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
  },
  {
    id: 'lower-back',
    name: 'Lower Back',
    description: 'Lumbar muscles',
    mainMuscles: ['Erector Spinae', 'Latissimus Dorsi (Lower)'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
  }
];

// Exercise data
export const exercisesData: Exercise[] = [
  // CHEST - Free Hand
  {
    id: '1',
    name: 'Push-ups',
    bodyPart: 'chest',
    type: 'free-hand',
    description: 'Classic chest exercise using body weight',
    equipment: 'None',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w-400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1598974357801-cbca100e5d10?w-400&h=300&fit=crop',
    reps: '12-20',
    sets: '3-4',
    tips: [
      'Place hands on elevated surface',
      'Keep elbows at 45-degree angle',
      'Go slow and controlled'
    ]
  },
  
  // CHEST - Equipment
  {
    id: '3',
    name: 'Barbell Bench Press',
    bodyPart: 'chest',
    type: 'equipment',
    description: 'Classic chest builder with barbell',
    equipment: 'Barbell, Bench, Weights',
    image: 'https://images.unsplash.com/photo-1534367507877-0edd93bd013b?w-400&h=300&fit=crop',
    reps: '8-12',
    sets: '3-4',
    tips: [
      'Arch your back slightly',
      'Grip slightly wider than shoulder width',
      'Lower bar to mid-chest'
    ]
  },
  
  // BICEPS - Free Hand
  {
    id: '4',
    name: 'Bodyweight Biceps Curls',
    bodyPart: 'biceps',
    type: 'free-hand',
    description: 'Using body resistance for biceps',
    equipment: 'None',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w-400&h=300&fit=crop',
    reps: '15-20',
    sets: '3',
    tips: [
      'Use door frame or table edge',
      'Lean back and pull yourself up',
      'Focus on biceps contraction'
    ]
  },
  
  // BICEPS - Equipment
  {
    id: '5',
    name: 'Dumbbell Curls',
    bodyPart: 'biceps',
    type: 'equipment',
    description: 'Isolated biceps exercise with dumbbells',
    equipment: 'Dumbbells',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w-400&h=300&fit=crop',
    reps: '10-15',
    sets: '3-4',
    tips: [
      'Keep elbows close to body',
      'Don\'t swing the weights',
      'Squeeze at the top'
    ]
  },
  
  // LEGS - Free Hand
  {
    id: '6',
    name: 'Bodyweight Squats',
    bodyPart: 'legs',
    type: 'free-hand',
    description: 'Fundamental leg exercise',
    equipment: 'None',
    image: 'https://images.unsplash.com/photo-1534367507877-0edd93bd013b?w-400&h=300&fit=crop',
    reps: '15-20',
    sets: '3-4',
    tips: [
      'Keep chest up and back straight',
      'Go parallel or below',
      'Push through heels'
    ]
  },
  
  // LEGS - Equipment
  {
    id: '7',
    name: 'Barbell Squats',
    bodyPart: 'legs',
    type: 'equipment',
    description: 'Compound leg exercise with barbell',
    equipment: 'Barbell, Squat Rack',
    image: 'https://images.unsplash.com/photo-1598974357801-cbca100e5d10?w-400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w-400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1534367507877-0edd93bd013b?w-400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1598974357801-cbca100e5d10?w-400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w-400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w-400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1534367507877-0edd93bd013b?w-400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1598974357801-cbca100e5d10?w-400&h=300&fit=crop',
    reps: '8-12',
    sets: '3',
    tips: [
      'Form inverted V with body',
      'Lower head between hands',
      'Keep legs straight'
    ]
  },
  
  // Add more exercises for each body part...
];