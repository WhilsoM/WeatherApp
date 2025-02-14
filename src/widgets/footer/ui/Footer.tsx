import s from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.wrapper}`}>
        <div className={s.logo}>
          <img className={s.logo} src={"/logo.png"} alt="logo" loading="lazy" />
        </div>

        <section className={s.center}>
          <p>&copy;created by Akhmetov Arthur & Zenkov Bogdan</p>
        </section>
      </div>
    </footer>
  );
};
