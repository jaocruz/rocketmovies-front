import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 32px;

  border-radius: 16px;

  background-color: ${({theme}) => theme.COLORS.DARK_PINK};
  
  > .info {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > h1 {
      font-size: 24px;
      font-weight: 500;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    > span {
      display: flex;
      
      gap: 3px;
      margin: 8px 0 15px;

      color: ${({theme}) => theme.COLORS.PINK};

      svg {
        width: 12px;
        height: 12px;
      }

    }
  }

  > p {
    font-size: 16px;
    font-weight: 300;
    text-align: justify;
    max-height: 42px;
    overflow: hidden;
    color: ${({theme}) => theme.COLORS.GRAY_400};
  }

  > .tags {
    display: flex;

    margin: 0;
    padding: 0;

    gap: 8px;
    margin-top: 30px;
    justify-content: left;

    span {
      font-size: 12px;
      font-weight: 300;

      padding: 5px 16px;
      border-radius: 6px;

      color: ${({theme}) => theme.COLORS.TAG_TXT};
      background-color: ${({theme}) => theme.COLORS.TAG_BG};
    }
    
  }
  
`;