export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface StatType {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export interface ProductType {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  image: string;
}

export interface FaqType {
  id: number;
  question: string;
  answer: string;
}

export interface StepType {
  id: number;
  title: string;
  description: string;
  icon: string;
}