import { BodyItems } from 'layouts/FullHeightScreen';
import styled from 'styled-components';

export const ResultBodyItems = styled(BodyItems)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
`;

export const ResultText = styled.span<{
  fontWeight?: string;
  textTransform?: string;
}>`
  font-size: 16px;
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '400'};
  text-transform: ${({textTransform}) => textTransform ? textTransform : 'unset'};
`
