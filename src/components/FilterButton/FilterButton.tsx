import FilterButtonStyled from "./FilterButtonStyled";

interface PropsFilterButton {
  text: string;
  image: string;
  action: (list: string[]) => void;
  list: string[];
}

const FilterButton = ({
  text,
  image,
  action,
  list,
}: PropsFilterButton): JSX.Element => {
  const buttonAction = () => action(list);

  return (
    <FilterButtonStyled>
      <img
        src={`./images/icon-${image}.svg`}
        alt={`${text} icon`}
        onClick={buttonAction}
      />
      <span>{text}</span>
    </FilterButtonStyled>
  );
};

export default FilterButton;
