import { GymConfig, ProgramItem, TransformationItem, TrainerItem, TestimonialItem, FaqItem, GalleryItem } from '../types/gym';
import { IMAGES } from '../assets/images';

export const initialGymConfig: GymConfig = {
  gymName: "IRON DISTRICT FITNESS",
  tagline: "Train Hard. Look Different.",
  city: "Hyderabad",
  state: "Telangana",
  neighborhood: "Banjara Hills",
  fullAddress: "Road No. 12, Opposite MLA Colony, Banjara Hills, Hyderabad, Telangana 500034",
  phone: "+919999999999",
  displayPhone: "+91 99999 99999",
  whatsappNumber: "919999999999",
  whatsappDefaultMessage: "Hi, I'm interested in joining Iron District Fitness. I'd like to book my free trial and know more about membership plans.",
  email: "hello@irondistrictfitness.in",
  openingHoursWeekday: "06:00 AM – 11:00 PM",
  openingHoursWeekend: "07:00 AM – 08:00 PM",
  mapsUrl: "https://maps.google.com/?q=Banjara+Hills+Hyderabad",
  pricing: {
    monthly: {
      starter: 1999,
      pro: 3499,
      elite: 6999,
    },
    quarterly: {
      starter: 4999,
      pro: 8999,
      elite: 17999,
    },
  },
  socials: {
    instagram: "https://instagram.com/irondistrictfitness",
    facebook: "https://facebook.com/irondistrictfitness",
    youtube: "https://youtube.com/@irondistrictfitness",
  },
};

export const gymPrograms: ProgramItem[] = [
  {
    id: "strength-hypertrophy",
    title: "Strength & Hypertrophy",
    subtitle: "Build dense muscle. Increase compound power.",
    category: "Muscle Building",
    description: "Periodized resistance training utilizing barbell mechanics, isolation work, and progressive overload tracking to pack on lean muscle.",
    tags: ["Powerlifting", "Hypertrophy", "Form Precision"],
    image: IMAGES.barbellDeadlift,
    focus: "Hypertrophy & Max Strength",
  },
  {
    id: "fat-loss-conditioning",
    title: "Fat Loss & Metabolic Reset",
    subtitle: "High-yield metabolic conditioning & nutritional clarity.",
    category: "Body Recomposition",
    description: "High-density resistance workouts paired with science-backed calorie tracking to strip visceral fat while protecting functional muscle.",
    tags: ["Fat Burn", "HIIT Hybrid", "Nutrition Macro Guide"],
    image: IMAGES.gymFacility,
    focus: "Fat Loss & Conditioning",
  },
  {
    id: "personal-coaching",
    title: "1-on-1 Personal Coaching",
    subtitle: "Dedicated mentor, custom bio-mechanics, zero guesswork.",
    category: "Personal Training",
    description: "Private coaching tailored to your schedule, physical limitations, posture corrections, and relentless weekly accountability check-ins.",
    tags: ["Private Suite", "Weekly Scans", "Bespoke Diet"],
    image: IMAGES.ptCoaching,
    focus: "Tailored 1-on-1 Mentorship",
  },
  {
    id: "functional-mobility",
    title: "Functional Fitness & Core",
    subtitle: "Pain-free athletic movement, hip drive, and spinal health.",
    category: "Mobility & Posture",
    description: "Restore joint mobility, undo desk-work stiffness, and develop durable rotational power designed for everyday corporate and sport agility.",
    tags: ["Kettlebells", "Thoracic Mobility", "Injury Prevention"],
    image: IMAGES.heroAthlete,
    focus: "Mobility & Longevity",
  },
  {
    id: "athlete-performance",
    title: "Athlete Performance Protocol",
    subtitle: "Explosive speed, vertical leap, and VO2 Max stamina.",
    category: "Sports Conditioning",
    description: "Engineered for marathoners, cricketers, and competitive sports enthusiasts demanding speed, deceleration stability, and explosive power.",
    tags: ["Sled Pushes", "Plyometrics", "VO2 Max"],
    image: IMAGES.communityWorkout,
    focus: "Athletic Conditioning",
  },
];

export const gymTransformations: TransformationItem[] = [
  {
    id: "arjun-sharma",
    name: "Arjun Verma",
    age: 24,
    result: "-12 KG Fat Loss",
    duration: "16 Weeks",
    category: "Body Recomposition",
    testimonial: "Working as a software architect in Hitec City left me exhausted with poor posture. In 16 weeks, the structured nutrition and coaching helped me drop 12 kg while increasing my bench press by 25 kg.",
    stats: {
      fatLoss: "12 kg lost",
      muscleGain: "Lean definition",
      strengthIncrease: "+35% total strength",
    },
    image: IMAGES.ptCoaching,
  },
  {
    id: "priya-reddy",
    name: "Priya Reddy",
    age: 27,
    result: "-8 KG & Toned",
    duration: "14 Weeks",
    category: "Women's Strength & Fat Loss",
    testimonial: "I was hesitant about lifting heavy weights. Neha and Rahul broke every myth for me. I dropped 8 kg of stubborn fat, regained my core strength, and feel more energetic than I did in college.",
    stats: {
      fatLoss: "8 kg lost",
      muscleGain: "Toned core",
      strengthIncrease: "First unassisted pull-up",
    },
    image: IMAGES.gymFacility,
  },
  {
    id: "rohan-kapoor",
    name: "Rohan Kapoor",
    age: 31,
    result: "+6 KG Lean Muscle",
    duration: "20 Weeks",
    category: "Hypertrophy & Strength",
    testimonial: "Spent 3 years spinning my wheels at generic budget gyms with zero results. Switching to Iron District's progressive overload protocol was a revelation. 6 kg of clean muscle gained in 5 months.",
    stats: {
      fatLoss: "-4% body fat",
      muscleGain: "+6 kg lean mass",
      strengthIncrease: "Deadlift 180 kg",
    },
    image: IMAGES.heroAthlete,
  },
];

export const gymTrainers: TrainerItem[] = [
  {
    id: "rahul-mehta",
    name: "Rahul Mehta",
    role: "Head Strength Coach",
    experience: "8+ Years Experience",
    specialty: "Powerlifting & Barbell Biomechanics",
    certifications: ["CSCS (NSCA)", "K11 Master Trainer", "IPF National Competitor"],
    image: IMAGES.trainerRahul,
  },
  {
    id: "neha-sharma",
    name: "Neha Sharma",
    role: "Transformation & Nutrition Lead",
    experience: "6+ Years Experience",
    specialty: "Female Body Recomposition & Metabolic Health",
    certifications: ["Precision Nutrition L2", "ACE Certified PT", "Pre/Post Natal Specialist"],
    image: IMAGES.ptCoaching,
  },
  {
    id: "karan-patel",
    name: "Karan Patel",
    role: "High-Performance Coach",
    experience: "7+ Years Experience",
    specialty: "Athletic Conditioning & Hypertrophy",
    certifications: ["EXOS Performance Specialist", "CrossFit L2 Coach", "FMS Mobility L1"],
    image: IMAGES.heroAthlete,
  },
];

export const gymTestimonials: TestimonialItem[] = [
  {
    id: "aditya-k",
    author: "Aditya Kumar",
    role: "Senior Product Manager",
    quote: "I had joined gyms before, but this was the first place where I actually stayed consistent. The coaching completely changed my approach to consistency, recovery, and daily nutrition.",
    rating: 5,
    duration: "Member for 11 months",
    metric: "Squat +40kg · 14% Body Fat",
  },
  {
    id: "divya-s",
    author: "Divya Suryanarayana",
    role: "Doctor & Triathlete",
    quote: "The facility hygiene, Rogue barbell equipment, and respectful training culture in Banjara Hills are completely unmatched. It feels like an Olympic weight room with luxury hospitality.",
    rating: 5,
    duration: "Member for 18 months",
    metric: "Half-Marathon PR · Injury-Free",
  },
  {
    id: "vikram-c",
    author: "Vikram Chandrasekhar",
    role: "Founder, Fintech Startup",
    quote: "Personal training with Rahul gave me my sanity back during our fundraising round. You walk in, the plan is prepared, your form is corrected, and you leave having crushed your session.",
    rating: 5,
    duration: "Member for 8 months",
    metric: "-10kg Fat · +8kg Bench Press",
  },
  {
    id: "shreya-m",
    author: "Shreya Mukherjee",
    role: "Creative Director",
    quote: "Zero intimidation, 100% science. The coaches remember your name, track your progressive numbers on the app, and genuinely care if you show up. Hands down the best gym in Hyderabad.",
    rating: 5,
    duration: "Member for 14 months",
    metric: "Consistency 4.8x/week",
  },
];

export const gymGallery: GalleryItem[] = [
  {
    id: "g1",
    title: "Precision Rogue Power Racks & Olympic Platforms",
    category: "Strength Zone",
    image: IMAGES.gymFacility,
  },
  {
    id: "g2",
    title: "Championship Barbell & Deadlift Station",
    category: "Free Weights",
    image: IMAGES.barbellDeadlift,
  },
  {
    id: "g3",
    title: "Dedicated 1-on-1 Private Coaching Suite",
    category: "Personal Training",
    image: IMAGES.ptCoaching,
  },
  {
    id: "g4",
    title: "Head Coach Rahul Mehta Overseeing Form Calibration",
    category: "Coaching",
    image: IMAGES.trainerRahul,
  },
  {
    id: "g5",
    title: "Turf Sprint Track & Sled Pull Corridor",
    category: "Conditioning Zone",
    image: IMAGES.communityWorkout,
  },
  {
    id: "g6",
    title: "Recovery Lounge & Mineral Hydration Station",
    category: "Recovery",
    image: IMAGES.equipmentRogue,
  },
];

export const gymFaqs: FaqItem[] = [
  {
    question: "Do you offer a free trial before joining?",
    answer: "Yes! We offer a 1-day complimentary Day Pass & Coaching Consultation. You will receive a tour of the facility, a body composition scan (InBody 570), and a 45-minute guided workout with a senior coach to experience our standard.",
  },
  {
    question: "Do I need prior gym experience to start here?",
    answer: "Not at all. Over 45% of our members were complete beginners when they started. Our coaches guide you through foundation lifting mechanics, ensuring your movement patterns are safe and effective before increasing weight.",
  },
  {
    question: "How does 1-on-1 Personal Training work?",
    answer: "Our Personal Training protocol pairs you with an experienced coach dedicated to your targets. It includes weekly progressive workout programming, customized nutrition macro guidance, posture correction, and bi-weekly InBody assessments.",
  },
  {
    question: "Do your membership packages include nutrition guidance?",
    answer: "Yes, both our PRO and ELITE plans include structured nutrition frameworks with Indian food macro plans (vegetarian, non-veg, and high-protein alternatives) so you never have to starve or eat bland boiled meals.",
  },
  {
    question: "What are your operating hours and peak times?",
    answer: "We are open Monday to Saturday from 6:00 AM to 11:00 PM, and Sundays from 7:00 AM to 8:00 PM. Our peak hours are 6:30 AM – 9:00 AM and 6:30 PM – 9:00 PM. We cap floor capacity so equipment is never overcrowded.",
  },
  {
    question: "Is valet or car parking available at the Banjara Hills facility?",
    answer: "Yes, we provide dedicated complimentary basement parking and valet service for all members directly at our Road No. 12 facility.",
  },
  {
    question: "Can I pause my membership if I travel for work?",
    answer: "Yes, quarterly and annual memberships come with up to 30 days of complimentary membership freeze allowances, which can be activated instantly via WhatsApp or front desk.",
  },
];
