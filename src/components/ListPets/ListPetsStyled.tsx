import styled from "styled-components";

const ListPetsStyled = styled.main`
  font-family: "Nunito", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  border-radius: 50px;

  > ul {
    width: 100%;

    padding: 0;
    list-style: none;

    display: flex;
    flex-wrap: wrap;
  }

  > section {
    display: flex;
    justify-content: center;

    padding-bottom: 20px;

    > img {
      margin: 10px;

      height: 40px;
      width: 40px;

      cursor: pointer;
    }
  }

  @media (min-width: 600px) {
    margin-left: 100px;
    min-height: 80vh;
    justify-content: space-between;

    > ul {
      padding-left: 20px;
    }
  }
`;

export default ListPetsStyled;
