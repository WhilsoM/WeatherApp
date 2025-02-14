import { Home } from "@/pages/home/";
import { Login } from "@/pages/login/";
import { NotFoundPage } from "@/pages/not-found-page/";
import { Profile } from "@/pages/profile/";
import { Registration } from "@/pages/registration/";
import ProtectedRoute from "@/widgets/protected-route/ProtectedRoute";
import { lazy } from "react";
import { Route, Routes } from "react-router";
import { Layout } from "./Layout";

const Memes = lazy(() => import("@/pages/memes/ui/Memes"));
const About = lazy(() => import("@/pages/about/ui/About"));

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
