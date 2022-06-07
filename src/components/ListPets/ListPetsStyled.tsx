import styled from "styled-components";

const ListPetsStyled = styled.main`
  background: #fff;
  border-radius: 50px;

  > ul {
    box-sizing: border-box;
    max-width: 100vw;

    padding: 0;
    list-style: none;

    display: flex;
    margin: 10px 30px;
  }

  > section {
    display: flex;
    justify-content: center;

    > label {
      font-size: 0;
      margin: 10px;

      > button {
        height: 40px;
        width: 40px;
      }
    }
  }
`;

export default ListPetsStyled;
