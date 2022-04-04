import styled from 'styled-components'

const Card = styled.div`
max-width: 800px;
border-radius: 4px;
background-color: #fff;
margin: 20px auto;
box-shadow: 0 5px 10px 10px rgba(0, 0, 0, 0.05);
padding: 10px;

> a div,
a img {
  transition: 0.2s;
  &:hover {
    transform: translateX(10px);
  }
}
> a {
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
  & + a {
    margin-top: 16px;
  }
  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  > div {
    flex: 1;
    margin: 0 16px;
    > strong {
      font-size: 20px;
      color: #3d3d4d;
    }
    > p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
  > svg {
    margin-left: 10px;
    color: #3A506B;

    &:hover {
        color: #000;
    }
  }

  > ul {
    display: flex;
    list-style: none;
    > li {
      & + li {
        margin-left: 15px;
      }
      > strong {
        display: block;
        color: #3d3d4d;
      }
      > span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
}

`
export default Card;