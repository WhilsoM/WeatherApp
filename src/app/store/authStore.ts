import axios, { AxiosError, AxiosResponse } from "axios";
import { makeAutoObservable } from "mobx";

class AuthStore {
  token: string | null = "";
  isAuthenticated = false;
  error = "";
  // navigate = useNavigate;

  constructor() {
    makeAutoObservable(this);
  }

  async login(username: string, password: string) {
    try {
      const response: AxiosResponse = await axios.post(
        "http://localhost:5000/login",
        {
          username,
          password,
        }
      );
      this.token = response.data.token;
      this.isAuthenticated = true;
      this.error = "";

      if (this.token !== null) localStorage.setItem("token", this.token);
      else console.error("Token is null");
    } catch (error: AxiosError) {
      if (error.response) {
        this.error = error.response.data.message;
        console.error("Login failed", error.response.data);
      } else if (error.request) {
        console.error("No response received", error.request);
      } else {
        console.error("Error setting up the request", error.message);
      }
    }
  }

  async register(username: string, password: string, email: string) {
    try {
      await axios.post("http://localhost:5000/register", {
        username,
        password,
        email,
      });
      this.error = "";
    } catch (error: AxiosError) {
      if (error.response) {
        this.error = error.response.data.message;
        console.error("Login failed", error.response.data);
      } else if (error.request) {
        console.error("No response received", error.request);
      } else {
        console.error("Error setting up the request", error.message);
      }
    }
  }

  async getProfile(
    setData: (response: AxiosResponse) => void,
    setErr: (error: AxiosError) => void
  ) {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.get("http://localhost:5000/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(response.data);
    } catch (error: AxiosError) {
      setErr(error.message);

      console.error("Failed to fetch profile", error.message);
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
