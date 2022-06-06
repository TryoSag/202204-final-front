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
    <li>
      <button onClick={action}>
        <img src={`./images/icon-${image}.svg"`} alt={`${text} icon`} />
      </button>
      <span>{text}</span>
    </li>
  );
};

export default FilterButton;
