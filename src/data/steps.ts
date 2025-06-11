import { StepType } from '../types';

export const landownerSteps: StepType[] = [
  {
    id: 1,
    title: "Register",
    description: "Fill out our simple form with details about your land location, size, and current condition.",
    icon: "ClipboardEdit"
  },
  {
    id: 2,
    title: "Land Survey",
    description: "Our agriculture experts will visit and assess your land for its farming potential.",
    icon: "FileSearch"
  },
  {
    id: 3,
    title: "Agreement",
    description: "We'll sign a transparent contract outlining terms, profit sharing, and duration.",
    icon: "FileSignature"
  },
  {
    id: 4,
    title: "Cultivation",
    description: "Our team prepares the land and begins organic farming using sustainable practices.",
    icon: "Sprout"
  },
  {
    id: 5,
    title: "Profit Sharing",
    description: "Receive regular payments based on harvest yields and sales performance.",
    icon: "Banknote"
  }
];

export const farmerSteps: StepType[] = [
  {
    id: 1,
    title: "Apply",
    description: "Submit your application with your background and interest in organic farming.",
    icon: "FileText"
  },
  {
    id: 2,
    title: "Training",
    description: "Complete our 4-week organic farming training program (stipend provided).",
    icon: "GraduationCap"
  },
  {
    id: 3,
    title: "Certification",
    description: "Receive your organic farming certification and join our farming team.",
    icon: "Award"
  },
  {
    id: 4,
    title: "Placement",
    description: "Get assigned to farms based on your location preference and skills.",
    icon: "MapPin"
  }
];