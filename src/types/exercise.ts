export type BodyPart = 
  | 'cardio'
  | 'biceps'
  | 'triceps'
  | 'chest'
  | 'back'
  | 'lower-back'
  | 'legs'
  | 'calves'
  | 'abs'
  | 'neck'
  | 'forearms'
  | 'shoulders';

export type ExerciseType = 'free-hand' | 'equipment';

export interface Exercise {
  id: string;
  name: string;
  bodyPart: BodyPart;
  type: ExerciseType;
  description: string;
  equipment?: string;
  image: string;
  reps: string;
  sets: string;
  tips: string[];
}

export interface BodyPartInfo {
  id: BodyPart;
  name: string;
  description: string;
  mainMuscles: string[];
  image: string;
}