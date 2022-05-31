const RegisterForm = (): JSX.element => {
  return (
    <form className="login-form" autoComplete="off" noValidate>
      <div className="login-form__wrapper">
        <label className="login-form__label" htmlFor="name">
          Name
          <input
            className="login-form__input"
            type="text"
            id="name"
            value={formData.name}
            onChange={updateData}
            placeholder="Name"
          />
        </label>
        <label className="login-form__label" htmlFor="username">
          Username
          <input
            className="login-form__input"
            type="text"
            id="username"
            value={formData.username}
            onChange={updateData}
            placeholder="Username"
          />
        </label>
        <label className="login-form__label" htmlFor="password">
          Password
          <input
            className="login-form__input"
            type="password"
            id="password"
            value={formData.password}
            onChange={updateData}
            placeholder="Password"
          />
        </label>
        <button className="login-form__button" type="submit" onClick={register}>
          Register
        </button>
        <p>Do you have an account?</p>
        <Link className="" to={"/login"}>
          Click here to log in
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
