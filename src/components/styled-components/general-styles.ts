import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  width: 100%;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const Text = styled.span<{
  fontSize?: string;
  fontWeight?: string;
  textTransform?: string;
}>`
  font-size: ${({fontSize}) =>  fontSize ? fontSize : '16px'};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '400'};
  text-transform: ${({textTransform}) => textTransform ? textTransform : 'unset'};
`
