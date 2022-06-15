import styled from "styled-components";

const PetStyled = styled.li`
  height: 250px;
  width: 160px;
  border-radius: 10px;
  background-color: #5353f29d;

  display: flex;
  flex-direction: column;
  align-content: center;

  margin: 3%;

  > div:nth-child(1) {
    height: 200px;
    width: 160px;

    object-position: 0 0;

    > img {
      height: 200px;
      width: 160px;
      border-radius: 10px;

      object-fit: cover;

      cursor: pointer;
    }
  }
  > div:nth-child(2) {
    width: 160px;

    display: flex;
    justify-content: space-between;

    position: absolute;

    > img {
      width: 30px;
      height: 30px;

      margin: 5px;

      :hover {
        cursor: pointer;
        transform: translateY(2px);
      }
    }
  }
  > ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;

    > li {
      margin-top: 10px;
      > span {
        font-size: 20px;
      }
      > img {
        height: 20px;
        width: 20px;
      }
    }
  }

  @media (min-width: 600px) {
    margin: 20px;
  }
`;
export default PetStyled;
