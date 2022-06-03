import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { IPet } from "../../types/petsTypes";
import Pet from "../Pets/Pet";

const ListPets = (): JSX.Element => {
  const pets: IPet[] = useSelector((state: RootState) => state.pets);

  return (
    <main>
      <section className="container-filter"></section>
      <ul>
        {pets.map(({ name, picture, sex, animal }) => (
          <Pet name={name} picture={picture} sex={sex} animal={animal} />
        ))}
      </ul>
      <section className="container-pages"></section>
    </main>
  );
};

export default ListPets;
