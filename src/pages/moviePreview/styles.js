import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > main {

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({theme}) => theme.COLORS.PINK};
      margin-top: 155px;
      margin-bottom: 24px;
    }

    .page {
      height: 70vh;
      overflow-y: scroll;
      padding-right: 10px;

      display: flex;
      flex-direction: column;
            
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
    }

    section {
      display: flex;
      align-items: baseline;
    }

    h1 {
      font-size: 36px;
      font-weight: 600;

      margin-bottom: 18px;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      color: ${({theme}) => theme.COLORS.PINK};
    }

    img {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      margin-right: 8px;
    }

    .infos {
      display: flex;
      align-items: center;
      
      margin-top: 14px;
      color: ${({theme}) => theme.COLORS.WHITE};

      > svg {
        margin-left: 15px;
      }
    }

    .tags {
      display: flex;
      gap: 8px;
      margin: 40px 0;
    }

    span {
      padding: 8px 16px;
      border-radius: 8px;
      
      color: ${({theme}) => theme.COLORS.TAG_TXT};
      background-color: ${({theme}) => theme.COLORS.TAG_BG2};
    }

    p {
      font-weight: 300;
      line-height: 24px;
      text-align: justify;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    .rating{
      background-color: transparent;
      margin-left: 10px;
    }
  }
`;