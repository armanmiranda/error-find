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

export interface TActivity extends TBasicActivity {
  activity_name: string;
}

export interface TQuestion {
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

export const findActivity = (apiData: TPayloadData, activityId: string) => {
  return apiData?.activities.find((activity) => {
    return activity.order.toString() === activityId;
  });
}

export const findQuestion = (
  activityData: TActivity | TQuestionWithRound,
  questionId: string
) => {
  return activityData.questions.find(question => {
    return question.order.toString() === questionId;
  });
}
