import styled from 'styled-components';

export const MainContainer = styled.div`
  color: #e9eaf0;
  /* background-color: #2e4ba3; */
  background-color: ${({ hasPhotos }) =>
    hasPhotos ? '#2e4ba3' : 'transparent'};

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  text-shadow: ${({ theme }) => theme.shadows.medium};
`;

export const NoPictures = styled.p`
  text-align: center;
  font-size: 20px;
`;
