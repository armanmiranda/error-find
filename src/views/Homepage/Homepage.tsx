import { Header } from "components/styled-components";
import { StyledLink } from "components/styled-components/general-styles";
import { ActivitiesContainer, Activity } from "components/styled-components/homepage-styles";
import { DataContext } from "contexts/DataContext";
import { useContext } from "react";

const Homepage = () => {
  const apiData = useContext(DataContext)

  return (
    <>
      <Header>
        <h1>{apiData?.name}</h1>
      </Header>
      <ActivitiesContainer>
        {apiData?.activities.map((item) => {
          return (
            <StyledLink to={`questions/${item.order}`} key={item.order}>
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
