import { LucideIcon } from 'lucide-react';

export interface Subject {
  name: string;
  icon: LucideIcon;
  color: string;
}

export interface Student {
  name: string;
  grade: string;
  subjects: Subject[];
}