import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #c3cfde;
  min-width: 375px;
  max-width: 450px;
  height: 100%;
  margin: auto;
  padding: 50px 0 150px;
`;

export const Header = styled.div`
  width: 100%;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`
