import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 56px;

  border-radius: 10px;

  background-color: ${({theme}) => theme.COLORS.INPUT_BG};

  &::placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_500};
  }

  input {
    width: 100%;
    height: 100%;

    font-size: 14px;
    padding: 19px 24px;

    border: none;
    outline: none;

    background: transparent;

    color: ${({theme}) => theme.COLORS.WHITE};
  }
`;