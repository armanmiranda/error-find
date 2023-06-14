import { TRouteProps } from "./types";

const routeToActivityWith = (activity_id: string) => {
  return `activities/${activity_id}`;
}

const routeToQuestionWith = (question_id: string) => {
  return `questions/${question_id}`;
}

const routeToRoundWith = (round_id: string) => {
  return `rounds/${round_id}`;
}

const routeToActivityQuestionWith = ({
  activity_id,
  question_id
}: Pick<TRouteProps, "activity_id" | "question_id">) => {
  return (
    `/${routeToActivityWith(activity_id)}/` +
    `${routeToQuestionWith(question_id)}`
  );
}

const routeToActivityRoundWith = ({
  activity_id,
  round_id
}: Pick<TRouteProps, "activity_id" | "round_id">) => {
  return (
    `/${routeToActivityWith(activity_id)}/` +
    `${routeToRoundWith(round_id)}`
  );
}

const routeToActivityRoundQuestionWith = ({
  activity_id,
  round_id,
  question_id
}: TRouteProps) => {
  return (
    `/${routeToActivityWith(activity_id)}/` +
    `${routeToRoundWith(round_id)}/` +
    `${routeToQuestionWith(question_id)}`
  )
}

const ROUTES = {
  routeToActivityWith,
  routeToQuestionWith,
  routeToRoundWith,
  routeToActivityQuestionWith,
  routeToActivityRoundWith,
  routeToActivityRoundQuestionWith
}

export default ROUTES;
