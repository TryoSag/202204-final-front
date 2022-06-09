const CreateEditForm = ({ pageName }: string): JSX.Element => {
  return (
    <form className="CreateEdit-form" autoComplete="off" onSubmit={} noValidate>
      <div>
        <label htmlFor="Name">
          Name
          <input
            type="text"
            id="Name"
            placeholder="Name"
            value={formData}
            onChange={}
          />
        </label>
        <label htmlFor="Animal">
          Animal
          <select
            id="Animal"
            onChange={}
            defaultValue={pageName === "New Pet" ? "" : formData}
          >
            <option hidden value={""}></option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </label>
        <label htmlFor="Sex">
          Sex
          <select
            id="Sex"
            onChange={}
            defaultValue={pageName === "New Pet" ? "" : formData}
          >
            <option hidden value={""}></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label htmlFor="Age">
          Age
          <input
            type="number"
            id="Age"
            placeholder="Age"
            value={formData}
            onChange={}
          />
        </label>
        <label htmlFor="Picture">
          Picture
          <input
            type="text"
            id="Picture"
            placeholder="Picture"
            value={formData}
            onChange={}
          />
        </label>
      </div>
      <div>
        <label htmlFor="Description">
          Description
          <input
            type="text"
            id="Description"
            placeholder="Description"
            value={formData}
            onChange={}
          />
        </label>
        <label htmlFor="SpecialTreatment">
          Special Treatment
          <input
            type="text"
            id="SpecialTreatment"
            placeholder="SpecialTreatment"
            value={formData}
            onChange={}
          />
        </label>
      </div>
    </form>
  );
};

export default CreateEditForm;
