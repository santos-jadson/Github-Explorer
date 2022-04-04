import styled from 'styled-components'

const ErrorMessage = styled.div`
max-width: 300px;
border-radius: 4px;
background-color: #FF3333;
margin: 20px auto;
box-shadow: 0 5px 10px 10px rgba(0, 0, 0, 0.05);
padding: 15px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

>strong {
    color: #FFF;
    margin-left: 20%;
}


`
export default ErrorMessage;