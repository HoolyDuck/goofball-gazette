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
      <div className="login_form">
        <div className="login_form_header">
          <h1>Goofball Gazette</h1>

          <p>Sign in to your account</p>
          <input
            onInput={(e) => {
                setEmail(e.currentTarget.value);
            }}
            type="text"
            className="email"
            placeholder="Email"
          />
          <input
            onInput={(e) => {
                setPassword(e.currentTarget.value);
            }}
            type="text"
            className="password"
            placeholder="Password"
          />
          {user.error && <p>{user.error}</p>}
          <button
            onClick={buttonLogin}
            className="login_button"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );

  function buttonLogin() {
    dispatch(
      login({
        username: email,
        password: password,
      })
    );
  }
}
