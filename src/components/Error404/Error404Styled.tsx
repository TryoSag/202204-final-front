import styled from "styled-components";

const Error404Styled = styled.main`
  height: 75vh;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50px;
  background: #fff;

  > div {
    height: 300px;
    width: 250px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50px;
    background-color: #d9d9d9;

    > span {
      width: 100px;

      font-family: "Nunito", sans-serif;
      text-align: center;
      font-size: 30px;
    }
  }
`;

export default Error404Styled;
