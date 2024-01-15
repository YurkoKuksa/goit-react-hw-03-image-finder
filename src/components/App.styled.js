import styled from 'styled-components';

export const MainContainer = styled.div`
  /* height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 40; */
  color: #e9eaf0;
  background-color: #2e4ba3;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  text-shadow: ${({ theme }) => theme.shadows.medium};
`;

// export const HeaderTwo = styled.h2`
//   color: #686880;
//   margin-bottom: 10px;
//   font-size: 70px;
//   font-weight: 700;
//   text-shadow: ${({ theme }) => theme.shadows.small};

//   &:hover {
//     color: #5b5885;
//   }
// `;
