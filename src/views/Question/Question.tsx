import { ActivityLabel, QuestionBodyContainer, QuestionContainer, QuestionHeaderContainer } from "components/styled-components/question-styles";
import { DataContext, TActivity, TQuestion, findActivity, findQuestion } from "contexts/DataContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuestionActions from "./QuestionActions";

const Question = () => {
  const apiData = useContext(DataContext);
  const { activity_id, question_id } = useParams();

  const [questionData, setQuestionData] = useState<TQuestion | undefined>(undefined);
  const [activityData, setActivityData] = useState<TActivity | undefined>(undefined);


  useEffect(() => {
    if (activity_id && question_id && apiData) {
      const activity = findActivity(apiData, activity_id);
      if (activity) {
        setActivityData(activity);
        setQuestionData(findQuestion(activity, question_id));
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
        <QuestionActions activityData={activityData} questionId={question_id} />
      }
    </QuestionContainer>
  )
}

export default Question;
