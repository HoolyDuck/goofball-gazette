import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "./components/login-form/LoginForm";

import styles from "./LoginPage.module.scss";
import HeaderBlock from "./components/header-block/HeaderBlock";

export function LoginPage() {
  return (
    <div className={styles["login-page"]}>
      {" "}
      {/* convert to layout component*/}
      <div className={styles["content"]}>
        <HeaderBlock
          className={styles["header-block"]}
          title="Sign in"
        />
        <LoginForm />
      </div>
    </div>
  );
}
