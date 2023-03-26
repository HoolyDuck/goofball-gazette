import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { auth, login } from "./store/reducers/ActionCreators";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Login } from "./components/login/Login";

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <p>goofball gazette</p>
      <p>{JSON.stringify(user.user)}</p>

      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/"
          element={<div>Home</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
