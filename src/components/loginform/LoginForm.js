import React from 'react'
import { Colors } from '../../modules/theme';
import { Wrapper } from '../wrapper'
import {
  StyledForm,
  StyledDiv,
  StyledInput,
  StyledEmailInput,
  StyledPasswordInput,
} from "./styles";

function LoginForm(props) {
  return (
    <Wrapper>
      <StyledForm width="60%">
        <StyledDiv bgcolor={Colors['gray-100']} height="40%">
          
        </StyledDiv>
        <StyledDiv bgcolor="green" height="60%" width="50%" margin="auto">
          <StyledEmailInput/>
          <StyledPasswordInput/>
        </StyledDiv>
      </StyledForm>
      <StyledDiv bgcolor="cornflowerblue" width="40%" padding="1.5rem">
        
      </StyledDiv>
    </Wrapper>
  );
}

export default LoginForm