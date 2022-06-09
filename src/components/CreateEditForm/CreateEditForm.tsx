import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { createPetThunk } from "../../redux/thunks/petsThunks";
import { IPetData } from "../../types/petsTypes";

interface PropCreateEditForm {
  pageName: string;
}

const CreateEditForm = ({ pageName }: PropCreateEditForm): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  const token: string | null = localStorage.getItem("token");

  const emptyCreateForm: IPetData = {
    name: "",
    animal: "dog",
    sex: "male",
    age: 0,
    picture: "",
    description: "",
    specialTreatment: "",
  };
  const [formData, setFormData] = useState(emptyCreateForm);

  const updateForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const updateSelectForm = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const formSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (pageName === "New Pet" && token)
      dispatch(createPetThunk(token, formData));
    setFormData(emptyCreateForm);
  };

  return (
    <form
      className="CreateEdit-form"
      autoComplete="off"
      onSubmit={formSubmit}
      noValidate
    >
      <div>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={updateForm}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            onChange={updateSelectForm}
            defaultValue={formData.animal}
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </label>
        <label htmlFor="sex">
          Sex
          <select
            id="sex"
            onChange={updateSelectForm}
            defaultValue={formData.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label htmlFor="age">
          Age
          <input
            type="number"
            id="age"
            placeholder="Age"
            value={formData.age}
            onChange={updateForm}
          />
        </label>
        <label htmlFor="picture">
          Picture
          <input
            type="text"
            id="picture"
            placeholder="Picture"
            value={formData.picture}
            onChange={updateForm}
          />
        </label>
      </div>
      <div>
        <label htmlFor="description">
          Description
          <input
            type="text"
            id="description"
            placeholder="Description"
            value={formData.description}
            onChange={updateForm}
          />
        </label>
        <label htmlFor="specialTreatment">
          Special Treatment
          <input
            type="text"
            id="specialTreatment"
            placeholder="SpecialTreatment"
            value={formData.specialTreatment}
            onChange={updateForm}
          />
        </label>
        <button
          type="submit"
          disabled={
            formData.name === "" ||
            formData.picture === "" ||
            formData.description === "" ||
            formData.specialTreatment === ""
          }
        >
          Enter
        </button>
      </div>
    </form>
  );
};

export default CreateEditForm;
