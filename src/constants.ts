import { MapPin, Battery, Trophy, Zap } from 'lucide-react';

export const SOCIAL_PROOF_LOGOS = [
  "GOLD'S GYM", "EQUINOX", "LA FITNESS", "ANYTIME FITNESS", "PLANET FITNESS", "24 HOUR FITNESS", "LIFETIME"
];

export const FEATURES = [
  {
    id: "geo",
    title: "Geofence Auto-Start",
    description: "No buttons. Walk in, and your session begins instantly.",
    icon: MapPin,
    colSpan: 1
  },
  {
    id: "ai",
    title: "AI Session Analysis",
    description: "Smart duration tracking & intensity scoring.",
    icon: Zap,
    colSpan: 1
  },
  {
    id: "battery",
    title: "0% Battery Drain",
    description: "Optimized for all-day usage without killing your phone.",
    icon: Battery,
    colSpan: 1
  },
  {
    id: "gamify",
    title: "RPG Leveling System",
    description: "Gain XP for consistency. Unlock exclusive app icons and themes.",
    icon: Trophy,
    colSpan: 2
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "I used to forget to log my workouts half the time. GymGate just does it. It's like magic.",
    author: "Sarah J.",
    role: "Crossfit Athlete"
  },
  {
    id: 2,
    quote: "The XP system is actually addictive. I found myself going on a Sunday just to keep my streak.",
    author: "Mike T.",
    role: "Powerlifter"
  },
  {
    id: 3,
    quote: "Cleanest fitness app on the App Store. No ads, no bloat. Just pure tracking.",
    author: "Davide R.",
    role: "Product Designer"
  }
];

export const FAQS = [
  {
    question: "Does it drain my battery?",
    answer: "No. We use region monitoring (geofencing) which is handled by the OS. The app only wakes up when you actually enter the gym."
  },
  {
    question: "Can I add multiple gyms?",
    answer: "Yes! You can add your home gym, work gym, and any other location you frequent. The app handles switching automatically."
  },
  {
    question: "Is it free?",
    answer: "The app will not be entirely free, there will be a very tiny cost involved to cover production and maintenance cost of GymGate. However, it will be far cheaper than other fitness trackers."
  },
  {
    question: "When is the launch?",
    answer: "We are launching a closed beta in December 2025 to capture the New Year's resolution wave."
  }
];

export const HERO_COPY = {
  headline: "Track workouts without touching your phone.",
  subhead: "GymGate uses geofencing to automatically log your gym sessions. You focus on the weights, we handle the data.",
  cta: "Join the Waitlist"
};