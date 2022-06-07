import FilterButtonStyled from "./FilterButtonStyled";

interface PropsFilterButton {
  text: string;
  image: string;
  action: () => void;
}

const FilterButton = ({
  text,
  image,
  action,
}: PropsFilterButton): JSX.Element => {
  return (
    <FilterButtonStyled>
      <img
        src={`./images/icon-${image}.svg`}
        alt={`${text} icon`}
        onClick={action}
      />
      <span>{text}</span>
    </FilterButtonStyled>
  );
};

export default FilterButton;
