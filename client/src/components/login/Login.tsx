import { useState } from "react";

import "./Login.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { login, register } from "../../store/reducers/ActionCreators";
import { Link, Route, useNavigate, useLocation } from "react-router-dom";

export function Login() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const location = useLocation();
  const [isRegister, setIsRegister] = useState(location.pathname === "/register");

  const navigate = useNavigate();

  return (
    <div className="login_view">
      <form className="login_form">
        <h1 className="login_form__signin">
          {isRegister ? "Sign up" : "Sign in"}
        </h1>
        {user.error && <p className="error_text">{user.error}</p>}

        {isRegister && (
          <div className="login_form__element">
            <label htmlFor="username">Username</label>
            <div className="login_form__input">
              <input
                onInput={(e) => {
                  setUserName(e.currentTarget.value);
                }}
                value={userName}
                type="text"
                id="username"
                placeholder="Username"
              />
            </div>
          </div>
        )}

        <div className="login_form__element">
          <label htmlFor="email">Email</label>
          <div className="login_form__input">
            <input
              onInput={(e) => {
                setEmail(e.currentTarget.value);
              }}
              value={email}
              type="text"
              id="email"
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
              id="password"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="login_form__element">
          {isRegister ? (
            <button
              onClick={buttonRegister}
              className="login_button"
            >
              Register
            </button>
          ) : (
            <button
              onClick={buttonLogin}
              className="login_button"
            >
              Login
            </button>
          )}
        </div>

        <div className="login_form__element">
          <p className="login_form__signup">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            {isRegister ? (
              <Link
                to="/login"
                onClick={(e) => {
                  setIsRegister(false);
                }}
              >
                Sign in
              </Link>
            ) : (
              <Link
                to="/register"
                onClick={(e) => {
                  setIsRegister(true);
                }}
              >
                Sign up
              </Link>
            )}
          </p>
        </div>
      </form>
    </div>
  );

  function buttonLogin(e: any) {
    e.preventDefault();
    dispatch(
      login(
        {
          username: email,
          password: password,
        },
        () => navigate("/", { replace: true })
      )
    );
  }

  function buttonRegister(e: any) {
    e.preventDefault();
    dispatch(
      register(
        {
          username: userName,
          email: email,
          password: password,
        },
        () => navigate("/", { replace: true })
      )
    );
  }
}
