import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { registerThunk } from "../../redux/thunks/userThunks";

const RegisterForm = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  const emptyRegisterForm = {
    name: "",
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(emptyRegisterForm);

  const updateForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const formSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    dispatch(registerThunk(formData));
    setFormData(emptyRegisterForm);
  };

  return (
    <form
      className="register-form"
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
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={updateForm}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={updateForm}
          />
        </label>
        <button
          type="submit"
          disabled={
            formData.name !== "" ||
            formData.username !== "" ||
            formData.password !== ""
          }
        >
          Register
        </button>
      </div>
      <div>
        <p>You have an account yet</p>
        <button>to Login </button>
      </div>
    </form>
  );
};

export default RegisterForm;
