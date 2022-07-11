import { useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import {
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
//import { authorization } from "../services/actions/authorization.js";

export function LoginPage() {
  return (
    <div className={styles.app}>
      <section className={styles.container}>
        <form  className={styles.form}>
          <p className="text text_type_main-medium mb-6">Вход</p>
          <div className={styles.inputContainer + " mb-6"}>
            <Input
              type={"text"}
              placeholder={"Email"}
              //onChange={handleChange}
              icon={"EditIcon"}
              //value={form.email}
              name={"email"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className={styles.inputContainer + " mb-6"}>
            <PasswordInput
              //onChange={handleChange}
              //value={form.password}
              name={"password"}
              size={"default"}
            />
          </div>
          <Button type="primary" size="medium">
            Войти
          </Button>
          <div className={styles.wrapper + " mt-20"}>
            <p className="text text_type_main-default text_color_inactive">
                Вы - новый пользоватеоь?
            </p>
            <Link className={styles.Link} to="/register">
                <Button type="secondary" size="medium">
                    Зарегистрироваться
                </Button>
            </Link>
          </div>
          <div className={styles.wrapper + " mt-4"}>
            <p className={styles.paragraph + "text text_type_main-default text_color_inactive"}>
                Забыли пароль?
            </p>
            <Link className={styles.Link} to="/forgot-password">
                <Button type="secondary" size="medium">
                    Восстановить пароль
                </Button>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}
