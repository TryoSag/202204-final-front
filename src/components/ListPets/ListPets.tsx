import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { IPet } from "../../types/petsTypes";
import FilterButton from "../FilterButton/FilterButton";
import Pet from "../Pets/Pet";

const ListPets = (): JSX.Element => {
  const [animalFilter, setAnimalFilter] = useState(["cat", "dog"]);

  const pets: IPet[] = useSelector((state: RootState) => state.pets);

  const filterButtons = [
    {
      text: "All",
      image: "all",
      action: () => setAnimalFilter(["cat", "dog"]),
    },
    {
      text: "Dogs",
      image: "dog",
      action: () => setAnimalFilter(["dog"]),
    },
    {
      text: "Cats",
      image: "cat",
      action: () => setAnimalFilter(["cat"]),
    },
  ];

  return (
    <main>
      <ul className="container-filter">
        {filterButtons.map(({ text, image, action }) => (
          <FilterButton text={text} image={image} action={action} />
        ))}
      </ul>
      <ul>
        {pets.map(({ name, picture, sex, animal }) => {
          if (animalFilter.includes(animal)) {
            return (
              <Pet name={name} picture={picture} sex={sex} animal={animal} />
            );
          }
        })}
      </ul>
      <section className="container-pages"></section>
    </main>
  );
};

export default ListPets;
