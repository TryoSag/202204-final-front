import styled from "styled-components";

const NavigationBarStyled = styled.div`
  font-family: "Nunito", sans-serif;
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

      :hover {
        cursor: pointer;
        transform: translateY(2px);
      }
    }

    > span {
      font-size: 20px;
    }
  }

  @media (min-width: 600px) {
    position: absolute;
    height: 80vh;
    width: 80px;

    flex-direction: column;
    align-items: flex-start;

    padding: 0%;
    margin: 20px 0 0 20px;
  }
`;

export default NavigationBarStyled;
