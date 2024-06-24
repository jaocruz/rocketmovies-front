import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  main {
    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({theme}) => theme.COLORS.PINK};
      margin-top: 155px;
      margin-bottom: 24px;
    }

    h1 {
      font-size: 36px;
      font-weight: 500;
      margin-bottom: 40px;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 70vh;
  padding-right: 10px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.COLORS.PINK};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .inputs{
    display: flex;
    gap: 40px;
  }
  
  textarea{
    width: 100%;
    height: 275px;

    font-size: 14px;

    resize: none;
    
    display: flex;
    align-items: center;

    gap: 15px;
    outline: none;

    margin: 40px 0;
    padding: 16px 19px;

    border: none;
    border-radius: 10px;

    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: ${({theme}) => theme.COLORS.INPUT_BG};

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_500};
    }
  }

  h2 {
    font-size: 20px;
    color: ${({theme}) => theme.COLORS.GRAY_400};
  }

  .tagsMovie {
    display: flex;
    gap: 24px;
    
    width: 100%;
    padding: 16px;
    margin: 24px 0 40px;

    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.BLACK};
  }

  .buttons {
    display: flex;
    gap: 45px;

    margin-left: 32px;
    margin-bottom: 10px;
  }

  button:first-child{
    border: 10px;
    color: ${({theme}) => theme.COLORS.PINK};
    background-color: ${({theme}) => theme.COLORS.BLACK};
  }
`;