import { TQuestion, TQuestionWithRound } from "contexts/DataContext";
import { ResultText } from "./styles";

interface TResultItemProps {
  question: unknown;
}

const ResultItem = ({
  question
}: TResultItemProps) => {
  const generateBodyItems = () => {
    if ((question as TQuestionWithRound)?.round_title) {
      const typedQuestion = question as TQuestionWithRound;
      return (
        <>
        </>
      );
    } else {
      const typedQuestion = question as TQuestion;
      return (
        <>
          <ResultText>Q{typedQuestion.order}</ResultText>
          <ResultText
            fontWeight='600'
            textTransform='uppercase'>
            { typedQuestion.is_correct ?
              'Correct' :
              typedQuestion.is_correct.toString() }
          </ResultText>
        </>
      );
    }
  }
  return (<>{generateBodyItems()}</>)
}

export default ResultItem;
