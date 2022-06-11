import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store/store";
import { createPetThunk, editPetThunk } from "../../redux/thunks/petsThunks";
import { IPet, IPetData } from "../../types/petsTypes";
import CreateEditFormStyled from "./CreateEditFormStyled";

interface PropCreateEditForm {
  pageName: string;
}

const CreateEditForm = ({ pageName }: PropCreateEditForm): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const token: string | null = localStorage.getItem("token");

  const pets: IPet[] = useSelector((state: RootState) => state.pets);
  const { id } = useParams();

  const idToModify = id?.replace(":", "");
  const petToEdit = pets.find((pet) => pet.id === idToModify);

  const emptyCreateForm: IPetData = {
    name: "",
    animal: "dog",
    sex: "male",
    age: 0,
    picture: "",
    description: "",
    specialTreatment: "",
  };

  let initialFormData = emptyCreateForm;
  if (pageName === "Edit Pet" && petToEdit) {
    initialFormData = petToEdit;
  }

  const [formData, setFormData] = useState(initialFormData);

  const updateForm = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const formSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (pageName === "New Pet" && token) {
      dispatch(createPetThunk(token, formData));
      setFormData(emptyCreateForm);
    }
    if (pageName === "Edit Pet" && token && idToModify) {
      dispatch(editPetThunk(token, { ...formData, id: idToModify }));
    }
  };

  return (
    <CreateEditFormStyled
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
          <select id="animal" onChange={updateForm} value={formData.animal}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </label>
        <label htmlFor="sex">
          Sex
          <select id="sex" onChange={updateForm} value={formData.sex}>
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
          <textarea
            id="picture"
            placeholder="Picture"
            value={formData.picture}
            onChange={updateForm}
            cols={20}
            rows={10}
          />
        </label>
      </div>
      <div>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            placeholder="Description"
            value={formData.description}
            onChange={updateForm}
            cols={30}
            rows={10}
          />
        </label>
        <label htmlFor="specialTreatment">
          Special Treatment
          <textarea
            id="specialTreatment"
            placeholder="Special Treatment"
            value={formData.specialTreatment}
            onChange={updateForm}
            cols={30}
            rows={10}
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
    </CreateEditFormStyled>
  );
};

export default CreateEditForm;
