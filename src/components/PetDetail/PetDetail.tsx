import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import PetDetailStyled from "./PetDetailStyled";

const PetDetail = (): JSX.Element => {
  const pets = useSelector((state: RootState) => state.pets);
  const { id } = useParams();

  const idToModify = id?.replace(":", "");
  const petToShow = pets.find((pet) => pet.id === idToModify);

  const emptyData = {
    name: "no pet",
    animal: "dog",
    sex: "male",
    age: 0,
    picture: "",
    description: "",
    specialTreatment: "",
  };
  let petData = emptyData;

  if (petToShow) {
    petData = petToShow;
  }

  const { name, animal, sex, age, picture, description, specialTreatment } =
    petData;

  return (
    <PetDetailStyled>
      <ul>
        <li>
          <img src={picture} alt={`${animal} named ${name}`} />
        </li>
        <li>
          <ul>
            <li>
              <h2>{name}</h2>
            </li>
            <li>
              <h3>{animal === "dog" ? "Dog" : "Cat"}</h3>
              <h3>{sex === "male" ? "Male" : "Female"}</h3>
              <h3>{`${age} years`}</h3>
            </li>
            <li>
              <h3>Description</h3>
              <p>{description}</p>
            </li>
            <li>
              <h3>Special Treatment</h3>
              <p>{specialTreatment}</p>
            </li>
          </ul>
        </li>
        <li>
          <button>Meet</button>
        </li>
      </ul>
    </PetDetailStyled>
  );
};

export default PetDetail;
