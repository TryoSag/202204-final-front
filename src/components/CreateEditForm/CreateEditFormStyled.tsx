import styled from "styled-components";

const CreateEditFormStyled = styled.form`
  font-family: "Nunito", sans-serif;

  background: #ccfcd9;
  border-radius: 50px;
  padding: 15px 10px;

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: column;

    > label {
      width: 60%;
      margin-left: 10%;
      padding-bottom: 10px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      font-size: 20px;
      color: #060;

      > * {
        font-family: "Nunito", sans-serif;
        text-align: center;
        font-size: 20px;

        width: 130%;
        border-radius: 20px;
        border: none;
        min-height: 35px;
      }
    }

    > button {
      font-family: "Nunito", sans-serif;
      text-align: center;
      font-size: 20px;
      color: #060;

      background-color: #42d155ce;
      min-height: 35px;
      width: 30%;
      align-self: center;
      margin: 20px;

      border-radius: 10px;
      border: none;

      :hover {
        cursor: pointer;
        transform: translateY(2px);
      }
    }
  }

  > div:nth-child(1) {
    select {
      width: 132%;
    }
    > label:nth-child(5) {
      > textarea {
        height: 80px;
      }
    }
  }
  > div:nth-child(2) {
    textarea {
      height: 100px;
    }
  }

  @media (min-width: 600px) {
    max-width: 1200px;
    min-height: 80vh;

    margin-left: 100px;
    flex-direction: row;

    > div {
      width: 50%;
      min-height: 100%;
    }

    > div:nth-child(1) {
      > label:nth-child(5) {
        > textarea {
          height: 100%;
        }
      }
    }
    > div:nth-child(2) {
      textarea {
        height: 100%;
      }
    }
  }
`;

export default CreateEditFormStyled;
