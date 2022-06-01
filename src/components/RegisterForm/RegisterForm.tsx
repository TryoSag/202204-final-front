const RegisterForm = (): JSX.Element => {
  return (
    <form className="register-form" autoComplete="off" noValidate>
      <div>
        <label htmlFor="name">
          Name
          <input type="text" id="name" placeholder="Name" />
        </label>
        <label htmlFor="username">
          Username
          <input type="text" id="username" placeholder="Username" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" id="password" placeholder="Password" />
        </label>
        <button type="submit">Register</button>
      </div>
      <div>
        <p>You have an account yet</p>
        <button>to Login </button>
      </div>
    </form>
  );
};

export default RegisterForm;
