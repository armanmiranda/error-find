import { TQuestion, TQuestionWithRound } from "contexts/DataContext";
import { HomepageBodyItems } from "views/Homepage/styles";
import ResultItem from "./ResultItem";
import { ResultBodyItems } from "./styles";

interface TResultList {
  hasRounds: boolean;
  questions: unknown;
}

const ResultList = ({
  hasRounds,
  questions
}: TResultList) => {
  if (hasRounds && questions) {
    const typedRounds = questions as TQuestionWithRound[];
    return (
      <>
        {typedRounds?.map((roundQuestion) => {
          const typedQuestions = roundQuestion.questions as TQuestion[];
          return (
            <>
              <HomepageBodyItems>
                Test
              </HomepageBodyItems>
              {typedQuestions?.map((question, index) => {
                return (
                  <ResultBodyItems
                    isLastElement={index + 1 === typedQuestions.length}>
                    <ResultItem question={question} />
                  </ResultBodyItems>
                )
              })}
            </>
          )
        })}
      </>
    );
  } else {
    const typedQuestions = questions as TQuestion[];
    return (
      <>
        {typedQuestions?.map((question, index) => {
          return (
            <ResultBodyItems
              isLastElement={index + 1 === typedQuestions.length}>
              <ResultItem question={question} />
            </ResultBodyItems>
          )
        })}
      </>
    );
  }
}

export default ResultList;
