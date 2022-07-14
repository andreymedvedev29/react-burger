import { useState, useCallback } from "react";
import styles from "./reset-password.module.css";
import { Link } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { resetPass } from "../services/api";
import { Navigate } from "react-router-dom";


export function ResetPasswordPage( { visitForgotPass }) {
  const [form, setValue] = useState({ token: "", password: ""});
  const handleChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  
  let savePassword = useCallback(
    (e) => {
      e.preventDefault();
      resetPass(form.token, form.password)
        .then((res) => {
          if (res && res.success) {
            return <Navigate to="/login" replace={true} />
          }
        })
        .catch((res) => {
          alert(res);
        });
    },
    [form]
  );

  if (!visitForgotPass) {
    return <Navigate to="/forgot-password" replace={true} />
  }

  return (
    <div className={styles.app}>
      <section className={styles.container}>
        <form  onSubmit={savePassword} className={styles.form}>
          <p className="text text_type_main-medium mb-6">
            Восстановление пароля
          </p>
          <div className={styles.inputContainer + " mb-6"}>
            <Input
              type={"password"}
              placeholder={"Введите новый пароль"}
              onChange={handleChange}
              value={form.password}
              name={"password"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className={styles.inputContainer + " mb-6"}>
            <Input
              type={"text"}
              placeholder={"Введите код из письма"}
              onChange={handleChange}
              value={form.token}
              name={"token"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <Button type="primary" size="medium">
            Сохранить
          </Button>
          <div className={styles.wrapper + " mt-20"}>
            <p className="text text_type_main-default text_color_inactive">
                Вспомнили пароль?
            </p>
            <Link className={styles.Link} to="/login">
                <Button type="secondary" size="medium">
                    Войти
                </Button>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}
