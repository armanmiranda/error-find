import { DataContext, findActivity, TActivity, TQuestionWithRound } from "contexts/DataContext";
import { FullHeightScreen, THeaderProps } from "layouts/FullHeightScreen";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResultList from "./ResultList";

const footerProps = {
  label: 'Home',
  linkUrl: '/'
};

const Result = () => {
  const apiData = useContext(DataContext);
  const { activity_id } = useParams();

  const [activityData, setActivityData] = useState<TActivity<unknown> | undefined>(undefined);
  const [headerData, setHeaderData] = useState<THeaderProps>({ title: '', subtitle: ''});
  const [hasRounds, setHasRounds] = useState(false);

  useEffect(() => {
    if (activity_id) {
      const activity = findActivity(apiData, activity_id);
      const question = activity?.questions as TQuestionWithRound[];
      setActivityData(activity);
      setHeaderData({ title: 'Results', subtitle: activity?.activity_name });

      if (question[0].round_title) {
        setHasRounds(true);
      } else {
        setHasRounds(false);
      }
    }
  }, [activity_id])


  return (
    <FullHeightScreen headerProps={headerData} footerProps={footerProps}>
      <ResultList hasRounds={hasRounds} questions={activityData?.questions} />
    </FullHeightScreen>
  );
}

export default Result;
