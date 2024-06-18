import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  
  width: 100%;
  height: 115px;

  display: flex;
  position: fixed;
  top: 0;

  gap: 64px;
  padding: 0 125px;

  align-items: center;
  justify-content: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.STROKE};

  background-color: ${({theme}) => theme.COLORS.MAIN_BG};

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: ${({theme}) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  display: flex;
  text-align: right;

  align-items: center;

  white-space: nowrap;

  h2 {
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  a {
    font-size: 14px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.GRAY_500};
  }

  img {
    width: 58px;
    height: 58px;

    margin-left: 9px;

    border-radius: 50%;
  }
`;