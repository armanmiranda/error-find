import styled from 'styled-components';

export const FullHeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fdfdfd;
  min-width: 375px;
  max-width: 450px;
  height: 100%;
  margin: auto;
  padding: 50px 0;
`;

export const BodyContainer = styled.div`
  width: 100%;
  flex-grow: 3;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  flex-grow: 1;
`;

export const Footer = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 20px 0;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 45px;
  margin-bottom: 50px;
`;

export const Text= styled.p`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
`
export const BodyItems = styled.div<{
  isLastElement?: boolean;
}>`
  width: 100%;
  height: 75px;
  padding: 20px;
  text-transform: uppercase;
  font-size: large;
  font-weight: 400;
  border-top: 1px solid blue;
  border-bottom: ${props => props.isLastElement ? '1px solid blue' : 'unset'};
`
