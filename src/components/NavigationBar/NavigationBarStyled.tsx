import styled from "styled-components";

const NavigationBarStyled = styled.div`
  font-family: "Nunito", sans-serif;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 95%;
  padding: 0 5%;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
      width: 45px;
      height: 45px;
      border-radius: 10px;
    }

    > span {
      font-size: 20px;
    }
  }
`;

export default NavigationBarStyled;
