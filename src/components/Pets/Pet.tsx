import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { deletePetThunk } from "../../redux/thunks/petsThunks";
import { PetInList } from "../../types/petsTypes";
import PetStyled from "./PetStyled";

const Pet = ({
  name,
  picture,
  sex,
  animal,
  id,
  token,
  adminUser,
}: PetInList): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  const deleteClick = (): void => {
    dispatch(deletePetThunk(token, id));
  };

  return (
    <PetStyled>
      <div>
        <img src={picture} alt={`${animal} named ${name}`} />
      </div>
      {adminUser && (
        <div>
          <img src="./images/icon-edit.svg" alt="edit icon" />
          <img
            src="./images7icon-delete.svg"
            alt="delete icon"
            onClick={deleteClick}
          />
        </div>
      )}
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
