import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: blue;
  height: 75vh;
  width: 75vw;
  max-height: 50rem;
  max-width: 70rem;
  border-radius: 15px;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { StyledWrapper }