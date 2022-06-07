import styled from "styled-components";

const FilterButtonStyled = styled.li`
  display: flex;
  flex-direction: column;

  margin: 10px;

  > img {
    width: 40px;
    height: 40px;

    background-color: #ffb800;
    border-radius: 10px;
  }
  > span {
    font-size: 20px;
  }
`;

export default FilterButtonStyled;
