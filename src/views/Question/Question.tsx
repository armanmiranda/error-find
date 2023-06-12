import { StyledLink } from "components/styled-components/general-styles";
import { ActivityLabel, QuestionActions, QuestionBodyContainer, QuestionContainer, QuestionHeaderContainer } from "components/styled-components/question-styles";

const Question = () => {
  return (
    <QuestionContainer>
      <QuestionHeaderContainer>
        <ActivityLabel>Activity One</ActivityLabel>
        <h1>Q1.</h1>
      </QuestionHeaderContainer>
      <QuestionBodyContainer>
        I really enjoy to play football with friends.
      </QuestionBodyContainer>
      <QuestionActions>
        <StyledLink to="">Correct</StyledLink>
        <StyledLink to="">Incorrect</StyledLink>
      </QuestionActions>
    </QuestionContainer>
  )
}

export default Question;
