import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { auth, login } from "./store/reducers/ActionCreators";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Login } from "./components/login/Login";
import Header from "./components/header/Header";

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);
  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      if (!user.isAuth) dispatch(auth());
    }

    return () => {
      isCancelled = true;
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
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
      </main>
    </div>
  );
}

export default App;
