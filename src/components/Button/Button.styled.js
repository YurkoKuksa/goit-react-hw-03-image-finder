import styled from 'styled-components';

// export const ButtonSbm = styled.button`
//   margin: 0 auto;
//   padding: 8px 16px;
//   border-radius: 5px;
//   background-color: #3f51b5;
//   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   text-align: center;
//   display: block;
//   color: #fff;
//   border: 0;
//   text-decoration: none;
//   cursor: pointer;
//   font-family: inherit;
//   font-size: 18px;
//   line-height: 24px;
//   font-style: normal;
//   font-weight: 500;
//   min-width: 180px;
//   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
//     0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

//   &:hover,
//   &:focus {
//     background-color: #303f9f;
//   }
// `;

export const ButtonSbm = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, box-shadow 0.3s;
  background-color: #3498db;
  color: #fff;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  &:hover {
    background-color: #2476c7;
    /* #3488db */
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;
