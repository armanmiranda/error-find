import styled from 'styled-components';

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c3cfde;
  min-width: 375px;
  max-width: 500px;
  height: 350px;
  margin: auto;
  position: absolute;
  inset: 0;
  padding: 30px 0 0;
`;

export const ActivityLabel = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
`;

export const QuestionHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
  padding: 0;
  margin: 0 0 20px 5vw;
`;

export const QuestionBodyContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  margin-bottom: 10px;
  width: 100%;
  height: 10vh;
  border-top: 1px solid blue;
  border-bottom: 1px solid blue;
`;

export const QuestionActions = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 0;
`;
