import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { IPet } from "../../types/petsTypes";
import FilterButton from "../FilterButton/FilterButton";
import Pet from "../Pet/Pet";
import { filterButtons } from "../../utils/utils";
import ListPetsStyled from "./ListPetsStyled";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

interface propsListpets {
  token: string;
}

const petsInPage = 12;

const ListPets = ({ token }: propsListpets): JSX.Element => {
  const pets: IPet[] = useSelector((state: RootState) => state.pets);
  const { adminUser } = useSelector((state: RootState) => state.user);

  const [animalFilter, setAnimalFilter] = useState(["dog", "cat"]);

  const filteraction = (list: string[]): void => {
    setAnimalFilter(list);
  };

  const [pagination, setPagination] = useState(0);

  const [pageList, setPageList] = useState(pets.slice(pagination, petsInPage));

  useEffect(() => {
    setPageList(
      pets.slice(petsInPage * pagination, petsInPage * (pagination + 1))
    );
  }, [pagination, pets]);

  const previousPage = () => {
    if (pagination !== 0) {
      setPagination(pagination - 1);
    }
  };

  const nextPage = () => {
    if (pets.length >= petsInPage * (pagination + 1)) {
      setPagination(pagination + 1);
    } else {
      toast.warning("No more pets");
    }
  };

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
        {pageList.map(
          ({ name, picture, sex, animal, id }) =>
            animalFilter.includes(animal) && (
              <Pet
                key={id}
                name={name}
                picture={picture}
                sex={sex}
                animal={animal}
                id={id}
                token={token}
                adminUser={adminUser}
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
        <span>{pagination}</span>
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
