import { authStore } from "@/store/authStore";
import { validationStore } from "@/store/validation-store";
import { useState } from "react";
import { useNavigate } from "react-router";

export const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (username.length < 4) {
      console.log("username должен содержать хотябы 4 символа");
      return;
    }

    if (!validationStore.validatePassword(password)) {
      return;
    }

    if (!validationStore.validateEmail(email)) {
      console.log("Невалидный email");

      return;
    }

    await authStore.register(username, password, email);
    navigate("/");
  };

  return (
    <>
      {authStore.haveError && <p>логин или почта уже занята</p>}

      <input
        type="text"
        placeholder="Type ur username:"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Type ur password:"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Type ur email:"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button onClick={handleRegister}>зарегистрироваться</button>
    </>
  );
};
