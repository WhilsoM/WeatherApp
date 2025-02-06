import s from "./ui/footer.module.scss";
import logo from "/logo.png";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.wrapper}`}>
        <div className={s.logo}>
          <img className={s.logo} src={logo} alt="logo" />
        </div>

        <section className={s.center}>
          <p>&copy;created by Akhmetov Arthur & Zenkov Bogdan</p>
        </section>
      </div>
    </footer>
  );
};
