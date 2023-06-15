import { StyledLink } from "components/styled-components/general-styles";
import { QuestionActionsContainer } from "components/styled-components/question-styles";
import { findQuestion, TActivity, TQuestion, TQuestionWithRound } from "contexts/DataContext";
import { useEffect, useState } from "react";
import { ROUTES } from "routing";

interface TQuestionActionsProps {
  activityData: TActivity<TQuestion>;
  questionId: string;
  roundData?: TQuestionWithRound;
}

const QuestionActions = ({
  activityData,
  questionId,
  roundData
}: TQuestionActionsProps) => {
  const activityId = activityData.order;
  const nextQuestionId = Number(questionId) + 1;
  const roundId = roundData?.order;
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setHasMore(()  => {
      return Boolean(
        roundData ?
          findQuestion(roundData, nextQuestionId.toString()) :
          findQuestion(activityData, nextQuestionId.toString())
      )
    });
  }, [questionId])

  const generateUrl = () => {
    if (hasMore && !roundId) {
      return ROUTES.routeToActivityQuestionWith({
        activity_id: activityId.toString(),
        question_id: nextQuestionId.toString()
      });
    } else if (hasMore && roundId) {
      return ROUTES.routeToActivityRoundQuestionWith({
        activity_id: activityId.toString(),
        round_id: roundId?.toString(),
        question_id: nextQuestionId.toString()
      });
    } else {
      if (roundId && !(roundId >= activityData.questions.length)) {
        const nextRoundId = roundId + 1;
        return ROUTES.routeToActivityRoundWith({
          activity_id: activityId.toString(),
          round_id: nextRoundId.toString(),
        });
      } else {
        return `/results/${activityId}`;
      }
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
