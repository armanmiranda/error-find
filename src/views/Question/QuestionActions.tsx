import { StyledLink } from "components/styled-components/general-styles";
import { QuestionActionsContainer } from "components/styled-components/question-styles";
import { findQuestion, TActivity } from "contexts/DataContext";
import { useEffect, useState } from "react";

interface TQuestionActionsProps {
  activityData: TActivity;
  questionId: string;
}

const QuestionActions = ({ activityData, questionId }: TQuestionActionsProps) => {
  const activityId = activityData.order;
  const nextQuestionId = Number(questionId) + 1;
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const nextQuestion = findQuestion(activityData, nextQuestionId.toString());
    setHasMore(Boolean(nextQuestion));
  }, [questionId])

  const generateUrl = () => {
    if (hasMore) {
      return `/activities/${activityId}/questions/${nextQuestionId}`;
    } else {
      return `/results`;
    }
  }

  return (
    <QuestionActionsContainer>
      <StyledLink to={generateUrl()}>Correct</StyledLink>
      <StyledLink to={generateUrl()}>Incorrect</StyledLink>
    </QuestionActionsContainer>
  );
}

export default QuestionActions;
