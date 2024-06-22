import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  
  display: flex;
  padding: 14px 32px;
  border-radius: 8px;

  border: none;

  gap: 8px;
  
  align-items: center;
  justify-content: center;
  
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.MAIN_BG};
  background-color: ${({theme}) => theme.COLORS.PINK};
`;