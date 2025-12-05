export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon?: any;
  colSpan?: number; // For Bento grid
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type ThemeId = 'pure' | 'vitamin' | 'focus';

export interface Theme {
  id: ThemeId;
  name: string;
  colors: {
    bg: string;
    text: string;
    textMuted: string;
    primary: string; // Text color
    primaryBg: string; // Background color
    primaryBorder: string;
    secondaryBg: string; // For accent cards
    surface: string;
    surfaceHighlight: string;
    action: string; // For buttons
    actionText: string;
  };
  ui: {
    roundness: string;
    buttonShadow: string;
    cardShadow: string;
    glass: string;
  }
}