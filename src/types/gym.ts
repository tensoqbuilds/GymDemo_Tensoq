export interface GymConfig {
  gymName: string;
  tagline: string;
  city: string;
  state: string;
  neighborhood: string;
  fullAddress: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  email: string;
  openingHoursWeekday: string;
  openingHoursWeekend: string;
  mapsUrl: string;
  pricing: {
    monthly: {
      starter: number;
      pro: number;
      elite: number;
    };
    quarterly: {
      starter: number;
      pro: number;
      elite: number;
    };
  };
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

export interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  focus: string;
}

export interface TransformationItem {
  id: string;
  name: string;
  age: number;
  result: string;
  duration: string;
  category: string;
  testimonial: string;
  stats: {
    fatLoss?: string;
    muscleGain?: string;
    strengthIncrease?: string;
  };
  image: string;
}

export interface TrainerItem {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  certifications: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  quote: string;
  rating: number;
  duration: string;
  metric: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect?: string;
}
