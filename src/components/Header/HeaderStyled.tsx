import styled from "styled-components";

const HeaderStyled = styled.header`
  font-family: "Nunito", sans-serif;
  display: flex;

  .container--header-logo-title {
    flex: 1;
    margin: 20px 20px 5px 10px;
  }
  > h1 {
    flex: 4;
    margin-top: 30px;
    color: #ff8000;

    @media (min-width: 600px) {
      font-size: 50px;
    }
  }
  .container--header-buttons {
    min-width: 80px;
    margin-right: 10px;
    flex: 1;

    display: flex;
    justify-content: space-around;
    flex-direction: column;

    > button {
      min-width: 80px;
      max-width: 200px;
      border-radius: 10px;

      background-color: #ff8000;
      border-style: none;

      font-family: "Nunito", sans-serif;
      color: #fff;
      font-size: 18px;

      :hover {
        cursor: pointer;
        transform: translateY(2px);
      }
    }
  }
`;

export default HeaderStyled;
