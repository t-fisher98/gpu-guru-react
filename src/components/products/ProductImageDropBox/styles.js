import styled from 'styled-components';



const getColor = (props) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isFocused) {
        return '#2196f3';
    }
    return '#eeeeee';
  }
  
  const ProductImageDropBoxStyles = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 1rem;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${props => getColor(props)};
    border-style: dashed;
    background-color:#f8fafc;
    color: #94a3b8;
    outline: none;
    transition: border .24s ease-in-out;
    font-size:14px;
    margin-bottom: 1rem;
    :hover{
      border-color: cornflowerblue;
      background-color: #eff6ff;
    }
  `;
 

export {ProductImageDropBoxStyles}