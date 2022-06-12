import styled from "styled-components";

const RegisterFormStyled = styled.form`
  font-family: "Nunito", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border-radius: 50px;
  background: #f6bfbb;
  height: 80vh;
  font-family: "Nunito", sans-serif;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > label {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-bottom: 15px;
      width: 100%;

      font-size: 20px;

      > input {
        padding: 5px 10px;
        width: 60%;
        max-width: 350px;

        border-radius: 8px;
        border-style: none;

        font-size: 20px;
      }
    }

    > button {
      border-radius: 8px;
      border-style: none;
      height: 30px;
      width: 150px;

      background: #ff9900;

      font-weight: bold;
      font-size: 20px;

      :hover {
        cursor: pointer;
        transform: translateY(2px);
      }
    }
  }

  @media (min-width: 600px) {
    max-width: 600px;
    margin-left: 100px;
  }
`;

export default RegisterFormStyled;
