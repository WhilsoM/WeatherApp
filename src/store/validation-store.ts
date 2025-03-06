import { makeAutoObservable } from "mobx";
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

class Validation {
  constructor() {
    makeAutoObservable(this);
  }

  validation(inputType: string) {
    if (inputType === "email") {
      return inputType.includes("@gmail.com");
    } else if (inputType === "password") {
      return inputType;
    }
  }

  validateEmail(email: string) {
    return EMAIL_REGEXP.test(email);
  }

  validatePassword(password: string) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      console.log("Пароль должен содержать не менее 8 символов.");
      return false;
    }
    if (!hasUpperCase) {
      console.log("Пароль должен содержать хотя бы одну заглавную букву.");
      return false;
    }
    if (!hasLowerCase) {
      console.log("Пароль должен содержать хотя бы одну строчную букву.");
      return false;
    }
    if (!hasNumbers) {
      console.log("Пароль должен содержать хотя бы одну цифру.");
      return false;
    }
    if (!hasSpecialChars) {
      console.log("Пароль должен содержать хотя бы один специальный символ.");
      return false;
    }
    return true;
  }
}

export const validationStore = new Validation();
