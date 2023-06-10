import { createContext } from 'react';

export type TPayloadData = TApiData | undefined;

interface TApiData {
  name: string;
  heading: string;
  activities: TActivity[];
}

interface TBasicActivity {
  order: number;
  questions: TQuestion[];
}

interface TActivity extends TBasicActivity {
  activity_name: string;
}

interface TQuestion {
  is_correct: boolean;
  stimulus: string;
  order: number;
  user_answer: unknown[];
  feedback: string;
}

export interface TQuestionWithRound extends TBasicActivity {
  round_title: string;
}

export const DataContext = createContext<TPayloadData>(undefined);
