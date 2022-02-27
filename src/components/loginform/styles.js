import styled from 'styled-components'; 

const StyledFormWrapper = styled.div`
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

const StyledForm = styled.form`
  width: 60%;
  height: 100%;
  padding: 1.5rem;
  background-color: pink;
`;

const StyledFormInputGroup = styled.div`
  background-color: green;
  width: 100%;
  height: 50%;
  margin: auto;
`;

const StyledBranding = styled.div`
  width: 40%;
  height: 100%;
  padding: 1.5rem;
  border-left: 1px solid yellow;
`;

export { StyledFormWrapper, StyledForm, StyledFormInputGroup, StyledBranding };