import styled from 'styled-components';

export const ActivitiesContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const Activity = styled.div`
  width: 100%;
  height: 75px;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  font-size: large;
  font-weight: 400;
  border-top: 1px solid blue;

  &:last-child {
    border-bottom: 1px solid blue;
  }
`
