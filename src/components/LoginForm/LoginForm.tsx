import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";

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

  return (
    <form className="login-form" autoComplete="off" noValidate>
      <div>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            placeholder="Username"
            onChange={updateForm}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={updateForm}
          />
        </label>
        <button type="submit">Login </button>
      </div>
      <div>
        <p>If you want to create an account</p>
        <button>to register</button>
      </div>
    </form>
  );
};

export default LoginForm;
