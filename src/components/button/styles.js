import styled from "styled-components";

export const Container = styled.button`
  height: 56px;
  width: fit-content;
  
  display: flex;
  padding: 14px 32px;
  border-radius: 8px;
  
  align-items: center;
  justify-content: center;
  
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.MAIN_BG};
  background-color: ${({theme}) => theme.COLORS.PINK};
`;