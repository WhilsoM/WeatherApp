import { About } from "@/pages/about/About";
import { Home } from "@/pages/home/Home";
import { Login } from "@/pages/login/Login";
import { Memes } from "@/pages/memes/Memes";
import { NotFoundPage } from "@/pages/not-found-page/NotFoundPage";
import { Registration } from "@/pages/registration/Registration";
import { Profile } from "@/widgets/profile/Profile";
import ProtectedRoute from "@/widgets/protected-route/ProtectedRoute";
import { Route, Routes } from "react-router";
import { Layout } from "./Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="memes" element={<Memes />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
