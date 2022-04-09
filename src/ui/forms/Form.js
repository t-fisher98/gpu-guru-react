import styled from 'styled-components';

const FormStyles = styled.form`
  width: ${props => props.width || '100%'};
	height: ${props => props.height || '100%'};
`;

export { FormStyles }