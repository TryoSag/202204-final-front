import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { loginThunk } from "../../redux/thunks/userThunks";

const LoginForm = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  const emptyForm = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(emptyForm);

  const updateForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const formSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    dispatch(loginThunk(formData));
    setFormData(emptyForm);
  };

  return (
    <form
      className="login-form"
      autoComplete="off"
      onSubmit={formSubmit}
      noValidate
    >
      <div>
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
          disabled={formData.username !== "" || formData.password !== ""}
        >
          Login
        </button>
      </div>
      <div>
        <p>If you want to create an account</p>
        <button>to register</button>
      </div>
    </form>
  );
};

export default LoginForm;
