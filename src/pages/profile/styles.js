import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 145px;

    background-color: ${({theme}) => theme.COLORS.DARK_PINK};
    
    display: flex;
    align-items: center;

    padding: 0 145px;

    a {
      display: flex;
      align-items: center;
      color: ${({theme}) => theme.COLORS.PINK};

      svg {
        width: 18px;
        height: 18px;
        margin-right: 8px;
      }
    }
  }
`;

export const Avatar = styled.div`
  position: relative;

  width: 185px;
  height: 185px;

  margin: -125px auto 64px;


  > img {
    width: 185px;
    height: 185px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    position: absolute;

    right: 7px;
    bottom: 7px;

    border-radius: 50%;
    background-color: ${({theme}) => theme.COLORS.PINK};

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 18px;
    }
  }
`;

export const Form = styled.form`
  max-width: 335px;
  margin: 30px auto 0;

  display: flex;
  flex-direction: column;

  align-items: center;
  
  gap: 8px;

  > div:nth-child(4){
    margin-top: 16px;
  }

  > button {
    margin: 0 auto;
    margin-top: 16px;
  }
`;