import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
