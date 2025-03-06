import { authStore } from "@/store";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import s from "./profile.module.scss";

export const Profile = observer(() => {
  const [userData, setUserData] = useState<{
    user: {
      username: string;
      email: string;
    };
  } | null>(null);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const fetchProfile = async () => {
    await authStore.getProfile(setUserData, setErr);

    if (err === "Network Error") return;
  };

  const logoutHandler = () => {
    authStore.logout();

    navigate("/register");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!userData) {
    return (
      <>
        <Link to={"/register"}>Зарегистрироваться</Link>

        <Link to={"/"}>Главная</Link>
        {err === "" ? <p>Loading...</p> : <p>{err} </p>}
      </>
    );
  }

  return (
    <>
      <section className={s.profile}>
        <section className={s.profile__wrapper}>
          <Link to={"/"}> - назад</Link>

          <h1>Profile</h1>
          <p>Username: {userData.user.username}</p>
          <p>Email: {userData.user.email}</p>

          <button onClick={logoutHandler}>Выйти из аккаунта</button>
        </section>
      </section>
    </>
  );
});
