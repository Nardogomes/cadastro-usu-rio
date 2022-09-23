import styled from "styled-components";

export const Container = styled.div`
  width: 64rem;
  margin: 2rem auto 0;
`;

export const Content = styled.div`
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  .userAdd {
    width: 100%;
    margin: 2rem 0;

    display: flex;
    justify-content: flex-end;

    & button {
      width: 12rem;
      padding: 0.5rem;
      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }

  .userInfo {
    width: 50rem;
    margin-top: 1rem;
    padding: 0.6rem;
    font-size: 1.2rem;
    background: #5f5f5f;
    border-radius: 4px;

    display: flex;
    justify-content: space-between;

    & button {
      width: 6rem;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
