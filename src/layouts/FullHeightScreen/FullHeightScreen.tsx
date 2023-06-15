import { StyledLink } from "components/styled-components/general-styles";
import { PropsWithChildren } from "react";
import { BodyContainer, Footer, FullHeightContainer, Header, Text, Title } from "./styles";
import { TFullHeightScreenProps } from './types';


const FullHeightScreen = ({
  headerProps,
  footerProps,
  children
}: PropsWithChildren<TFullHeightScreenProps>) => {
  return (
    <FullHeightContainer>
      <Header>
        <Text>{headerProps.subtitle}</Text>
        <Title>{headerProps.title}</Title>
      </Header>
      <BodyContainer>
        {children}
      </BodyContainer>
      { footerProps &&
        <Footer>
          <StyledLink to={footerProps.linkUrl}>{footerProps.label}</StyledLink>
        </Footer>
      }
    </FullHeightContainer>
  )
}

export default FullHeightScreen;
