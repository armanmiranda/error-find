import { DataContext, findActivity, TActivity } from "contexts/DataContext";
import { FullHeightScreen, THeaderProps } from "layouts/FullHeightScreen";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResultItem from "./ResultItem";
import { ResultBodyItems } from "./styles";

const footerProps = {
  label: 'Home',
  linkUrl: '/'
};

const Result = () => {
  const apiData = useContext(DataContext);
  const navigate = useNavigate();
  const { activity_id } = useParams();

  const [activityData, setActivityData] = useState<TActivity<unknown> | undefined>(undefined);
  const [headerData, setHeaderData] = useState<THeaderProps>({ title: '', subtitle: ''});

  useEffect(() => {
    if (activity_id) {
      const activity = findActivity(apiData, activity_id);
      setActivityData(activity);
      setHeaderData({ title: 'Results', subtitle: activity?.activity_name });
    }
  }, [activity_id])


  return (
    <FullHeightScreen headerProps={headerData} footerProps={footerProps}>
      {activityData?.questions.map((question, index) => {
        return (
          <ResultBodyItems
            isLastElement={index + 1 === activityData?.questions.length}>
            <ResultItem question={question} />
          </ResultBodyItems>
        )
      })}
    </FullHeightScreen>
  );
}

export default Result;
