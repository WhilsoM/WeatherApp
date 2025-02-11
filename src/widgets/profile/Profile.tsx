import { authStore } from "@/store/authStore";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import s from "./ui/profile.module.scss";

export const Profile = () => {
  const [userData, setUserData] = useState<{
    user: {
      username: string;
      email: string;
    };
  } | null>(null);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);

      if (!token) {
        console.error("No token found");
        navigate("/login");
        return;
      }

      const response = await axios.get("http://localhost:5000/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserData(response.data);
    } catch (error: any) {
      setErr(error.response.data.message);

      console.error("Failed to fetch profile", error);
    }
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
        <Link to={"/"}>Home</Link>
        {!!err && <div> {err} </div>}

        <p>Loading...</p>
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
};
