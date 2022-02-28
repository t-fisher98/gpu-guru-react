import styled from 'styled-components';

const StyledForm = styled.form`
  background-color: ${(props) => props.bgcolor || "white"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  padding: ${(props) => props.padding || "0"};
`;

const StyledDiv = styled.div`
  background-color: ${props => props.bgcolor || "white"};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
  position: relative;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 3px;
  display: block;
  width: 100%;
  margin: 0 auto;
`;

const StyledEmailInput = styled(StyledInput).attrs({
  type: "email",
  placeholder: "Email"
})`
  position: absolute;
  background-color: crimson;
  color: white;
  top: 45%
`;

const StyledPasswordInput = styled(StyledInput).attrs({
  type: "password",
  placeholder: "Password",
})`
  position: absolute;
  background-color: blueviolet;
  color: white;
  top: 55%;
`;

export {
  StyledForm,
  StyledDiv,
  StyledInput,
  StyledEmailInput,
  StyledPasswordInput,
};