import { PetInList } from "../../types/petsTypes";
import PetStyled from "./PetStyled";

const Pet = ({ name, picture, sex, animal }: PetInList): JSX.Element => {
  return (
    <PetStyled>
      <img src={picture} alt={`${animal} named ${name}`} />
      <ul>
        <li>
          <span>{name}</span>
        </li>
        <li>
          <img src={`./images/icon-${sex}.svg`} alt={`${sex} icon`} />
        </li>
      </ul>
    </PetStyled>
  );
};

export default Pet;
