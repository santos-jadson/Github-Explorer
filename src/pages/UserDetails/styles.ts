import styled from 'styled-components'

export const Wrapper = styled.div`
max-width: 800px;
margin: 30px auto;
padding: 32px;
  > header {
    display: flex;
    align-items: center;
    > img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    > div {
      margin-left: 24px;
      > strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      > p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
  > ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    > li {
      & + li {
        margin-left: 80px;
      }
      > strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      > span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;