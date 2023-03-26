import { useState } from "react";

import "./Login.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { login } from "../../store/reducers/ActionCreators";

export function Login() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login_view">
      <form className="login_form">
        <h1 className="login_form__signin">Sign in</h1>
        {user.error && <p className="error_text">{user.error}</p>}
        <div className="login_form__element">
          <label htmlFor="email">Email</label>
          <div className="login_form__input">
            <input
              onInput={(e) => {
                setEmail(e.currentTarget.value);
              }}
              value={email}
              type="text"
              className="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="login_form__element">
          <label htmlFor="password">Password</label>
          <div className="login_form__input">
            <input
              onInput={(e) => {
                setPassword(e.currentTarget.value);
              }}
              value={password}
              type="password"
              className="password"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="login_form__element">
          <button
            onClick={buttonLogin}
            className="login_button"
          >
            Login
          </button>
        </div>

        <div className="login_form__element">
          <p className="login_form__signup">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );

  function buttonLogin(e: any) {
    e.preventDefault();
    dispatch(
      login({
        username: email,
        password: password,
      })
    );
  }
}
