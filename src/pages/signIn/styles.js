import styled from "styled-components";
import backgroundImg from "../../assets/Group 15.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 135px;

  display: flex;
  flex-direction: column;

  justify-content: center;

  > h1 {
    font-size: 48px;
    font-weight: 600;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > p {
    font-size: 14px;
    font-weight: 300;
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }

  > h2 {
    margin: 48px 0;
    font-size: 24px;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > a {
    display: flex;
    justify-content: center;

    margin-top: 42px;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > div{
    margin-bottom: 8px;
  }

  > button {
    margin-top: 24px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;




