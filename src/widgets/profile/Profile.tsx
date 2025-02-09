import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Profile = () => {
  const [userData, setUserData] = useState<{
    user: {
      username: string;
      email: string;
    };
  } | null>(null);

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
      console.error("Failed to fetch profile", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h1>Profile</h1>
      <p>Username: {userData.user.username}</p>
      <p>Email: {userData.user.email}</p>
    </div>
  );
};

export default Profile;
