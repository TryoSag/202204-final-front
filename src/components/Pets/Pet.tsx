import { PetInList } from "../../types/petsTypes";

const Pet = ({ name, picture, sex, animal }: PetInList): JSX.Element => {
  return (
    <li>
      <img src={picture} alt={`${animal} named ${name}`} />
      <ul>
        <li>{name}</li>
        <li>
          <img src={`./images/icon-${sex}.svg`} alt={`${sex} icon`} />
        </li>
      </ul>
    </li>
  );
};

export default Pet;
