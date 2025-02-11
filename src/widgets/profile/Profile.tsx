import { authStore } from "@/store/authStore";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

export const Profile = () => {
  const [userData, setUserData] = useState<{
    user: {
      username: string;
      email: string;
    };
  } | null>(null);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const fetchProfile = async () => {
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

      setUserData(response.data);
    } catch (error) {
      setErr(true);
      console.error("Failed to fetch profile", error);
    }
  };

  const logoutHandler = () => {
    authStore.logout();
    console.log(localStorage.getItem("token"));

    navigate("/register");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!userData) {
    return (
      <>
        <div>
          <Link to={"/"}>Home</Link>
          <p>Loading...</p>
        </div>
      </>
    );
  }

  setTimeout(() => {
    if (!userData) {
      return (
        <div>
          Произошла ошибка, пожалуйста попробуйте авторизоваться снова позднее
        </div>
      );
    }
  }, 3000);

  return (
    <div>
      {err ? (
        <div>
          <p>Вы не зарегестрировались</p>
          <Link to={"/register"}>регистрация</Link>
        </div>
      ) : (
        <>
          <Link to={"/"}>Home</Link>

          <h1>Profile</h1>
          <p>Username: {userData.user.username}</p>
          <p>Email: {userData.user.email}</p>
          <button onClick={logoutHandler}>Выйти из аккаунта</button>
        </>
      )}
    </div>
  );
};
