import { TQuestion } from "contexts/DataContext";
import { ResultText } from "./styles";

interface TResultItemProps {
  question: TQuestion;
}

const ResultItem = ({
  question
}: TResultItemProps) => {
  const generateBodyItems = () => {
    return (
      <>
        <ResultText>Q{question.order}</ResultText>
        <ResultText
          fontWeight='600'
          textTransform='uppercase'>
          { question.is_correct ?
            'Correct' :
            question.is_correct.toString() }
        </ResultText>
      </>
    );
  }
  return (<>{generateBodyItems()}</>)
}

export default ResultItem;
