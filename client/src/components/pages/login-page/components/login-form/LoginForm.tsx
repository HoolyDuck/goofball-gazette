import Input from "@/components/common/ui/form/input/Input";
import Button from "@/components/common/ui/button/Button";
import styles from "./LoginForm.module.scss";
import { useState } from "react";
import { authApi } from "@/services/AuthService";
import { useAppDispatch } from "@/store/hooks/redux";
import { setUser } from "@/store/reducers/authSlice";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const [apiLogin, { isLoading: isLoginLoading }] = authApi.useLoginMutation();

  async function login(e: any) {
    e.preventDefault();

    try {
      const userData = await apiLogin({
        username: email,
        password: password,
      }).unwrap();

      dispatch(setUser({user: userData}));
      navigate("/", { replace: true });

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className={styles["login-form"]}>
      <Input
        label="Email"
        type="text"
        placeholder="Email"
        className={styles["login-form__input"]}
        onInput={(e) => {
          setEmail(e.currentTarget.value);
        }}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Password"
        className={styles["login-form__input"]}
        onInput={(e) => {
          setPassword(e.currentTarget.value);
        }}
      />
      <Button
        text="Login"
        className={styles["login-form__button"]}
        onClick={(e: any) => {
          login(e);
        }}
      />
    </form>
  );
}
