import { About } from "@/pages/about/About";
import { Home } from "@/pages/home/Home";
import { Memes } from "@/pages/memes/Memes";
import { Registration } from "@/pages/registration/Registration";
import { Route, Routes } from "react-router";
import { Layout } from "./Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="registration" element={<Registration />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="memes" element={<Memes />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
