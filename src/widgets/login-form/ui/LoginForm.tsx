import { authStore } from "@/store";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { TLoginForm } from "../model";

export const LoginForm = observer(() => {
  const [textError, setTextError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>();

  const handleLogin = async (data: TLoginForm) => {
    console.log(authStore.error);

    if (authStore.error === "Invalid credentials") {
      setTextError("неправильно введен username/email");
      return;
    }
    const { username, password } = data;

    await authStore.login(username, password);
    return navigate("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <p>{textError}</p>
      {errors.username && <p>{errors.username.message}</p>}

      {errors.password && <p>{errors.password.message}</p>}

      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            required: true,
            max: 8,
            min: 4,
            maxLength: 12,
            pattern: {
              value: /^[A-Za-z0-9]+$/,
              message:
                "Разрешено использовать английские буквы и цифры, запрещается использовать спец. символы",
            },
          })}
        />
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: true,
            min: 8,
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Пароль должен содержать минимум 8 символов, хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ",
            },
          })}
        />

        <button type="submit">Войти в аккаунт</button>
      </form>
    </div>
  );
});
