import styled from "styled-components";

const FilterButtonStyled = styled.li`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 10px;

  > img {
    width: 40px;
    height: 40px;

    background-color: #ffb800;

    border-radius: 10px;
  }
  > span {
    font-size: 20px;
    text-align: center;
  }
`;

export default FilterButtonStyled;
