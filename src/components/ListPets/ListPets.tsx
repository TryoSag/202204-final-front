import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { IPet } from "../../types/petsTypes";
import FilterButton from "../FilterButton/FilterButton";
import Pet from "../Pets/Pet";
import { filterButtons } from "../../utils/utils";
import ListPetsStyled from "./ListPetsStyled";

const ListPets = (): JSX.Element => {
  const [animalFilter, setAnimalFilter] = useState(["dog", "cat"]);

  const filteraction = (list: string[]): void => {
    setAnimalFilter(list);
  };

  const previousPage = () => {};
  const nextPage = () => {};

  const pets: IPet[] = useSelector((state: RootState) => state.pets);

  return (
    <ListPetsStyled>
      <ul className="container-filter">
        {filterButtons.map(({ text, image, list }) => (
          <FilterButton
            key={`filter ${text}`}
            text={text}
            image={image}
            action={filteraction}
            list={list}
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
        <img
          src="./images/image-previous-page.svg"
          alt="previous page"
          onClick={previousPage}
        />
        <img
          src="./images/image-next-page.svg"
          alt="next page"
          onClick={nextPage}
        />
      </section>
    </ListPetsStyled>
  );
};

export default ListPets;
