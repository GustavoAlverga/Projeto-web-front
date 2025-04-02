import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-image: url('/images/backgoundImage.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;