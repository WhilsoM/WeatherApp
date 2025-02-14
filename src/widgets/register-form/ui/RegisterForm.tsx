import { authStore } from "@/app/store";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { IRegisterForm } from "../model/";
export const RegisterForm = () => {
  const [textError, setTextError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>();

  const navigate = useNavigate();

  const handleRegister = async (data: IRegisterForm) => {
    if (authStore.error === "Registration failed") {
      setTextError("username занят/email занят");
      return;
    }

    const { username, password, email } = data;
    await authStore.register(username, password, email);
    return navigate("/");
  };

  return (
    <>
      {errors.username && <p>Имя пользователя обязательно</p>}
      {errors.email && <p>Некорректный email</p>}
      {errors.password && <p>{errors.password.message}</p>}
      <p>{textError}</p>
      <form onSubmit={handleSubmit(handleRegister)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            required: true,
            max: 8,
            min: 4,
            maxLength: 20,
          })}
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            max: 8,
            min: 4,
            maxLength: 50,
            pattern: /^\S+@\S+$/i,
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

        <button type="submit">зарегистрироваться</button>
      </form>
    </>
  );
};
