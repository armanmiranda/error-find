import { Header } from "components/styled-components";
import { QuestionItem, QuestionItemsContainer } from "components/styled-components/homepage-styles";
import { DataContext } from "contexts/DataContext";
import { useContext, useEffect } from "react";

const Homepage = () => {
  const apiData = useContext(DataContext)

  // TODO: REMOVE! For testing purposes only
  useEffect(() => {
    const t = apiData;
  }, [apiData]);

  return (
    <>
      <Header>
        <h1>{apiData?.name}</h1>
      </Header>
      <QuestionItemsContainer>
        {apiData?.activities.map((item) => {
          return (
            <QuestionItem key={item.order}>
              {item.activity_name}
            </QuestionItem>
          )
        })}
      </QuestionItemsContainer>
    </>
  );
}

export default Homepage;
