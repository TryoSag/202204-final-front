import styled from "styled-components";

const PetStyled = styled.li`
  box-sizing: border-box;
  height: 250px;
  width: 150px;
  border-radius: 10px;
  background-color: #5353f29d;

  display: flex;
  flex-direction: column;

  margin: 5%;

  > img {
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
  }
  > ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;

    > li {
      margin-top: 5px;
      > span {
        font-size: 20px;
      }
      > img {
        height: 20px;
        width: 20px;
      }
    }
  }
`;
export default PetStyled;
