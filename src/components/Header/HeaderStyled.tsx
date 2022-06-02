import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;

  .container--header-logo-title {
    margin: 20px 20px 5px 10px;
  }
  > h1 {
    margin-top: 30px;
    color: #ffb800;
  }
  .container--header-buttons {
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    > button {
    }
  }
`;

export default HeaderStyled;
