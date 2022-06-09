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
    }
  }

  > div:nth-child(1) {
    select {
      width: 135%;
    }
    > label:nth-child(5) {
      > input {
        height: 80px;
      }
    }
  }
  > div:nth-child(2) {
    input {
      height: 100px;
    }
  }
`;

export default CreateEditFormStyled;
