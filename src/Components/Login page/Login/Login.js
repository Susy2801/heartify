import "./Login.css";

function Login() {
  return (
    <div className="login__container">
      <div className="login__content">
        <img src="" alt="logo"></img>
        <form className="container mt-5">
          <div class="mb-3">
            <label for="InputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="InputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="InputPassword1" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="InputPassword1" />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
