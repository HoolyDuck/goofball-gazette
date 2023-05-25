import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { auth, login } from "./store/reducers/ActionCreators";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Login } from "./components/login/Login";
import Header from "./components/header/Header";
import { MainPage } from "./views/MainPage/MainPage";
import  AuthProvider from "./providers/auth.provider";
import { BlogpostPage } from "./views/BlogpostPage/BlogpostPage";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <main>
          <Routes>
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/register"
              element={<Login />}
            />
            <Route
              path="/"
              element={<MainPage />}
            />
            <Route
              path="/blogpost/:id"
              element={<BlogpostPage />}
            />
          </Routes>
        </main>
      </AuthProvider>
    </div>
  );
}

export default App;
