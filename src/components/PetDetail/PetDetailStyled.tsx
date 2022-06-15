import styled from "styled-components";

const PetDetailStyled = styled.main`
  background: #c3e9ff;
  border-radius: 50px;

  > ul {
    list-style: none;
    padding: 0;

    > li {
      display: flex;
      flex-direction: column;
      justify-content: center;

      > img {
        border-radius: 50px 50px 0 0;
        overflow: hidden;
        object-fit: cover;
      }

      > ul {
        list-style: none;
        padding: 5%;

        > li:nth-child(2) {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }

        > li {
          margin-bottom: 20px;

          > h2 {
            font-size: 30px;
            color: #164d91;
          }

          > h3 {
            font-size: 20px;
            color: #164d91;
            margin: 10px auto;
          }

          > p {
            font-size: 15px;
            color: #164d91;
            margin: 10px auto;
          }
        }
      }

      > button {
        width: 100px;
        height: 40px;

        align-self: center;

        background: #9ca6fc;

        margin-bottom: 20px;
        border-radius: 10px;
        border: none;

        font-size: 20px;
        color: #164d91;
      }
    }
  }

  @media (min-width: 600px) {
    min-height: 80vh;

    margin-left: 100px;

    > ul {
      min-height: 80vh;

      display: flex;
      flex-direction: row;
      align-items: center;

      > li {
        min-height: 65vh;
        margin-right: 2.5%;

        > img {
          border-radius: 50px;
          max-height: 65vh;
        }
      }
      > li:nth-child(1) {
        width: 50%;
      }
      > li:nth-child(2) {
        width: 35%;
        min-height: 70vh;

        > ul {
          min-height: 70vh;
          > li:nth-child(3) {
            min-height: 25vh;
          }
        }
      }
      > li:nth-child(3) {
        width: 100px;
        min-height: 75vh;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }
    }
  }
`;

export default PetDetailStyled;
