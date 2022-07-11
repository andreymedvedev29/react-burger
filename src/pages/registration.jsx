import { useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import {
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";

export function RegistrationPage() {
    return (
      <div className={styles.app}>
        <section className={styles.container}>
          <form  className={styles.form}>
            <p className="text text_type_main-medium mb-6">Регистрация</p>
            <div className={styles.inputContainer + " mb-6"}>
              <Input
                type={"text"}
                placeholder={"Имя"}
                //onChange={handleChange}
                icon={"EditIcon"}
                //value={form.email}
                name={"name"}
                error={false}
                errorText={"Ошибка"}
                size={"default"}
              />
            </div>
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
              Зарегистрироваться
            </Button>
            <div className={styles.wrapper + " mt-20"}>
              <p className="text text_type_main-default text_color_inactive">
                  Уже зарегистрированы?
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