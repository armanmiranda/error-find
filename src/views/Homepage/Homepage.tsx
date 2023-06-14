import { Header } from "components/styled-components";
import { StyledLink } from "components/styled-components/general-styles";
import { ActivitiesContainer, Activity } from "components/styled-components/homepage-styles";
import { DataContext, findActivity, TActivity, TQuestion, TQuestionWithRound } from "contexts/DataContext";
import { useContext } from "react";
import { ROUTES } from "routing";

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
    <>
      <Header>
        <h1>{apiData?.name}</h1>
      </Header>
      <ActivitiesContainer>
        {apiData?.activities.map((item) => {
          return (
            <StyledLink
              to={generateUrl(item)}
              key={item.order}>
              <Activity>
                {item.activity_name}
              </Activity>
            </StyledLink>
          )
        })}
      </ActivitiesContainer>
    </>
  );
}

export default Homepage;
