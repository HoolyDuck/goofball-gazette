import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { login } from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);

  return (
    <div className="App">
      <p>goofball gazette</p>
      {JSON.stringify(user)}
      <input
        type="text"
        className="email"
      />

      <button
        onClick={() =>
          dispatch(
            login({
              username: "test",
              password: "test",
            })
          )
        }
      >
        Login
      </button>
      <p>Error: {user.error}</p>
    </div>
  );
}

export default App;
