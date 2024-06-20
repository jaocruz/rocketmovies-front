import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > main {
    flex: 1;
    overflow: hidden;

    .topo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      padding: 50px 0 40px;

      h1 {
        font-size: 32px;
        white-space: nowrap;
        color: ${({theme}) => theme.COLORS.WHITE};
      }

      button{
        width: fit-content;
      }
    }

    .reviews {
      height: 63vh;
      overflow-y: auto;
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

  }
`;