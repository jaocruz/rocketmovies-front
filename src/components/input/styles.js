import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;

  gap: 15px;

  padding: 0 19px;
  border-radius: 10px;

  color: ${({theme}) => theme.COLORS.GRAY_500};
  background-color: ${({theme}) => theme.COLORS.INPUT_BG};

  > input {
    width: 100%;
    height: 100%;

    font-size: 14px;


    border: none;
    outline: none;

    background: transparent;

    color: ${({theme}) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_500};
    }
  }
`;