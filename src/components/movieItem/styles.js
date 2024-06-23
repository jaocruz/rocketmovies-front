import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;

  border-radius: 10px;

  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.INPUT_BG};
  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_500}}` : "none"};


  button {
    border: none;
    background: none;
    margin-left: -32px;

    > svg {
      width: 20px;
      height: 20px;
      color: ${({theme}) => theme.COLORS.PINK}
    }
  }

  input {
    height: 56px;

    border: none;
    outline: none;
    background: transparent;

    font-size: 16px;
    color: ${({theme}) => theme.COLORS.WHITE}
  }
`;