import styled from 'styled-components'; 

const StyledBackground = styled.div`
  background-color: ${props => props.bgcolor || "white"};
  height: ${props => props.height || "100vh"};
  width: ${props => props.width || "100vw"};
`;

const StyledFormWrapper = styled.div`
  background-color: ${props => props.bgcolor || "white"};
  height: ${props => props.height || "50vh"};
  width: ${props => props.width || "50vw"};
  max-height: 50rem;
  max-width: 70rem;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledForm = styled.form`
  
`;

export { StyledBackground, StyledFormWrapper, StyledForm };