import Button from "../../../../common/ui/button/Button";
import Input from "../../../../common/ui/form/input/Input";
import styles from "./LoginForm.module.scss";

export function LoginForm() {
  return (
    <form className={styles["login-form"]}>
      <Input
        label="Email"
        type="text"
        placeholder="Email"
        className={styles["login-form__input"]}
        onChange={(e) => {}}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Password"
        className={styles["login-form__input"]}
        onChange={(e) => {}}
      />
      <Button
        text="Login"
        className={styles["login-form__button"]}
        onClick={(e) => {}}
      />
    </form>
  );
}
