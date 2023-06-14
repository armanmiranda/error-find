import { ActivityLabel, QuestionBodyContainer, QuestionContainer, QuestionHeaderContainer } from "components/styled-components/question-styles";
import { DataContext, TActivity, TQuestion, findActivity, findQuestion, TQuestionWithRound } from "contexts/DataContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "routing";
import QuestionActions from "./QuestionActions";

const Question = () => {
  const apiData = useContext(DataContext);
  const navigate = useNavigate();
  const { activity_id, round_id, question_id } = useParams();

  const [questionData, setQuestionData] = useState<TQuestion | undefined>(undefined);
  const [activityData, setActivityData] = useState<TActivity<unknown> | undefined>(undefined);
  const [roundData, setRoundData] = useState<TQuestionWithRound | undefined>(undefined);


  useEffect(() => {
    if (activity_id) {
      const activity = findActivity(apiData, activity_id);
      setActivityData(activity);

      if (question_id && apiData) {
        if (activity) {
          const typedActivity = activity as TActivity<TQuestion>;
          setQuestionData(findQuestion<TQuestion>(typedActivity, question_id));
        }
      }

      if (round_id && apiData) {
        if (activity) {
          const typedActivity = activity as TActivity<TQuestionWithRound>;
          const round = findQuestion<TQuestionWithRound>(typedActivity, round_id);
          setRoundData(round);
          if (question_id && round) {
            setQuestionData(findQuestion<TQuestion>(round, question_id))
          } else {
            setTimeout(() => {
              const redirectionRoute = ROUTES.routeToActivityRoundQuestionWith({
                activity_id: activity_id,
                round_id: round_id,
                question_id: round.questions[0].order.toString()
              })
              navigate(redirectionRoute);
            }, 2000);
          }
        }
      }
    }
  }, [apiData, question_id])

  const formatStimulus = () => {
    const emphasizedSnippet = questionData?.stimulus.match(/(?<=\*)(.*)(?=\*)/)?.[0];
    const tokenizedStimulus = questionData?.stimulus.split('*');

    return (
      <>
        {tokenizedStimulus?.map((token: string) => {
          if (emphasizedSnippet === token) return <strong>{token}</strong>;
          else return token;
        })}
      </>
    )
  }

  if (roundData && !question_id) {
    return (
      <QuestionContainer>
        <QuestionHeaderContainer>
          <ActivityLabel>{activityData?.activity_name}</ActivityLabel>
          <h1>{roundData.round_title}</h1>
        </QuestionHeaderContainer>
      </QuestionContainer>
    );
  }

  return (
    <QuestionContainer>
      <QuestionHeaderContainer>
        <ActivityLabel>{activityData?.activity_name}</ActivityLabel>
        <h1>Q{question_id}.</h1>
      </QuestionHeaderContainer>
      <QuestionBodyContainer>
        <span>
          {formatStimulus()}
        </span>
      </QuestionBodyContainer>
      {(activityData && question_id) &&
        <QuestionActions
          activityData={activityData as TActivity<TQuestion>}
          questionId={question_id}
          roundData={roundData} />
      }
    </QuestionContainer>
  )
}

export default Question;
