import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { IPet } from "../../types/petsTypes";
import FilterButton from "../FilterButton/FilterButton";
import Pet from "../Pets/Pet";

const ListPets = (): JSX.Element => {
  const [animalFilter, setAnimalFilter] = useState(["cat", "dog"]);

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

  const previousPage = () => {};
  const nextPage = () => {};

  const pets: IPet[] = useSelector((state: RootState) => state.pets);

  return (
    <main>
      <ul className="container-filter">
        {filterButtons.map(({ text, image, action }) => (
          <FilterButton
            key={`filter ${text}`}
            text={text}
            image={image}
            action={action}
          />
        ))}
      </ul>
      <ul>
        {pets.map(
          ({ name, picture, sex, animal, id }) =>
            animalFilter.includes(animal) && (
              <Pet
                key={id}
                name={name}
                picture={picture}
                sex={sex}
                animal={animal}
              />
            )
        )}
      </ul>
      <section className="container-pagination">
        <label>
          <button className="button--previous-page" onClick={previousPage} />
          previous page button
        </label>
        <label>
          <button className="button--next-page" onClick={nextPage} />
          next page button
        </label>
      </section>
    </main>
  );
};

export default ListPets;
