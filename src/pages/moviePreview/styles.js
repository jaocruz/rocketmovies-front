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
    }

    .page {
      overflow-y: scroll;

      height: 70vh;
      overflow-y: scroll;
      padding-right: 10px;

      display: flex;
      flex-direction: column;

      gap: 24px;
            
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
      display: grid;
      grid-template-areas:
      "title rating"
      "user date"
      "tags tags"
      "description description";

      align-items: center;

      background-color: transparent;

      padding: 0;
    }

    h1 {
      font-size: 36px;
      grid-area: title;

      margin: 24px 0;
    }

    .rating {
      display: flex;

      gap: 10px;
      margin: 4px 0 0 -590px;
    }

    svg {
      width: 20px;
      height: 20px;
    }

    .tags {
      display: flex;
      grid-area: tags;
    }

    p {
      margin-top: 40px;
      grid-area: description;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`;