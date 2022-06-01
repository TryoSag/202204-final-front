const LoginForm = (): JSX.Element => {
  return (
    <form className="login-form" autoComplete="off" noValidate>
      <div>
        <label htmlFor="username">
          Username
          <input type="text" id="username" placeholder="Username" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" id="password" placeholder="Password" />
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
