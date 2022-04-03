import styled from 'styled-components';


export const Title = styled.h1`
  font-size: 40px;
  color: #3a3a3a;
  max-width: 480px;
  line-height: 56px;
  margin-top: 30px;
`;

export const Form = styled.form`
  margin-top: 40px;
  width: 100%;
  display: flex;
  > input {
    flex: 1;
    height: 45px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    border: 3px solid #E5E7EB;
    border-right: 0;
  }
  > button {
    width: 10rem;
    height: 45px;
    background: #FF3366;
    border-radius: 0px 5px 5px 0px;
    border: 0px;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    cursor: pointer;
  }
`;