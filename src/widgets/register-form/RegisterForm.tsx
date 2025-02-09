import { authStore } from "@/store/authStore";
import { useEffect, useState } from "react";

export const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async () => {
    await authStore.register(username, password, email);
  };

  useEffect(() => {
    console.log(authStore.haveError);
    console.log(authStore.checkAuth());
  }, [authStore.haveError]);

  return (
    <>
      {authStore.haveError && <p>логин или почта уже занята</p>}
      <input
        type="text"
        placeholder="Type ur username:"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Type ur password:"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="email"
        placeholder="Type ur email:"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleRegister}>зарегистрироваться</button>
    </>
  );
};
