import { URL } from "../utils/consts";
import { checkResponse } from "../utils/utils";

export const forgotPass = (email) => {
  return fetch(`${URL}/password-reset`, {
    method: "POST",
    body: JSON.stringify({
        email: email,
    }),
  }).then(checkResponse);
};

export const resetPass = (token, password) => {
  return fetch(`${URL}/password-reset/reset`, {
    method: "POST",
    body: JSON.stringify({
        token: token,
        password: password,
    }),
  }).then(checkResponse);
};

export const register = (name, email, password) => {
  return fetch(`${URL}/auth/register`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email: email,
        password: password,
        name: name,
    }),
  }).then(checkResponse);
};



