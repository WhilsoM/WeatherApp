import axios from "axios";
import { makeAutoObservable } from "mobx";

class AuthStore {
  token: string | null = "";
  isAuthenticated = false;
  haveError = false;

  constructor() {
    makeAutoObservable(this);
  }

  async login(username: string, password: string) {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      this.token = response.data.token;
      this.isAuthenticated = true;
      this.haveError = false;

      if (this.token !== null) localStorage.setItem("token", this.token);
      else console.error("Token is null");
    } catch (error) {
      this.haveError = true;
      console.error("Login failed", error);
    }
  }

  async register(username: string, password: string, email: string) {
    try {
      await axios.post("http://localhost:5000/register", {
        username,
        password,
        email,
      });
      this.haveError = false;
    } catch (error) {
      this.haveError = true;
      console.error("Registration failed", error);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    localStorage.removeItem("token");
  }

  checkAuth() {
    const token = localStorage.getItem("token");
    if (token) {
      this.token = token;
      this.isAuthenticated = true;
      return "вроде все ок";
    }
    return "походу проблема";
  }
}

export const authStore = new AuthStore();
