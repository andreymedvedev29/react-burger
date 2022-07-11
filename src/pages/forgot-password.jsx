import { useState, useCallback } from "react";
import styles from "./forgot-password.module.css";
import { Link } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";


export function ForgotPasswordPage() {
  return (
    <div className={styles.app}>
      <section className={styles.container}>
        <form  className={styles.form}>
          <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
          <div className={styles.inputContainer + " mb-6"}>
            <Input
              type={"email"}
              placeholder={" Укажите email"}
              //onChange={handleChange}
              icon={"EditIcon"}
              //value={form.email}
              name={"email"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <Button type="primary" size="medium">
            Восстановить
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
