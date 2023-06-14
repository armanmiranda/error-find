import { createContext } from 'react';

export type TPayloadData = TApiData | undefined;

interface TApiData {
  name: string;
  heading: string;
  activities: TActivity<unknown>[];
}

interface TBasicActivity<T> {
  order: number;
  questions: T[];
}

export interface TActivity<T> extends TBasicActivity<T> {
  activity_name: string;
}

export interface TQuestion {
  is_correct: boolean;
  stimulus: string;
  order: number;
  user_answer: unknown[];
  feedback: string;
}

export interface TQuestionWithRound extends TBasicActivity<TQuestion> {
  round_title: string;
}

export const DataContext = createContext<TPayloadData>(undefined);

export const findActivity = (apiData: TPayloadData, activityId: string) => {
  return apiData?.activities.find((activity) => {
    return activity.order.toString() === activityId;
  });
}

export const findQuestion = <T,>(
  activity: TBasicActivity<T & { order: number }>,
  questionId: string
) => {
  return activity.questions.find(question => {
    return question.order.toString() === questionId;
  }) as T;
}
