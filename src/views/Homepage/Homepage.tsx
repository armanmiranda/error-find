import { StyledLink } from "components/styled-components/general-styles";
import {
  DataContext,
  TActivity,
  TQuestion,
  TQuestionWithRound
} from "contexts/DataContext";
import { FullHeightScreen } from "layouts/FullHeightScreen";
import { useContext } from "react";
import { ROUTES } from "routing";
import { HomepageBodyItems } from "./styles";

const Homepage = () => {
  const apiData = useContext(DataContext)

  const generateUrl = (activity: TActivity<unknown>) => {
    if ((activity.questions[0] as TQuestionWithRound).round_title) {
      const typedActivity = activity as TActivity<TQuestionWithRound>
      return ROUTES.routeToActivityRoundWith({
        activity_id: typedActivity.order.toString(),
        round_id: typedActivity.questions[0].order.toString()
      });
    } else {
      const typedActivity = activity as TActivity<TQuestion>
      return ROUTES.routeToActivityQuestionWith({
        activity_id: typedActivity.order.toString(),
        question_id: typedActivity.questions[0].order.toString()
      });
    }
  }

  return (
    <FullHeightScreen headerProps={{ title: apiData?.name }}>
      {apiData?.activities.map((item) => {
        return (
          <StyledLink
            to={generateUrl(item)}
            key={item.order}>
            <HomepageBodyItems
              isLastElement={item.order === apiData.activities.length}>
              {item.activity_name}
            </HomepageBodyItems>
          </StyledLink>
        )
      })}
    </FullHeightScreen>
  );
}

export default Homepage;
